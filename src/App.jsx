import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { useTheme } from "./hooks/useTheme";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hire from "./pages/Hire";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Resume from "./pages/Resume";
import Work from "./pages/Work";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Nav theme={theme} toggleTheme={toggle} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
