import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import { AppProvider } from "./components/context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
 <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="about" element = {<About />}/>
      <Route path="book" element = {<BookList />}/>
      <Route path="/book/:id" element = {<BookDetails />}/>
    </Routes>
  </BrowserRouter>
  </AppProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
