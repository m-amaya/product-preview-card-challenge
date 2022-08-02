import { Button, stitches } from "design-portfolio-ds";
import { FC } from "react";

import logoUrl from "~/assets/logo.svg";

const HeaderStyled = stitches.styled("header", {
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: 1110,
  padding: 16,
  width: "100%",
  "@tablet": {
    padding: "34px 40px",
  },
  "@desktop": {
    padding: "34px 0",
  },
});

const Logo = stitches.styled("img", {
  height: 48,
  width: 48,
  "@tablet": {
    height: 64,
    width: 64,
  },
});

const Header: FC<{ asFooter?: boolean }> = ({ asFooter }) => {
  return (
    <HeaderStyled as={asFooter ? "footer" : "header"}>
      <Logo src={logoUrl} alt='Logo' />
      <Button
        css={{
          height: 44,
          paddingLeft: 28,
          paddingRight: 28,
          "@tablet": {
            height: 56,
            paddingLeft: 45,
            paddingRight: 45,
          },
        }}
      >
        Free Consultation
      </Button>
    </HeaderStyled>
  );
};

export default Header;
