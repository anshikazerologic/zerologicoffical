
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import { CapabilityModel } from "./pages/CapabilityModel";
import { EngagementModel } from "./pages/EngagementModel";
import { Industries } from "./pages/Industries";
import { Proof } from "./pages/Proof";
import { Contact } from "./pages/Contact";
import { Services } from "./pages/Services";


export default function App() {
  return (
     <BrowserRouter>
      <div className="site-shell">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/capability-model" element={<CapabilityModel />} />

            <Route path="/services" element={<Services />} />
            <Route path="/engagement-models" element={<EngagementModel />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/proof" element={<Proof />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}