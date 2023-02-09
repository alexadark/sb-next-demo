import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, headerMenu }) => {
  return (
    <>
      <Header headerMenu={headerMenu} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
