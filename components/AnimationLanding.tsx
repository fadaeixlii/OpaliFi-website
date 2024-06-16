import * as React from "react";
import OpaliFiLanding from "./OpaliFiLanding.json";
import Lottie from "lottie-react";
export interface IAnimationLandingProps {}

export function AnimationLanding(props: IAnimationLandingProps) {
  return (
    <div className="size-[30rem] lg:flex items-center justify-center hidden  ">
      <Lottie
        animationData={OpaliFiLanding}
        className="w-full h-full"
        loop
        reversed
      />
    </div>
  );
}
