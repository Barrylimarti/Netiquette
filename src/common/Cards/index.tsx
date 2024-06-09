import { StyledContent,StyledContainer,StyledHeader,StyledPara } from "./styles";
import { CardProps} from "../types";
import { SvgIcon } from "../SvgIcon";

const Card = ({ title,content,icon}: CardProps) => (
  <StyledContainer>
       {/* <SvgIcon
            src={icon}
            width="100px"
            height="100px"
            /> */}
    {/* <StyledContent> */}
        <StyledHeader>
            <h1 style={{fontSize:20,color:'#fff',fontWeight:"bolder"}}>{title}</h1>
        </StyledHeader>
        
        <StyledPara>
            <p style={{fontSize:16,color:'#008080'}}>{content}</p>
        </StyledPara>
    {/* </StyledContent> */}
    </StyledContainer>
);

export default Card;
