import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CategoryBar from "./components/CategoryBar";
import CategoryPage from "./components/CategoryPage";
import Carousel from "./components/Carousel";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Routes>
        <CategoryBar />
      </Router>
      <Carousel />
    </div>
  );
}

export default App;
