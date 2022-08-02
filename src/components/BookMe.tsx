import { Button, stitches } from "design-portfolio-ds";
import { FC } from "react";

import H2 from "./H2";
import Paragraph from "./Paragraph";

const Section = stitches.styled("section", {
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: 1100,
  padding: "84px 16px 24px",
  width: "100%",
  "@tablet": {
    padding: "86px 40px 22px",
  },
  "@desktop": {
    padding: "88px 0 22px",
  },
});

const Card = stitches.styled("div", {
  backgroundColor: "$black",
  borderRadius: 10,
  display: "grid",
  gap: 24,
  padding: "48px 24px",
  textAlign: "center",
  "@tablet": {
    gap: 26,
    padding: "56px 75px 64px",
  },
  "@desktop": {
    alignItems: "center",
    gap: 182,
    gridAutoFlow: "column",
    padding: "80px 95px 80px 65px",
    textAlign: "left",
  },
});

const TextGrid = stitches.styled("div", {
  display: "grid",
  gap: 24,
  "@tablet": {
    gap: 26,
  },
});

const BookMe: FC = () => {
  return (
    <Section>
      <Card>
        <TextGrid>
          <H2 css={{ color: "$lightCream" }}>Book a call with me</H2>
          <Paragraph css={{ color: "$lightCream" }}>
            I&apos;d love to have a chat to see how I can help you. The best
            first step is for us to discuss your project during a free
            consultation. Then we can move forward from there.
          </Paragraph>
        </TextGrid>
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
      </Card>
    </Section>
  );
};

export default BookMe;
