import React, { Component } from "react"
import Header from "./Header/Header"
import GlobalStyle from "../styles/global"
import Footer from "./Footer/Footer"

export default ({ children }) => (
  <div>
    <GlobalStyle />
    <Header />
    {children}
    <Footer />
  </div>
)
