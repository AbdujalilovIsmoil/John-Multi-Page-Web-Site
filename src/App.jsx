import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import ErrorFound from "./UI/404/ErrorFound";
import "./style.css";
import Homes from "./pages/Home/Homes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homes />}/>
            <Route path="*" element={<ErrorFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
