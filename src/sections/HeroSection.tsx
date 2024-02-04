import {
  Container,
  HeroImage,
  Section,
  ContentContainer,
  Title,
  Description,
  ButtonContainer,
  Button,
  ImageButton,
} from "../components/hero/Hero";

import rightIcon from "../assets/icons/arrow-right.svg";

export default function HeroSection() {
  return (
    <Section>
      <Container>
        <ContentContainer>
          <ContentContainer>
            <Title>A jövő fulfillment megoldása a jelenben</Title>
            <Description>
              Webáruházak és e-kereskedők számára automatizált és
              költséghatékony raktári logisztikai megoldások. Akár 30-50%
              megtakarítást nyújtunk a manuális raktározási költségekhez képest.
            </Description>
          </ContentContainer>
          <ButtonContainer>
            <ImageButton rightIconSrc={rightIcon}>Ajánlatot kérek</ImageButton>
            <Button variation="outlined">Többet akarok tudni</Button>
          </ButtonContainer>
        </ContentContainer>
        <HeroImage />
      </Container>
    </Section>
  );
}
