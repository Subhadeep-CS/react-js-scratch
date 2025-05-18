/**
 *
 * FOLDER COMPONENT=>
 *
 * 1. Component architecture=> reusable component
 * 2. css redability=>
 * 3. component => structure
 *
 * common=>
 *
 */
import Header from "../common/Header";
import Footer from "../common/Footer";
const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
