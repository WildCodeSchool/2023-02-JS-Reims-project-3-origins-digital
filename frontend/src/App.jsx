import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CategoryBar from "./components/CategoryBar";
import CategoryPage from "./components/CategoryPage";

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
    </div>
  );
}

export default App;
