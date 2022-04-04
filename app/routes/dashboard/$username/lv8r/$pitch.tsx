import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import {
  ActionFunction,
  LoaderFunction,
  useLoaderData,
  useOutletContext,
} from "remix";
import PitchScroll from "~/components/pitch/pitchScroll";
import { castVote } from "~/utils/pitchLoader";

type Props = {};
export let loader: LoaderFunction = async ({ request, params }) => {
  let username = params.username;
  let queuePosition = params.pitch;
  return { username, queuePosition };
};

export let action: ActionFunction = async ({ request }) => {
  let form = await request.formData();
  let result = await castVote(form);
    //can flash "success"
  return ""
};
function Pitch({}: Props) {
  let queue: any = useOutletContext();
  let data = useLoaderData();
  let username = data.username;
  let queuePosition = data.queuePosition;
  let pitch = queue[queuePosition];

  return (

      <PitchScroll currentPitch={pitch} username={username}></PitchScroll>

  );
}

export default Pitch;
