import React from "react";
import { createGlobalStyle } from 'styled-components'
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import UserDetails from "./pages/UserDetails/UserDetails";
import PostDetails from "./pages/PostDetails/PostDetails";
import { primaryColor } from './utils/StylesVariables'

function App() {
  
  return (
    <>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<UserDetails />} />
      <Route path="/user/:id/:post_id" element={<PostDetails />} />
    </Routes>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    background-color: rgb(27, 27, 27);
    color: ${primaryColor};
  }

  a{
    text-decoration: none;
    color: ${primaryColor};
  }
`

export default App;
