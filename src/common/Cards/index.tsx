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
    <StyledContent>
        <StyledHeader>
            <p style={{fontSize:23,color:'#fff',fontWeight:"bolder"}}>{title}</p>
        </StyledHeader>
        
        <StyledPara>
            <p style={{fontSize:16,color:'#fff'}}>{content}</p>
        </StyledPara>
    </StyledContent>
    </StyledContainer>
);

export default Card;
