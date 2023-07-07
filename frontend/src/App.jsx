import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CategoryBar from "./components/CategoryBar";
import CategoryPage from "./pages/CategoryPage";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import VideoComponent from "./components/VideoComponent";
import "./App.css";
import { VideoProvider } from "./contexts/VideoContext";
import EditVideo from "./components/EditVideo";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="layout background">
        <main className="main">
          <VideoProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/category/:categoryName"
                element={<CategoryPage />}
              />
              <Route path="/search/" element={<Search />} />
              <Route path="/videos/:id" element={<VideoComponent />} />
              <Route path="/login" element={<Login />} />
              <Route path="/inscription" element={<Register />} />
            </Routes>
          </VideoProvider>
        </main>
        <CategoryBar />
      </div>
      <Footer />
      <EditVideo />
    </div>
  );
}

export default App;
