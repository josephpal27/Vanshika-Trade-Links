// import { useEffect } from "react";
import { Outlet } from "react-router-dom"
import Header from "./components/header/Header";
import MyNavbar from './components/navbar/Navbar';
import ScrollToTop from "./components/ScrollToTop";
// import Footer from './components/footer/Footer';
// // import PageTitle from "./components/page-title/PageTitle";
// import AOS from "aos";

const App = () => {

  // AOS Init
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     offset: 100,
  //     // once: true,
  //   });
  // }, []);

  // Refresh AOS on scroll
  // useEffect(() => {
  //   const handleScroll = () => {
  //     AOS.refresh();
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      {/* <PageTitle/> */}
      <MyNavbar />
      <Header />
      <Outlet />
      {/* <Footer/> */}
      <ScrollToTop />
    </>
  )
}

export default App
