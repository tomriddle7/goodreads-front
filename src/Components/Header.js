import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #56CC9D;
  z-index: 10;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 20vw;
  height: 50px;
  font-size: 18px;
  text-align: center;
  color: 
    ${props => (props.current ? "#ffffff" : "#DDDDDD")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => {
  const Authenticated = window.sessionStorage.getItem("authenticated");
  console.log(Authenticated === "true");
  return (
    <Header>
      <List>
        <Item current={pathname === "/"}>
          <SLink to="/">Home</SLink>
        </Item>
        <Item current={pathname === "/search"}>
          <SLink to="/search">Search</SLink>
        </Item>
        <Item current={pathname === "/add"}>
          <SLink to="/add">Add</SLink>
        </Item>
        {Authenticated === "true" ? (
          <>
          <Item current={pathname === "/logout"}>
            <SLink to="/logout">Logout</SLink>
          </Item>
          <Item current={pathname === "/shelf"}>
            <SLink to="/shelf">My Shelf</SLink>
          </Item>
        </>
        ) : (
          <>
            <Item current={pathname === "/login"}>
              <SLink to="/login">Login</SLink>
            </Item>
            <Item current={pathname === "/signup"}>
              <SLink to="/signup">Signup</SLink>
            </Item>
          </>
        )}
        
      </List>
    </Header>
  );
});