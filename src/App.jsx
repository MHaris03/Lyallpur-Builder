import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Service from "./components/Services/Service";
import OurService from "./pages/OurServices";
import Footer from "./pages/Footer";
import Gallery from "./pages/Gallery";
import WhyChooseUs from "./pages/WhyChoose";
import AboutUs from "./pages/AboutUs";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <WhyChooseUs />
              <Service />
              <Gallery />
            </>
          }
        />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/our-services" element={<OurService />} />
        <Route path="/our-gallery" element={<Gallery />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
