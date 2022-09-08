import Login from "./components/Login";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchResults from "./components/SearchResults";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </>
      </BrowserRouter>
    </div>
  );
};

export default App;
