import styled from "styled-components";

export const MyStyledContainer = styled("div")`
  position: relative;
  width: 225px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  max-width: 500px;
  margin-right: auto;
  margin-left: auto;
  border: 2px solid black;
  border-color: green;
  margin: 10px;
  border-radius: 20px 20px;
  background:#008080;

  &:hover{
    background-color:#008080;
    
  }
  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 68px);
    padding: 0 30px;
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 38px);
    padding: 0 18px;
    height:550px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    padding: 0 18px;
  }
`;
export const StyledContainer = styled("div")`
  position: relative;
  width: 100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  max-width: 500px;
  height:350px;
  border: 2px solid black;
  border-color: green;
  
  border-radius: 20px 20px;
  background:#008080;

  &:hover{
    background-color:#008080;
    
  }
  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 68px);
    padding: 0 30px;
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 38px);
    padding: 0 18px;
    height:550px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    padding: 0 0px;
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
background:#008080;
  width:100%;
  border-radius: 20px 20px 0px 0px;
  height:60px;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:20px;

  @media only screen and (max-width: 750px) {
    font-size:10px;
    height:100px;
  }
`
export const StyledPara=styled("div")`
position:relative;
  margin-top:10;
  background:white;
  padding:5px;
  text-align:center;
  display:flex;
  justify-content:center;
  align-items:center;
  height:100%;
  border-radius: 0px 0px 20px 20px;
`
