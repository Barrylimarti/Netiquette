import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { CoreValuesSection, Content, ContentWrapper } from "./styles";
import Card from "../../common/Cards2";

interface CardBlockProps {
    title: string;
    content: string;
    section?: {
      title: string;
      content: string;
      icon: string;
    }[];
  t: TFunction;
}

const CoreValues = ({ title, content, section, t }: CardBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <CoreValuesSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6 style={{color:"white"}}>{t(title)}</h6>
              {/* <Content>{t(content)}</Content> */}
            </Col>
          </ContentWrapper>
          <Row style={{width:"100%",justifyContent:"center"}}>
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
                            <Col key={id}>
                             <Card title={item.title} icon={item.icon} content={item.content}/>
                            </Col>
                            
                          );
                        }
                      )}
           </Row>
        </Row>
      </Slide>
    </CoreValuesSection>
  );
};

export default withTranslation()(CoreValues);
