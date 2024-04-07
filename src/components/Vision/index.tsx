import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { VisionSection, Content, ContentWrapper } from "./styles";

interface VisionProps {
  title: string;
  content: string;
  button: string;
  t: TFunction;
}

const Vision = ({ title, content, button, t }: VisionProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <VisionSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="bottom">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h5>{t(title)}</h5>
              <Content>{t(content)}</Content>
              {button && (
                <Button name="submit" onClick={() => scrollTo("mission")}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </VisionSection>
  );
};

export default withTranslation()(Vision);
