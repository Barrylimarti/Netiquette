import styled from "styled-components";

export const CardBlockSection = styled("section")`
position: relative;
padding: 10rem 0 8rem;

@media only screen and (max-width: 575px) {
  padding: 4rem 0 0rem;
}
  
`;

export const Content = styled("p")`
  padding: 2rem 2rem 2rem;
  color:#fff;
  background:#008080
`;

export const ContentWrapper = styled("div")`
  max-width: 80%;
  color: #fff;
  @media only screen and (max-width: 575px) {
    max-width: 80%;
  }
`;
export const Heading2 = styled("h2")`
font-size:20px;
@media only screen and (max-width: 700px) {
  font-size:16px;
}
`
