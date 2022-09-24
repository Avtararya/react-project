import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/About";
import Home from "./component/home";
import Nav from "./component/nav";
import Profile from "./component/Profile";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
