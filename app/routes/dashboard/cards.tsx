import React from "react";
import { Outlet } from "remix";

type Props = {
  userCards: any;
};

function Cards({ userCards }: Props) {
  return (
    <div className="card w-96 bg-neutral text-neutral-content my-10">
      <div className="card-body items-center text-center">
        <div className="text-2xl">These are your cards</div>
        <div className="text-lg"> {userCards} </div>
        <Outlet/> 
      </div>
    </div>
  );
}

export default Cards;
