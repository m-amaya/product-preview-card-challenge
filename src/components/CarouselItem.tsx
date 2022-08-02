import { stitches } from "design-portfolio-ds";
import { FC } from "react";

const Slide = stitches.styled("img", {
  borderRadius: 10,
});

const CarouselItem: FC<{ url?: string }> = ({ url }) => {
  return <Slide src={url} />;
};

export default CarouselItem;
