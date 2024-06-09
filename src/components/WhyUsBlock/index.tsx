import { Carousel } from "antd";
import React from "react";
import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { CardBlockSection, Content, ContentWrapper,CarouselContentStyle, CarouselContentWrapper, StyledCol } from "./styles";
import Card from "../../common/Cards";
import { SvgIcon } from "../../common/SvgIcon";
import { StyledRow } from "./styles";

interface WhyUsProps {
    title: string;
    cards?: {
      title: string;
      content: string;
      icon:string;
    }[];
  t: TFunction;
  id: string;
}
const contentStyle: React.CSSProperties = {
    height: '200px',
    color: '#008080',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const cardStyle: React.CSSProperties = {
    display:"flex",
    flexDirection:"row",
    flex:1
  };
  
const CarouselBlock = ({ title,cards,id, t }: WhyUsProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <CardBlockSection>
      <Slide direction="up" triggerOnce>
        {/* <ContentWrapper> */}
        <h6>{t(title)}</h6>
        {/* <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={"up"}
        >
          <Col lg={24} md={11} sm={11} xs={24}> */}
              <CarouselContentWrapper>
              {/* <h6>{t(title)}</h6> */}
              {/* <Content>{t(content)}</Content> */}
              <Carousel autoplay dotPosition="top" autoplaySpeed={3000} style={{width:"100%",backgroundColor:"#008080",padding:10}}>
            {cards?.map((item)=>{
              return(
            <Row style={{display:'flex',flexDirection:"row",backgroundColor:"#008080",paddingTop:40}}>
                <StyledCol lg={24} md={11} sm={12} xs={24}>
                {/* <Col lg={24} md={11} sm={12} xs={24} style={{ display: 'flex',flexDirection:"column", justifyContent: 'center', alignItems: 'center',gap:10,padding:2}}> */}
            <SvgIcon src={item.icon} width="20%" height="20%" />
            <ContentWrapper>
                <p style={{color:"white",fontSize:44,fontWeight:600}}>{item.title}</p>
                <p style={{color:"white",width:"100%"}}>{item.content}</p>
            </ContentWrapper>
          {/* </Col> */}
          </StyledCol>
                {/* <Col lg={11} md={11} sm={12} xs={24} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#008080",padding:20,height:500,flexWrap:"wrap"}}>
                  <ContentWrapper>
                <p style={{color:"white",fontSize:44,fontWeight:600}}>{item.title}</p>
                <p style={{color:"white",width:"100%"}}>{item.content}</p>
                </ContentWrapper>
                </Col> */}
            </Row>
              )
            })}
  </Carousel>
  </CarouselContentWrapper>
  {/* </Col>
        </StyledRow> */}
          {/* <Carousel autoplay dotPosition="top" autoplaySpeed={1000}>
            {cards?.map((item,index)=>{
              return(
                <div >
            <Row style={{backgroundColor:"#D3E5E5"}}>
                <Col lg={11} md={11} sm={12} xs={24} style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#008080"}}>
                <SvgIcon src={item.icon} width="100%" height="80%" />
                </Col>
                <Col lg={11} md={11} sm={12} xs={24} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#008080"}}>
                <p style={{color:"white",fontSize:44,fontWeight:600}}>{item.title}</p>
                <p style={{color:"white"}}>{item.content}</p>
                </Col>
            </Row>
            </div>
              )
            })}
  </Carousel> */}
  {/* </ContentWrapper> */}
      </Slide>
    </CardBlockSection>
  );
};

export default withTranslation()(CarouselBlock);
