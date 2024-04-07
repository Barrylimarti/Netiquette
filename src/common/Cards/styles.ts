import styled from "styled-components";

export const StyledContainer = styled("div")`
  position: relative;
  width: 400px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  max-width: 500px;
  margin-right: auto;
  margin-left: auto;
  border: 2px solid black;
  border-color: green;
  height:400px;
  margin: 10px;
  border-radius: 20px 20px;
  padding: 20px;

  &:hover{
    background-color:rgba(0, 128, 128,0.2) ;
  }
  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 68px);
    padding: 0 30px;
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 38px);
    padding: 0 18px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    padding: 0 18px;
  }
`;
export const StyledContent = styled("div")`
  position: relative;
  width: 100%;
  display:flex;
  flex-direction:column;
  flex:1;
  
  align-items:center;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;


  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 68px);
    padding: 0 30px;
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 38px);
    padding: 0 18px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    padding: 0 18px;
  }
`;
export const StyledHeader=styled("div")`
  
`
export const StyledPara=styled("div")`
position:relative;
  margin-top:10;
`
