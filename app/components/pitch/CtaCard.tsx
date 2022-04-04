import React from "react";
import {motion} from "framer-motion"

type Props = {
  cta: string;
};

function CtaCard({ cta }: Props) {
  return <motion.div key="ctaCard" className="card glass md:w-[40rem] md:h-fit flex shadow-md shadow-base-100 mb-[0vh] mx-3 ">
    <div className="text-4xl mix-blend-normal">{cta}</div></motion.div>;
}

export default CtaCard;
