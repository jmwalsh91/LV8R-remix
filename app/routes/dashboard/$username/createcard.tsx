import React from 'react'

type Props = {}

function CreateCard({}: Props) {
  return (
    <div>
    {/*   <div className="card w-96 bg-base-100 shadow-xl h-96"> */}
<input type="checkbox" className="modal-toggle" id="send-card" />
  <div className="modal-box">
    <h3 className="font-bold text-lg">Congratulations random Interner user!</h3>
    <input type="text" placeholder="Type here" className="input input-lg input-bordered input-primary w-full max-w-xs" />
  <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
  <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
    <div className="modal-action">
      <a href="#" className="btn">Yay!</a>
    </div></div></div>

)
}

export default CreateCard