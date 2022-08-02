import { stitches } from "design-portfolio-ds";
import { FC } from "react";

import slide1url from "~/assets/image-slide-1.jpg";
import slide2url from "~/assets/image-slide-2.jpg";
import slide3url from "~/assets/image-slide-3.jpg";
import slide4url from "~/assets/image-slide-4.jpg";
import slide5url from "~/assets/image-slide-5.jpg";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import H2 from "./H2";

const Section = stitches.styled("section", {
  display: "grid",
  gap: 32,
  paddingTop: 16,
  paddingBottom: 16,
  textAlign: "center",
  "@tablet": {
    paddingTop: 34,
    paddingBottom: 34,
  },
  "@desktop": {
    padding: 0,
  },
});

const MyWork: FC = () => {
  return (
    <Section>
      <H2>My Work</H2>
      <Carousel>
        <CarouselItem url={slide1url} />
        <CarouselItem url={slide2url} />
        <CarouselItem url={slide3url} />
        <CarouselItem url={slide4url} />
        <CarouselItem url={slide5url} />
      </Carousel>
    </Section>
  );
};

export default MyWork;
