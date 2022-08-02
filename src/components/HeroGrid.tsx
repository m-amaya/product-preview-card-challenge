import { stitches } from "design-portfolio-ds";
import { FC } from "react";

import appsPatternUrl from "~/assets/pattern-apps.svg";
import graphicDesignPatternUrl from "~/assets/pattern-graphic-design.svg";
import illustrationsPatternUrl from "~/assets/pattern-illustrations.svg";
import motionGraphicsPatternUrl from "~/assets/pattern-motion-graphics.svg";
import photographyPatternUrl from "~/assets/pattern-photography.svg";
import uiUxPatternUrl from "~/assets/pattern-ui-ux.svg";
import GridTile from "./GridTile";

const Grid = stitches.styled("section", {
  display: "grid",
  gap: 24,
  gridTemplateAreas: `
    'grpdsgn grpdsgn'
    'grpdsgn grpdsgn'
    'uiux apps'
    'illst illst'
    'phto phto'
    'mtngrp mtngrp'
  `,
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(6, 160px)",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: 1110,
  padding: 16,
  width: "100%",
  "@tablet": {
    gridTemplateAreas: `
      'grpdsgn grpdsgn uiux apps'
      'grpdsgn grpdsgn illst illst'
      'phto phto mtngrp mtngrp'
    `,
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(3, 160px)",
    padding: "34px 40px",
  },
  "@desktop": {
    gridTemplateAreas: `
      'grpdsgn grpdsgn uiux apps phto phto'
      'grpdsgn grpdsgn illst illst mtngrp mtngrp'
    `,
    gridTemplateColumns: "repeat(6, 1fr)",
    gridTemplateRows: "repeat(2, 160px)",
    padding: "50px 0",
  },
});

const HeroGrid: FC = () => {
  return (
    <Grid>
      <GridTile
        name='grpdsgn'
        backgroundColor='$galacticBlue'
        img={{ url: graphicDesignPatternUrl }}
      >
        Graphic Design
      </GridTile>
      <GridTile
        name='uiux'
        backgroundColor='$summerYellow'
        img={{ url: uiUxPatternUrl }}
      >
        UI/UX
      </GridTile>
      <GridTile
        name='apps'
        backgroundColor='$pink'
        img={{ url: appsPatternUrl }}
      >
        Apps
      </GridTile>
      <GridTile
        name='illst'
        backgroundColor='$lightRed'
        img={{ url: illustrationsPatternUrl }}
      >
        Illustrations
      </GridTile>
      <GridTile
        name='phto'
        backgroundColor='$cyan'
        img={{ url: photographyPatternUrl }}
      >
        Photography
      </GridTile>
      <GridTile
        name='mtngrp'
        backgroundColor='$darkPurple'
        img={{ url: motionGraphicsPatternUrl }}
      >
        Motion Graphics
      </GridTile>
    </Grid>
  );
};

export default HeroGrid;
