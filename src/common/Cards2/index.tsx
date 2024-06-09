import { StyledContent,MyStyledContainer,StyledHeader,StyledPara } from "./styles";
import { CardProps} from "../types";
import { SvgIcon } from "../SvgIcon";

const Card = ({ title,content,icon}: CardProps) => (
  <MyStyledContainer>
       
    <StyledContent>
        <StyledHeader>
            <h1 style={{fontSize:25,color:'#008080',fontWeight:900}}>{title}</h1>
        </StyledHeader>
        <SvgIcon
            src={icon}
            width="100px"
            height="100px"
            />
        <StyledPara>
            <p style={{fontSize:18,color:'#008080'}}>{content}</p>
        </StyledPara>
    </StyledContent>
    </MyStyledContainer>
);

export default Card;
