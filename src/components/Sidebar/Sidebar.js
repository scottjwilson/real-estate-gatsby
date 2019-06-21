import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { MdHome, MdImportExport, MdAttachMoney, MdForum } from "react-icons/md"

const Sidebar = () => {
  return (
    <Wrapper>
      <List>
        <Item>
          <AniLink fade to="/" className="homes">
            <MdHome className="icon" />
            Featured Homes
          </AniLink>
        </Item>
        <Item>
          <AniLink fade to="/evaluation" className="homes">
            <MdImportExport className="icon" />
            Evaluation
          </AniLink>
        </Item>
        <Item>
          <AniLink fade to="/homes" className="homes">
            <MdAttachMoney className="icon" />
            Sell Your Home
          </AniLink>
        </Item>
        <Item>
          <AniLink fade to="/homes" className="homes">
            <MdForum className="icon" />
            Contact Me
          </AniLink>
        </Item>
      </List>
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.nav`
  background-color: #ddd;
  flex: 0 0 18%;
  display: flex;
`

const List = styled.ul`
  font-size: 1.5rem;
  list-style: none;
  margin-top: 3.5rem;

  @media only screen and (max-width: 56.25em) {
    display: flex;
    justify-content: center;
    font-size: 2rem;
  }
`

const Item = styled.li`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  .homes {
    margin-left: 1rem;
    display: flex;
    align-content: center;
    align-items: center;
  }

  .icon {
    margin-right: 1rem;
  }
`
