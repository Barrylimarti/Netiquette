import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { CardBlockSection, Content, ContentWrapper } from "./styles";
import Card from "../../common/Cards";

interface CardBlockProps {
    title: string;
    content: string;
    section?: {
      title: string;
      content: string;
      icon: string;
    }[];
  t: TFunction;
  id:string;
}

const CardsBlock = ({ title, content, section,id, t }: CardBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <CardBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle" id={id}>
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
            </Col>
          </ContentWrapper>
          <Row 
          style={{width:"100%",justifyContent:"center"}}
          >
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
                          return (
                            <Col key={id} style={{margin:10}}>
                             <Card title={item.title} icon={item.icon} content={item.content}/>
                            </Col>
                            
                          );
                        }
                      )}
                      </Row>
        </Row>
      </Slide>
    </CardBlockSection>
  );
};

export default withTranslation()(CardsBlock);
