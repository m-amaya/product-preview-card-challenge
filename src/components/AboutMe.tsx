import { Button, stitches } from "design-portfolio-ds";
import { FC } from "react";

import amyUrl from "~/assets/image-amy.webp";
import H2 from "./H2";
import Paragraph from "./Paragraph";

const Section = stitches.styled("section", {
  alignItems: "center",
  display: "grid",
  gap: 40,
  justifyItems: "center",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: 1110,
  padding: "84px 16px",
  width: "100%",
  "@tablet": {
    gap: 70,
    gridAutoFlow: "column",
    gridTemplateColumns: "364px auto",
    padding: "86px 40px 86px 0",
  },
  "@desktop": {
    gap: 125,
    gridTemplateColumns: "445px auto",
    padding: "88px 0",
  },
});

const Img = stitches.styled("img", {
  height: 300,
  width: 300,
  "@tablet": {
    height: 364,
    marginLeft: -44 - 40,
    width: 364,
  },
  "@desktop": {
    height: 445,
    marginLeft: 0,
    width: 445,
  },
});

const TextGrid = stitches.styled("div", {
  display: "grid",
  gap: 24,
  textAlign: "center",
  "@tablet": {
    textAlign: "left",
  },
  "@desktop": {
    gap: 34,
  },
});

const AboutMe: FC = () => {
  return (
    <Section>
      <Img src={amyUrl} alt='Amy Photo' />
      <TextGrid>
        <H2>I&apos;m Amy, and I&apos;d love to work on your next project</H2>
        <Paragraph>
          I love working with others to create beautiful design solutions.
          I&apos;ve designed everything from brand illustrations to complete
          mobile apps. I&apos;m also handy with a camera!
        </Paragraph>
        <div>
          <Button
            kind='secondary'
            css={{
              fontSize: 14,
              height: 44,
              paddingLeft: 28,
              paddingRight: 28,
              "@tablet": {
                fontSize: 16,
                height: 56,
                paddingLeft: 45,
                paddingRight: 45,
              },
            }}
          >
            Free Consultation
          </Button>
        </div>
      </TextGrid>
    </Section>
  );
};

export default AboutMe;
