import { stitches } from "design-portfolio-ds";
import { FC } from "react";

import Paragraph from "./Paragraph";

const Section = stitches.styled("section", {
  display: "grid",
  gap: 16,
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: 1110,
  padding: 16,
  textAlign: "center",
  width: "100%",
  "@tablet": {
    gap: 28,
    padding: "30px 40px",
  },
  "@desktop": {
    padding: "30px 0",
  },
});

const H1 = stitches.styled("h1", {
  textStyle: "h2",
  "@tablet": {
    textStyle: "h1",
  },
});

const HeroTitle: FC = () => {
  return (
    <Section>
      <H1>Design solutions made easy</H1>
      <Paragraph>
        With over ten years of experience in various design disciplines,
        I&apos;m your one-stop shop for your design needs.
      </Paragraph>
    </Section>
  );
};

export default HeroTitle;
