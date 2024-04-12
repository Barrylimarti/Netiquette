import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import {ApproachProps} from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";
import Card from "../../common/Cards";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: ApproachProps) => {
  
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={'left'}
        >
          <Col lg={11} md={11} sm={12} xs={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <SvgIcon src={icon} width="90%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <ContentWrapper>
              <h6 style={{color:'#008080'}}>{t(title)}</h6>
              <Content>{t(content)}</Content>
              
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
