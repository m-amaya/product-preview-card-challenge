import { stitches } from "design-portfolio-ds";
import { FC } from "react";

const Tile = stitches.styled("div", {
  alignItems: "flex-end",
  borderRadius: 8,
  display: "flex",
  padding: 24,
  position: "relative",
  width: "100%",
});

const Img = stitches.styled("img", {
  position: "absolute",
  top: 24,
  right: 24,
});

const Label = stitches.styled("div", {
  color: "$white",
  fontFamily: "$jakarta",
  fontSize: 24,
  fontWeight: "$bold",
});

const GridTile: FC<{
  name?: string;
  backgroundColor?: string;
  img?: { url?: string; height?: number; width?: number };
  children?: ReactChildren;
}> = ({ name, backgroundColor, img = {}, children }) => {
  const { url, height, width } = img;

  return (
    <Tile css={{ backgroundColor, gridArea: name }}>
      <Img src={url} css={{ height, width }} />
      <Label>{children}</Label>
    </Tile>
  );
};

export default GridTile;
