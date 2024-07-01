import Footer from "./Footer";
import Hero from "./Hero";
import MiniNavbar from "./MiniNavbar";
import Navbar from "./Navbar";
import Home from "./subPages/Home";
export default function MainPage() {
    return (
      <>
        <Navbar/>
        <Hero/>
        <MiniNavbar/>
        <Footer/>
      </>
    )
  }