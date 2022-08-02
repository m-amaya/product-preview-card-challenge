import { Button, stitches, useMediaQuery } from "design-system";
import { FC } from "react";

import productDesktopUrl from "~/assets/image-product-desktop.jpg";
import productMobileUrl from "~/assets/image-product-mobile.jpg";

const Wrapper = stitches.styled("div", {
  backgroundColor: "$pureWhite",
  borderRadius: 10,
  display: "grid",
  maxWidth: 345,
  width: "100%",
  "@desktop": {
    gridAutoFlow: "column",
    gridTemplateColumns: "1fr 1fr",
    maxWidth: 600,
  },
});

const Image = stitches.styled("img", {
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  "@desktop": {
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
  },
});

const Content = stitches.styled("div", {
  padding: 24,
  "@desktop": {
    padding: 32,
  },
});

const Overline = stitches.styled("div", {
  color: "$aurometalSaurus",
  fontFamily: "$montserrat",
  fontSize: "$overline",
  fontWeight: "$medium",
  letterSpacing: "5px",
  lineHeight: "$overline",
  textTransform: "uppercase",
});

const Display = stitches.styled("h1", {
  color: "$gunmetal",
  fontFamily: "$fraunces",
  fontSize: "$display",
  fontWeight: "$bold",
  lineHeight: "$display",
  marginTop: 12,
  marginBottom: 16,
  "@desktop": {
    marginTop: 20,
    marginBottom: 24,
  },
});

const Description = stitches.styled("p", {
  color: "$aurometalSaurus",
  fontFamily: "$montserrat",
  fontSize: "$body",
  fontWeight: "$medium",
  lineHeight: "$body",
});

const Price = stitches.styled("div", {
  alignItems: "center",
  display: "inline-grid",
  gap: 20,
  gridAutoFlow: "column",
  marginTop: 24,
  marginBottom: 20,
  "@desktop": {
    marginTop: 30,
    marginBottom: 30,
  },
});

const SalePrice = stitches.styled("div", {
  color: "$deepAquamarine",
  fontFamily: "$fraunces",
  fontSize: "$display",
  fontWeight: "$bold",
  lineHeight: "$display",
});

const OriginalPrice = stitches.styled("div", {
  color: "$aurometalSaurus",
  fontFamily: "$montserrat",
  fontSize: 13,
  fontWeight: "$medium",
  lineHeight: "23px",
  textDecorationLine: "line-through",
});

const Card: FC = () => {
  const { isGteDesktop } = useMediaQuery();
  const imageUrl = isGteDesktop ? productDesktopUrl : productMobileUrl;

  return (
    <Wrapper>
      <Image src={imageUrl} alt='Product Photo' />
      <Content>
        <Overline>Perfume</Overline>
        <Display>Gabrielle Essence Eau De Parfum</Display>
        <Description>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </Description>
        <Price>
          <SalePrice>$149.99</SalePrice>
          <OriginalPrice>$169.99</OriginalPrice>
        </Price>
        <Button iconName='cart'>Add to Cart</Button>
      </Content>
    </Wrapper>
  );
};

export default Card;
