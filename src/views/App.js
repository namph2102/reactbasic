import Header from "../components/pages/Header";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Covid from "./Covid";
import Footer from "../components/pages/Footer";
import Content from "../components/pages/Content";
import Blogs from "../components/pages/Blogs";
import Blog from "../components/pages/Blog";
import Todo from "./Todo/Todo";
function App() {
  console.log("re-drender");
  return (
    <Router>
      <div className="App">
        <Header />
        <main style={{ height: "75vh" }}>
          <Routes>
            <Route path="/" exac element={<Footer />} />
            <Route path="/ss" element={<Covid />} />
            <Route path="/content" element={<Content />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/about" element={<Footer />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
