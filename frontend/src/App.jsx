import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CategoryBar from "./components/CategoryBar";
import CategoryPage from "./components/CategoryPage";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgetPass from "./pages/ForgetPass";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/search/" element={<Search />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<Register />} />
        <Route path="/forgetpass" element={<ForgetPass />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/search/" element={<Search />} />
      </Routes>
      <CategoryBar />
      <Footer />
    </div>
  );
}

export default App;
