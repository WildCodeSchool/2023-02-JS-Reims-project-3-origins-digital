import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoryBar from "./components/CategoryBar";
import CategoryPage from "./components/CategoryPage";

function App() {
  return (
    <div className="App">
      <Router>
        <CategoryBar />
        <Routes>
          <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
