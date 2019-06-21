import React from "react"
import styled from "styled-components"
import { TiHomeOutline, TiBookmark, TiUser } from "react-icons/ti"
import { MdSearch } from "react-icons/md"

const Header = () => {
  return (
    <TopBar>
      <Logo>
        <TiHomeOutline />
      </Logo>
      <SearchForm>
        <SearchInput placeholder="search homes" />
        <SearchButton>
          <MdSearch className="icon" />
        </SearchButton>
      </SearchForm>
      <UserNav>
        <IconBox>
          <TiBookmark className="icon" />
        </IconBox>
        <IconBox>
          <TiUser className="icon" />
        </IconBox>
      </UserNav>
    </TopBar>
  )
}

const TopBar = styled.header`
  font-size: 1.4rem;
  height: 7rem;
  background-color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.div`
  font-size: 3.2rem;
  margin-left: 2rem;
  display: flex;
  align-items: flex-start;
`

const SearchForm = styled.form`
  flex: 0 0 40%;

  display: flex;
  align-items: center;
  justify-content: center;
`

const SearchInput = styled.input`
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background-color: #eee;
  border: none;
  padding: 0.7rem 2rem;
  border-radius: 10rem;
  width: 90%;
  transition: all 0.2s;
  margin-right: -3.25rem;

  &:focus {
    outline: none;
    width: 95%;
    background-color: {styles.colors.mainRed};
  }
`

const SearchButton = styled.button`
  border: none;
  background-color:  #eee;
  border-radius: 50%;

  &:focus {
    outline: none;
  }

  &:active {
    transform: translateY(2px);
  }
  .icon {
    height: 1.5rem;
        width: 1.6rem;
        color: {styles.colors.mainGrey};
  }
`

const UserNav = styled.nav`
  align-self: stretch;

  display: flex;
  align-items: center;
`

const IconBox = styled.div`
  font-size: 2rem;

  .icon {
    margin: 0 1.5rem;
  }
`

export default Header
