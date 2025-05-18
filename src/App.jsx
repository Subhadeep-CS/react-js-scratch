import "./App.css";
import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import InputUndestanding from "./pages/InputUnderstanding";
import RefComponent from "./pages/RefComponent";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/input-understanding" element={<InputUndestanding />} />
          <Route path="/ref" element={<RefComponent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      {/* <DemoComponent name={"subhadeep"} age={20}>
        <div>I am a bad body</div>
      </DemoComponent> */}
      {/* <DemoComponent name="Subhadeep" age={20} />
      <DemoComponent name="Subho" age={24} />
      <DemoComponent name="Subhadeep" age={20} />
      <DemoComponent name="Subhadeep" age={20} /> */}
    </>
  );
}

export default App;
