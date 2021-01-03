import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const SiteTitle = styled.div`
  margin-left: 1rem;

  p {
    margin: 0;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.p`
  font-size: ${(props) => props.theme.fontSize.display};
  font-family: "Playfair Display", "Times New Roman", Times, serif;
  color: ${(props) => props.theme.grey1};

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.title};
  }
`;

const Subtitle = styled.p`
  font-size: ${(props) => props.theme.fontSize.reading};

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.information};
  }
`;

const NavStyle = styled.nav`
  display: flex;
  justify-self: flex-end;
  flex-direction: column;
  flex: 1 0;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 1rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 0;

    & a {
      padding: 1rem 0;
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <SiteTitle>
        <Title>Richard D Kirkley</Title>
        <Subtitle>Photography Enthusiast. Animal & Nature Lover.</Subtitle>
      </SiteTitle>
      <NavStyle>
        <Link to="/">Home</Link>
        <Link to="/photography">Photography</Link>
        <Link to="/artwork">Artwork</Link>
        <Link to="/guestbook">Guest Book</Link>
        <Link to="/about">About</Link>
      </NavStyle>
    </HeaderStyle>
  );
};

export default Header;
