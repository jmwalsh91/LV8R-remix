import React from 'react'

type Props = {}

function CardGlass({}: Props) {
  return (
    <div className="card w-96 glass">
  <figure>
      <img src="https://www.jmwalsh.dev/static/media/musejenny.4173f5dc6866423645c5.jpg" alt="muse app"/>
      </figure>
  <div className="card-body">
    <h2 className="card-title">Title</h2>
    <p>text text</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
  )
}

export default CardGlass