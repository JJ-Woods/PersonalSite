import React from 'react';
import { useParams } from 'react-router-dom';
import AnimationRevealPage from "helpers/AnimationRevealPage.js"

import BackgroundAsImageHero from "components/hero/BackgroundAsImage.js";
import IllustrationAndVideoHero from "components/hero/TwoColumnWithVideo.js";
import IllustrationAndInputHero from "components/hero/TwoColumnWithInput.js";
import FeaturesAndTestimonialHero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import FullWidthWithImageHero from "components/hero/FullWidthWithImage.js";
import BackgroundAsImageWithCenteredContentHero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import IllustrationAndPrimaryBackgroundHero from "components/hero/TwoColumnWithPrimaryBackground.js";

import MiniCenteredFooter from "components/footers/MiniCenteredFooter.js";


export const components = {
  blocks: {
    Hero: {
      type: "Hero Section",
      elements: {
        BackgroundAsImage: {
          name: "With Background Image",
          component: BackgroundAsImageHero,
          url: "/components/blocks/Hero/BackgroundAsImage",
        },
        IllustrationAndInput: {
          name: "With Image Illustration and Input",
          component: IllustrationAndInputHero,
          url: "/components/blocks/Hero/IllustrationAndInput",
        },
        IllustrationAndVideo: {
          name: "With Image Illustration and Video",
          component: IllustrationAndVideoHero,
          url: "/components/blocks/Hero/IllustrationAndVideo",
        },
        FeaturesAndTestimonial: {
          name: "With Features And Customer Testimonial",
          component: FeaturesAndTestimonialHero,
          url: "/components/blocks/Hero/FeaturesAndTestimonial",
        },
        FullWidthWithImage: {
          name: "Full Width With Image",
          component: FullWidthWithImageHero,
          url: "/components/blocks/Hero/FullWidthWithImage",
        },
        BackgroundAsImageWithCenteredContent: {
          name: "Full Width Background Image with centered content",
          component: BackgroundAsImageWithCenteredContentHero,
          url: "/components/blocks/Hero/BackgroundAsImageWithCenteredContent",
        },
        IllustrationAndPrimaryBackground: {
          name: "Primary Background With Illustration",
          component: IllustrationAndPrimaryBackgroundHero,
          url: "/components/blocks/Hero/IllustrationAndPrimaryBackground",
        },
      }
    },
    Footer: {
      type: "Footers Section",
      elements: {
        MiniCentered: {
          name: "Mini Centered Dark",
          component: MiniCenteredFooter,
          url: "/components/blocks/Footer/MiniCentered",
        },
      }
    }
  }
}

export default () => {
  const { type, subtype, name } = useParams()

  try {
    let Component = null;
    if(type === "blocks" && subtype) {
      Component= components[type][subtype]["elements"][name].component
      return <AnimationRevealPage disabled>
          <Component/>
        </AnimationRevealPage>
    }
    else
      Component= components[type][name].component

    if(Component)
      return <Component/>

    throw new Error("Component Not Found")
  }
  catch (e) {
    console.log(e)
    return <div>Error: Component Not Found</div>
  }
}
