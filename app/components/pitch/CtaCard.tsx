import React from "react";

type Props = {
  cta: string;
};

function CtaCard({ cta }: Props) {
  return <div className="card glass md:w-[40rem] md:h-fit flex shadow-md shadow-base-100 mb-[30vh] text-4xl mix-blend-darken ">{cta}</div>;
}

export default CtaCard;
