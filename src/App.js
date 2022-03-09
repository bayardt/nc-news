import React, { useState, useEffect } from "react";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <ArticleList />
    </>
  );
}

export default App;
