import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Message from "./components/pages/Message";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/message" element={<Message />} />
    </Routes>
  );
}

export default App;
