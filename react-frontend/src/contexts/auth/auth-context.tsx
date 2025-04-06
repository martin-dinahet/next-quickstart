import React, { useContext } from "react";

import { AuthContextType } from "@/types/auth-context";
import { User } from "@/types/user";
import { toast } from "sonner";

const AuthContext = React.createContext<AuthContextType>({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  register: async () => {},
  updateProfile: async () => {},
  deleteProfile: async () => {},
  logout: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [token, setToken] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      fetchUserProfile(storedToken);
      return;
    }
    setIsLoading(false);
  }, []);

  const fetchUserProfile = async (token: string) => {
    const response = await fetch("http://localhost:3000/auth/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      setUser(await response.json());
      setIsLoading(false);
      return;
    }
    logout();
    setIsLoading(false);
  };

  const login = async (email: string, password: string) => {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      toast("Error: login failed");
      throw new Error("Authentication error: login failed");
    }
    const data = await response.json();
    const { token } = data;
    localStorage.setItem("token", token);
    setToken(token);
    toast("Logged in successfully.");
    await fetchUserProfile(token);
  };

  const register = async (username: string, email: string, password: string) => {
    const response = await fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
    if (!response.ok) {
      toast("Error: registration failed");
      throw new Error("Authentication error: registration failed");
    }
    await login(email, password);
  };

  const updateProfile = async (updateUserDto: Partial<User>) => {
    if (!token) throw new Error("Forbidden error: not authenticated");
    const response = await fetch("http://localhost:3000/auth/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUserDto),
    });
    if (!response.ok) {
      toast("Error: failed to update profile");
      throw new Error("Authentication error: failed to update profile");
    }
    const updatedUser = await response.json();
    toast("Account updated successfully.");
    setUser(updatedUser);
  };

  const deleteProfile = async () => {
    if (!token) throw new Error("Forbidden error: not authenticated");
    const response = await fetch("http://localhost:3000/auth/profile", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      toast("Error: failed to delete profile");
      throw new Error("Authentication error: failed to delete profile");
    }
    toast("Account delete successfully.");
    logout();
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        updateProfile,
        deleteProfile,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
