import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CategoryBar from "./components/CategoryBar";
import CategoryPage from "./components/CategoryPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Routes>
        <CategoryBar />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
