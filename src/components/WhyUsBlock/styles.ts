import styled from "styled-components";

export const CardBlockSection = styled("section")`
  position: relative;
  padding: 10rem 10rem 10rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 10rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 1440px;
  text-align:center;

  @media only screen and (max-width: 768px) {
    max-width: 80%;
  }
`;
export const CarouselContentStyle = styled('h3')`
    height: 160px,
    color: #fff,
    lineHeight: 160px,
    textAlign: center,
    background: #364d79;`
  