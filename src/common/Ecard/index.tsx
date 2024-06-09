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
    {/* <StyledContent> */}
        {/* <StyledHeader>
            <p style={{fontSize:23,color:'#008080',fontWeight:"bolder"}}>{title}</p>
        </StyledHeader> */}
        
        {/* <StyledPara> */}
            <h1 style={{fontSize:18,color:'#008080',fontWeight:"bolder"}}>{content}</h1>
        {/* </StyledPara> */}
    {/* </StyledContent> */}
    </StyledContainer>
);

export default Ecard;
