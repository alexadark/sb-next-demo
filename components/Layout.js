import Footer from "./Footer";
import Header from "./Header";

Footer;

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />;
    </div>
  );
};

export default Layout;
