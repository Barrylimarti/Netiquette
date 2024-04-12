import { Carousel } from "antd";
import React from "react";
import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { CardBlockSection, Content, ContentWrapper,CarouselContentStyle } from "./styles";
import Card from "../../common/Cards";
import { SvgIcon } from "../../common/SvgIcon";

interface WhyUsProps {
    title: string;
    cards?: {
      title: string;
      content: string;
      icon:string;
    }[];
  t: TFunction;
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
  
const CarouselBlock = ({ title,cards, t }: WhyUsProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <CardBlockSection>
      <Slide direction="up" triggerOnce>
        <ContentWrapper>
        <h6>{t(title)}</h6>
          <Carousel autoplay dotPosition="top" autoplaySpeed={1000}>
            {cards?.map((item)=>{
              return(
                <div >
            <Row style={{backgroundColor:"#D3E5E5"}}>
                <Col span={12} style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#008080"}}>
                <SvgIcon src={item.icon} width="100%" height="80%" />
                </Col>
                <Col span={12} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#008080"}}>
                <p style={{color:"white",fontSize:44,fontWeight:600}}>{item.title}</p>
                <p style={{color:"white"}}>{item.content}</p>
                </Col>
            </Row>
            </div>
              )
            })}
  </Carousel>
  </ContentWrapper>
      </Slide>
    </CardBlockSection>
  );
};

export default withTranslation()(CarouselBlock);
