import { stitches } from "design-portfolio-ds";

const H2 = stitches.styled("h2", {
  fontSize: 26,
  lineHeight: "32.76px",
  "@tablet": {
    textStyle: "h3",
  },
  "@desktop": {
    textStyle: "h2",
  },
});

export default H2;
