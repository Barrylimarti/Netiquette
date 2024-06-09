import styled from "styled-components";
import { Col, Row } from "antd";

export const CardBlockSection = styled("section")`
  position: relative;
  padding: 2rem 2rem 2rem;
  text-align: center;
  

  @media screen and (max-width: 1024px) {
    padding: 10rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
position: relative;
max-width: 1440px;

@media only screen and (max-width: 575px) {
  padding-top: 4rem;
}
 
`;
export const CarouselContentWrapper = styled("div")`
position: relative;
max-width: 1440px;

@media only screen and (max-width: 575px) {
  padding-top: 4rem;
}
 
`;
export const CarouselContentStyle = styled('h3')`
    height: 160px,
    color: #fff,
    lineHeight: 160px,
    textAlign: center,
    `;

export const StyledRow = styled(Row)`
    flex-direction: ${({ direction }: { direction: string }) =>
      direction === "left" ? "row" : "row-reverse"};
  `;

  export const StyledCol = styled(Col)`
  display:flex;
  flex-direction:row;
  justify-items:center;
  align-items:center;

  @media only screen and (max-width: 575px) {
    flex-direction:column;
    padding-top:2rem;
  }
  `;