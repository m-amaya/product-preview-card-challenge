import { stitches } from "design-portfolio-ds";

const Paragraph = stitches.styled("p", {
  fontSize: 16,
  lineHeight: "26px",
  "@tablet": {
    textStyle: "default",
  },
});

export default Paragraph;
