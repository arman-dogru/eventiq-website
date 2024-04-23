import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Classicpage from "./Pages/Classicpage";
import Professional from "./Pages/Professional";
import Layout from "./Pages/Layout";
import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import Page1 from "./Pages/BlogPages/Page1";
import Page2 from "./Pages/BlogPages/Page2";
import Page3 from "./Pages/BlogPages/Page3";
import Page4 from "./Pages/BlogPages/Page4";
// import Page5 from "./Pages/BlogPages/Page5";
// import Page6 from "./Pages/BlogPages/Page6";
// import ClassicUsers from "./Pages/ClassicUsers";
import TeamInfo from "./Pages/TeamInfo";
import FaqPage from "./Pages/FaqPage";
import PrivacyPolicy from "./Pages/PrivacyPolicy.js";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/classic" element={<Classicpage />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/team" element={<TeamInfo />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/policy" element={<PrivacyPolicy/>} />
        {/* <Route path="/ClassicsUsers" element={<ClassicUsers />} /> */}
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        {/* <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
