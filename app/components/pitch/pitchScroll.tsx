import { AnimatePresence, MotionConfig } from "framer-motion";

import ScrollWrapper from "../layoutAndWrappers/ScrollWrapper";

import { Link, Outlet, useActionData, useFetcher } from "remix";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";
import SendCard from "./SendCard";
import HookCard from "./HookCard";
import NeedCard from "./NeedCard";
import PitchCard from "./PitchCard";
import CtaCard from "./CtaCard";
import CreateCard from "~/routes/dashboard/$username/createcard";
import { useState } from "react";

interface currentPitch {
  id: any;
  likes: any;
  dislikes: any;
  Title: string;
  HookText: string;
  NeedText: string;
  PitchText: string;
  PitchText2: string;
  CTA: string;
}

type Props = {
  currentPitch: currentPitch;
  username: string;
};

function PitchScroll({ currentPitch, username }: Props) {
  const [open, setOpen] = useState(false)
  let pitch = currentPitch;
  let currentUsername = username;
  let voteFetcher = useFetcher();
  const data = useActionData();

function handleClick () {
  return setOpen(!open)
}
  return (
    <div className="flex flex-col justify-center">

        <ScrollWrapper key="1">
          <HookCard
            title={pitch.Title}
            hookText={pitch.HookText}
            imageUrl="https://api.lorem.space/image/face?hash=92310"
          />
        </ScrollWrapper>
        <ScrollWrapper key="2">
          <NeedCard
            needText={pitch.NeedText}
            imageUrl="https://picsum.photos/600/600/?blur=2"
          />
        </ScrollWrapper>
        <ScrollWrapper key="3">
          <PitchCard
            pitchText={pitch.PitchText}
            pitchText2={pitch.PitchText2}
          />
        </ScrollWrapper>
        <ScrollWrapper key="4">
          <CtaCard cta={pitch.CTA} />
        </ScrollWrapper>
<Outlet/> 
        <div className="flex justify-around pt-2 mb-[30vh]">
          <DislikeButton username={currentUsername} pitchId={currentPitch.id} />

          

          

          <LikeButton username={currentUsername} pitchId={currentPitch.id} />
          </div>
          <div className="mt-9">
          <SendCard username={currentUsername} pitchId={currentPitch.id} open={open} />
          </div>
          {/* </voteFetcher.Form> */}
        </div>





  );
}

export default PitchScroll;
