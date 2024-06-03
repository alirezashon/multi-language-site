import { Inter } from "next/font/google";
import Navigation from "../Components/Navigation";
import Footer from "@/Components/Navigation/Footer";
import { LanguageProvider } from "../Context"; // Update the import path as necessary

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: any) => {
  return (
    <LanguageProvider>
      <div>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Layout;
