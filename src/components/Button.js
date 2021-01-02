import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  border: 2px solid ${(props) => props.theme.grey3};
  color: ${(props) => props.theme.grey3};
  background: none;
  font-size: ${(props) => props.theme.fontSize.emphasis};
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  padding: 1rem 2rem;
  transition: 0.1s linear;

  &:hover {
    border: 2px solid ${(props) => props.theme.primary};
    color: ${(props) => props.theme.primary};
    cursor: pointer;
  }
`;

const Button = ({ children, onClick }) => {
  return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
};

export default Button;
