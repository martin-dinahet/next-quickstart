import React from "react";

import { useAuth } from "@/contexts/auth/auth-context";
import { Outlet } from "react-router-dom";
import { LoginPage } from "@/pages/login";
import { RegisterPage } from "@/pages/register";
import { Toaster } from "@/components/ui/sonner";

export const MainLayout: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    switch (location.pathname) {
      case "/register":
        return (
          <>
            <div className="w-full min-h-screen">
              <RegisterPage />
              <Toaster />
            </div>
          </>
        );
      default:
        return (
          <>
            <div className="w-full min-h-screen">
              <LoginPage />
              <Toaster />
            </div>
          </>
        );
    }
  }

  return (
    <>
      <div className="w-full min-h-screen">
        <Outlet />
        <Toaster />
      </div>
    </>
  );
};
