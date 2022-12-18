import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import ErrorFound from "./UI/404/ErrorFound";
import "./style.css";
import Homes from "./pages/Home/Homes";
import Blog from "./pages/Blog/Blog";
import Work from "./pages/Work/Work";
import WorkDetail from "./pages/WorkDetail/WorkDetail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homes />} />
            <Route path="*" element={<ErrorFound />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<WorkDetail />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
