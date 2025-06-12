import "@/globals.css";

export const metadata = {
  title: "Fullstack App Quickstart",
  description: "Made with <3 by Martin Dinahet",
};

type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className="antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
