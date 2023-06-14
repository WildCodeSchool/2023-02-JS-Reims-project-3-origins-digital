import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CategoryBar from "./components/CategoryBar";
import CategoryPage from "./pages/CategoryPage";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgetPass from "./pages/ForgetPass";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/search/" element={<Search />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/inscription" element={<Register />} />
          <Route path="/forgetpass" element={<ForgetPass />} />
        </Routes>
        <CategoryBar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
