import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SiteTitle = styled.div`
  margin-left: 1rem;

  p {
    margin: 0;
  }
`;

const NavStyle = styled.nav`
  display: flex;
  justify-self: flex-end;
  flex: 1 0;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 1rem;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <SiteTitle>
        <h1>Richard D Kirkley</h1>
        <p>Photography Enthusiast. Animal & Nature Lover.</p>
      </SiteTitle>
      <NavStyle>
        <div>Featured Galleries</div>
        <div>Photography</div>
        <div>Artwork</div>
        <div>Guest Book</div>
        <Link to="/about">About</Link>
      </NavStyle>
    </HeaderStyle>
  );
};

export default Header;
