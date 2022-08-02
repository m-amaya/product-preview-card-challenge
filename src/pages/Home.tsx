import { globalStyles, stitches } from "design-system";
import { FC } from "react";

const Main = stitches.styled("main", {
  alignItems: "center",
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  padding: 16,
  width: "100%",
});

import Card from "~/components/Card";

const HomePage: FC = () => {
  globalStyles();

  return (
    <Main>
      <Card />
    </Main>
  );
};

export default HomePage;
