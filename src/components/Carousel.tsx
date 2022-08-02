import { Button, Icon, stitches, useMediaQuery } from "design-portfolio-ds";
import { Children, FC, ReactElement, useMemo, useState } from "react";

const Wrapper = stitches.styled("div", {
  overflow: "hidden",
});

const Inner = stitches.styled("div", {
  display: "grid",
  gap: 15,
  gridAutoFlow: "column",
  gridTemplateColumns: "repeat(5, 270px)",
  gridTemplateRows: "180px",
  justifyContent: "center",
  smoothTransition: ["transform"],
  whiteSpace: "nowrap",
  "@tablet": {
    gap: 30,
    gridTemplateColumns: "repeat(5, 540px)",
    gridTemplateRows: "360px",
  },
});

const Indicators = stitches.styled("div", {
  gap: 16,
  display: "grid",
  gridAutoFlow: "column",
  justifyContent: "center",
  marginTop: 32,
});

const SLIDE_RANGE = [2, 1, 0, -1, -2];

const Carousel: FC<{ children: ReactElement[] }> = ({ children }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeSlide = useMemo(() => SLIDE_RANGE[activeIdx], [activeIdx]);
  const { isGteTablet } = useMediaQuery();
  const cardWidth = isGteTablet ? 540 : 270;
  const cardSpacing = isGteTablet ? 30 : 15;

  const updateIndex = (newIdx: number) => {
    if (newIdx < 0) {
      newIdx = 0;
    }
    if (newIdx >= Children.count(children)) {
      newIdx = Children.count(children) - 1;
    }

    setActiveIdx(newIdx);
  };

  return (
    <Wrapper>
      <Inner
        css={{
          transform: `translate(${
            activeSlide * cardWidth + activeSlide * cardSpacing
          }px)`,
        }}
      >
        {children}
      </Inner>
      <Indicators>
        <Button kind='icon' onClick={() => updateIndex(activeIdx - 1)}>
          <Icon name='arrow-left' />
        </Button>
        <Button kind='icon' onClick={() => updateIndex(activeIdx + 1)}>
          <Icon name='arrow-right' />
        </Button>
      </Indicators>
    </Wrapper>
  );
};

export default Carousel;
