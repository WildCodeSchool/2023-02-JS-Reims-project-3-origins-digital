import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CategoryBar from "./components/CategoryBar";
import CategoryPage from "./components/CategoryPage";
import Footer from "./components/Footer";
import SearchResults from "./components/SearchResults";
import VideoSlider from "./components/VideoSlider";
import "./App.css";

function App() {
  const videos = [
    "https://youtu.be/p5RKLMMb5u4",
    "https://youtu.be/_GMJH85RgVA",
    "https://youtu.be/kHsum3xHplA",
    "https://youtu.be/Gdgp0exjN8I",
    "https://youtu.be/mwIkAbAa9ec",
    "https://youtu.be/zvq7GJQb2Sw",
    "https://youtu.be/Myh74zZ4zi8",
    "https://youtu.be/Dgi5XGB2rnA",
    "https://youtu.be/w_xyfEkKep8",
  ];

  return (
    <div className="App">
      <Header />
      <Router>
        <VideoSlider slideNumber={3} videos={videos} name="Suggestions" />
        <VideoSlider slideNumber={4} videos={videos} name="Vos videos" />
        <VideoSlider slideNumber={4} videos={videos} />
        <Routes>
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/search/:query" element={<SearchResults />} />
        </Routes>
        <CategoryBar />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
