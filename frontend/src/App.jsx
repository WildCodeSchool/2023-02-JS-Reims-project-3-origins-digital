import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CategoryBar from "./components/CategoryBar";
import CategoryPage from "./components/CategoryPage";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/search/" element={<Search />} />
        </Routes>
        <CategoryBar />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
