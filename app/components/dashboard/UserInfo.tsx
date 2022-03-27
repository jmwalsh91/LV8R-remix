import React from "react";
import Avatar from "../Misc/Avatar";

type Props = {
  userImage: string;
  username: string;
};

export default function UserInfo({ userImage, username }: Props) {
  return (

<div className="flex flex-row w-full">
      <div className="grid grid-cols-2 ">
          <div className="col-span-1">
        <Avatar image={userImage} username={username} />
        <p className="text-lg">Username</p>
        </div>

        <div className="col-span-1">
        
            
         
        </div>
      </div>
      <div className="grid place-items-start">
      <div className="stat ">
        <div className="stat-figure text-primary"></div>
        <div className="stat-title">Total Likes</div>
        <div className="stat-value text-primary">25.6K</div>
        <div className="stat-desc">21% more than last month</div>
        </div>
      </div>
</div>
  );
}
