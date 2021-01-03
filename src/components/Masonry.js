import React, { useState, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Masonry from "react-masonry-css";

export const MasonryStyle = styled(Masonry)`
  display: flex;

  width: auto;

  & .column {
    padding-left: 1rem;
    background-clip: padding-box;
  }
`;

export const Item = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  &:nth-child(3n + 1) {
    order: 1;
  }
  &:nth-child(3n + 2) {
    order: 2;
  }
  &:nth-child(3n) {
    order: 3;
  }

  & img {
    width: 100%;
  }
`;

const MasonryComponent = ({ children }) => {
  return (
    <MasonryStyle
      breakpointCols={{ default: 3, 768: 1 }}
      columnClassName={"column"}
    >
      {children}
    </MasonryStyle>
  );
};

export default MasonryComponent;
