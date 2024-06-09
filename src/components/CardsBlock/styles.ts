import styled from "styled-components";

export const CardBlockSection = styled("section")`
  
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;
  align-items:center;
  text-align:center;

  @media only screen and (max-width: 575px) {
    max-width: 100%;
    align-items:center;
  text-align:center;
  }
`;
