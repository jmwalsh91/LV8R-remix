import React from 'react'
import Avatar from '../Misc/Avatar'

type Props = {
    userImage: string,
    username: string

}

export default function UserInfo({userImage, username}: Props) {
  return (
    <div className="stats-horizontal xs:grid xs:grid-cols-2 overflow-hidden">
    <div className="xs:col-span-1 w-1/2">
      <Avatar image={userImage} username={username}/>
    </div>
  <div className="stat xs:col-span-1 w-1/2">
    <div className="stat-figure text-primary">

    </div>
    <div className="stat-title">Total Likes</div>
    <div className="stat-value text-primary">25.6K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>

</div>

  )
}