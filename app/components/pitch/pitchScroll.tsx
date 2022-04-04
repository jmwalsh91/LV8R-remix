import { AnimatePresence } from "framer-motion";

import ScrollWrapper from "../layoutAndWrappers/ScrollWrapper";

import { useActionData, useFetcher } from "remix";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";
import SendCard from "./SendCard";
import HookCard from "./HookCard";
import NeedCard from "./NeedCard";
import PitchCard from "./PitchCard";
import CtaCard from "./CtaCard";

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
  let pitch = currentPitch;
  let currentUsername = username;
  let voteFetcher = useFetcher();
  const data = useActionData();

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

        <div className="flex justify-around pt-2 mb-[30vh]">
          <DislikeButton username={currentUsername} pitchId={currentPitch.id} />

          <SendCard username={currentUsername} pitchId={currentPitch.id} />

          <LikeButton username={currentUsername} pitchId={currentPitch.id} />
          {/* </voteFetcher.Form> */}
        </div>

    </div>
  );
}

export default PitchScroll;
