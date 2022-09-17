import Navbar from "./Navbar";
import Footer from "./Footer";
import CenteredHeader from "./CenteredHeader";
import CompanyFooter from "./CompanyFooter";

const Layout = ({ children }) => {
  return (
    <div className="font-serif flex flex-col min-h-screen">
      <CenteredHeader />
      <main className="flex-1">{children}</main>
      <CompanyFooter />
    </div>
  );
};

export default Layout;