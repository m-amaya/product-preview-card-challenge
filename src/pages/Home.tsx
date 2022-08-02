import { globalStyles } from "design-portfolio-ds";
import { FC } from "react";

import Header from "~/components/Header";
import HeroTitle from "~/components/HeroTitle";
import HeroGrid from "~/components/HeroGrid";
import AboutMe from "~/components/AboutMe";
import MyWork from "~/components/MyWork";
import BookMe from "~/components/BookMe";

const HomePage: FC = () => {
  globalStyles();

  return (
    <main>
      <Header />
      <HeroTitle />
      <HeroGrid />
      <AboutMe />
      <MyWork />
      <BookMe />
      <Header asFooter />
    </main>
  );
};

export default HomePage;
