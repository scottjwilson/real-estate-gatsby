import React, { Component } from "react"
import Header from "./Header/Header"
import GlobalStyle from "../styles/global"
import Footer from "./Footer/Footer"
import styles from "../styles/styles"
import styled from "styled-components"
import Sidebar from "../components/Sidebar/Sidebar"

export default ({ children }) => (
  <div>
    <GlobalStyle />
    <Container>
      <Header />
      <Content>
        <Sidebar />
        {children}
      </Content>
      <Footer />
    </Container>
  </div>
)

const Container = styled.div`
    max-width: 120rem;
    margin: 4rem auto;
    background-color: {styles.colors.mainGrey}
    box-shadow: 0 2rem 6rem rgba(0,0,0, .3);

    min-height: 50rem;

    @media only screen and (max-width: 75em){ 
        margin: 0;
        max-width: 100%;
        width: 100%;
    }
}
`

const Content = styled.div`
  display: flex;

  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
  }
`
