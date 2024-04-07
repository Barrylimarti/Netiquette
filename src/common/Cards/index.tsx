import { StyledContent,StyledContainer,StyledHeader,StyledPara } from "./styles";
import { CardProps} from "../types";
import { SvgIcon } from "../SvgIcon";

const Card = ({ title,content,icon}: CardProps) => (
  <StyledContainer>
       <SvgIcon
            src={icon}
            width="200px"
            height="200px"
            />
    <StyledContent>
        <StyledHeader>
            <p style={{fontSize:20}}>
        {title}
        </p>
        </StyledHeader>
        
        <StyledPara>
            <p style={{fontSize:16}}>
            {content}
            </p>
        </StyledPara>
    </StyledContent>
    </StyledContainer>
);

export default Card;
