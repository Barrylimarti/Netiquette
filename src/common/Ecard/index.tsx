import { StyledContent,StyledContainer,StyledHeader,StyledPara } from "./styles";
import { CardProps} from "../types";
import { SvgIcon } from "../SvgIcon";

const Ecard = ({ title,content,icon}: CardProps) => (
  <StyledContainer>
       {/* <SvgIcon
            src={icon}
            width="100px"
            height="100px"
            /> */}
    <StyledContent>
        {/* <StyledHeader>
            <p style={{fontSize:23,color:'#008080',fontWeight:"bolder"}}>{title}</p>
        </StyledHeader> */}
        
        <StyledPara>
            <p style={{fontSize:18,color:'#008080',fontWeight:"bolder"}}>{content}</p>
        </StyledPara>
    </StyledContent>
    </StyledContainer>
);

export default Ecard;
