import { StyledContent,MyStyledContainer,StyledHeader,StyledPara } from "./styles";
import { CardProps} from "../types";
import { SvgIcon } from "../SvgIcon";

const Card = ({ title,content,icon}: CardProps) => (
  <MyStyledContainer>
       {/* <SvgIcon
            src={icon}
            width="100px"
            height="100px"
            /> */}
    <StyledContent>
        <StyledHeader>
            <p style={{fontSize:25,color:'#008080',fontWeight:"bolder"}}>{title}</p>
        </StyledHeader>
        
        <StyledPara>
            <p style={{fontSize:18,color:'#008080'}}>{content}</p>
        </StyledPara>
    </StyledContent>
    </MyStyledContainer>
);

export default Card;
