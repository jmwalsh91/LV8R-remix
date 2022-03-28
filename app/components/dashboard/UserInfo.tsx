import React from "react";
import Avatar from "../Misc/Avatar";

type Props = {
  userImage: any;
  username: any;
};

export default function UserInfo({ userImage, username }: Props) {
  return (
<div className="h-fit">

      <div className="block p-3">
      <Avatar image={userImage} username={username} />
      <div className="text-xl">username</div>
      </div>
      


</div>

  );
}
