import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, headerMenu }) => {
  return (
    <div>
      <Header headerMenu={headerMenu} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
