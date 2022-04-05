
import { useFetcher } from "remix";

type Props = {
  username: any;
  pitchId: any;
};



function LikeButton({ username, pitchId }: Props) {
  const likeSubmit = useFetcher();



  return (
    <likeSubmit.Form reloadDocument={false} method="post">
      <input type="hidden" value={username} name="username" />
      <input type="hidden" value={pitchId} name="pitchId" />
      <input type="hidden" value="likes" name="vote" />
      <button
        className="btn btn-primary shadow-md shadow-base-100 "
        type="submit"
      >
        <svg
          width="35"
          height="36"
          viewBox="0 0 35 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="35" height="36" fill="none" />
          <circle
            cx="17.5"
            cy="17.5"
            r="15"
            transform="rotate(178.732 17.5 17.5)"
            stroke="black"
            stroke-linejoin="round"
          />
          <path
            d="M25.0756 20.8331L17.132 11.0066L9.07954 21.1873"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </likeSubmit.Form>
  );
}

export default LikeButton;
