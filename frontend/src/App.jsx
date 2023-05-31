import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <CategoryBar />
        <Routes>
          <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
