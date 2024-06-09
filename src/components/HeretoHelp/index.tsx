import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { HeretoHelpProps } from "./types";
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
  StyledCol,
} from "./styles";
import Card from "../../common/Cards";
import { Carousel } from "antd";

const HeretoHelp = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: HeretoHelpProps) => {
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
          direction={direction}
        >
          <Col lg={11} md={11} sm={12} xs={24}>
            {/* <SvgIcon src={icon} width="100%" height="100%" /> */}
            <h6>{t(title)}</h6>
            <Content>{t(content)}</Content>
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              {/* <h6>{t(title)}</h6> */}
              {/* <Content>{t(content)}</Content> */}
              <Carousel autoplay dotPosition="top" autoplaySpeed={3000}>
            {section?.map((item)=>{
              return(
                <div >
            <Row style={{backgroundColor:"#D3E5E5"}}>
                {/* <Col span={12} style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#008080"}}> */}
                {/* <SvgIcon src={item.icon} width="100%" height="80%" /> */}
                {/* </Col> */}
                <StyledCol span={24}>
                <p style={{color:"white",fontSize:44,fontWeight:600}}>{item.title}</p>
                <p style={{color:"white"}}>{item.content}</p>
                </StyledCol>
            </Row>
            </div>
              )
            })}
  </Carousel>
              {/* {direction === "right" ? (
                <ButtonWrapper>
                  {typeof button === "object" &&
                    button.map(
                      (
                        item: {
                          color?: string;
                          title: string;
                        },
                        id: number
                      ) => {
                        return (
                          <Button
                            key={id}
                            color={item.color}
                            onClick={() => scrollTo("about")}
                          >
                            {t(item.title)}
                          </Button>
                        );
                      }
                    )}
                </ButtonWrapper>
              ) : (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {typeof section === "object" &&
                      section.map(
                        (
                          item: {
                            title: string;
                            content: string;
                            icon: string;
                          },
                          id: number
                        ) => {
                            console.log(item.title)
                          return (
                            <Col key={id} span={11}>
                              <SvgIcon
                                src={item.icon}
                                width="60px"
                                height="60px"
                              />
                              <MinTitle>{t(item.title)}</MinTitle>
                              <MinPara>{t(item.content)}</MinPara>
                            </Col>
                            
                          );
                        }
                      )}
                  </Row>
                </ServiceWrapper>
              )} */}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(HeretoHelp);
