import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import TeaserWrapper from "./components/TeaserWrapper";
import { H3, P, Subheadline } from "../GlobalStyles/GlobalStyles";
import Button from "../Button/Button";
import IconWrapper from "./components/IconWrapper";
import TeaserOuterWrapper from "./components/TeaserOuterWrapper";
import ImageWrapper from "./components/ImageWrapper";
import LazyImage from "../LazyImage/LazyImage";
import StickyLayer from "../StickyLayer/StickyLayer";

const Teaser = ({
  backgroundImage,
  icon,
  iconPosition,
  iconColor,
  header,
  subheader,
  bodytext,
  cta,
  ctaType,
  ctaLink,
  horizontal,
  reverse,
  image,
  active,
  stickyContact
}) => {
  return (
    <TeaserOuterWrapper horizontal={horizontal} reverse={reverse}>
      {horizontal && (
        <>
          {stickyContact && <StickyLayer contact />}

          <ImageWrapper>
            <LazyImage resetKey={new Date()} blur image={image} />
          </ImageWrapper>
        </>
      )}
      <TeaserWrapper
        backgroundImage={backgroundImage && backgroundImage.image}
        backgroundImageWebp={backgroundImage && backgroundImage.webp}
        icon={icon}
        iconColor={iconColor}
        horizontal={horizontal}
        reverse={reverse}
        active={active}
      >
        <IconWrapper
          icon={icon}
          iconColor={iconColor}
          iconPosition={iconPosition}
          backgroundImage={backgroundImage && backgroundImage.image}
          backgroundImageWebp={backgroundImage && backgroundImage.webp}
        />
        <div>
          <H3
            as="div"
            style={{
              textAlign: "left",
              marginBottom: subheader ? 0 : horizontal ? 40 : 20
            }}
          >
            {header}
          </H3>
          {subheader && (
            <Subheadline>
              <strong style={{ color: "black" }}>{subheader}</strong>
            </Subheadline>
          )}
          <P as="div" dangerouslySetInnerHTML={{ __html: bodytext }} />
          <Button type={ctaType} href={ctaLink}>
            {cta}
          </Button>
        </div>
      </TeaserWrapper>
    </TeaserOuterWrapper>
  );
};

Teaser.defaultProps = {
  icon: "digital-communication",
  iconColor: "black",
  iconPosition: "",
  cta: "Mehr erfahren",
  ctaType: "black",
  bodytext:
    "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasdgubergren.",
  horizontal: false,
  reverse: false
};

Teaser.propTypes = {
  icon: PropTypes.string
};

export default Teaser;
