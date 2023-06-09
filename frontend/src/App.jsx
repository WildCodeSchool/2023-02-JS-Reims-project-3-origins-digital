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
import AdminPage from "./pages/AdminPage";
import DeleteVideo from "./components/DeleteVideo";
import EditVideo from "./components/EditVideo";
import AddVideo from "./components/AddVideo";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { token, isAdmin } = useAuth();

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

              <Route
                path="admin"
                element={token && isAdmin ? <AdminPage /> : <Home />}
              />

              <Route path="/login" element={<Login />} />
              <Route path="/inscription" element={<Register />} />
              <Route path="/deletevideos" element={<DeleteVideo />} />
              <Route path="/editvideos" element={<EditVideo />} />
              <Route path="/addvideos" element={<AddVideo />} />
            </Routes>
          </VideoProvider>
        </main>
        <CategoryBar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
