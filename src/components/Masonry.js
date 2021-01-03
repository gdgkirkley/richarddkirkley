import React, { useState, useLayoutEffect, useRef } from "react";
import styled from "styled-components";

export const MasonryStyle = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-content: space-between;
  /* Your container needs a fixed height, and it 
   * needs to be taller than your tallest column. */
  height: ${(props) => (props.height ? `${props.height}px` : "7600px")};

  @media (max-width: 768px) {
    height: 2800px;
  }

  &::before,
  ::after {
    content: "";
    flex-basis: 100%;
    width: 0;
    order: 2;
  }
`;

export const Item = styled.div`
  width: 32%;
  margin-bottom: 2%;

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

const Masonry = ({ children }) => {
  const [masonryHeight, setMasonryHeight] = useState(0);
  const container = useRef();
  useLayoutEffect(() => {
    if (!container.current) return;

    const images = container.current.querySelectorAll("img");

    const totalHeight = [...images].reduce((acc, image) => {
      return acc + image.clientHeight;
    }, 0);

    let margin = totalHeight * 0.02;

    setMasonryHeight((totalHeight + margin) / 3 + 100);
  }, []);

  return (
    <MasonryStyle ref={container} height={masonryHeight}>
      {children}
    </MasonryStyle>
  );
};

export default Masonry;
