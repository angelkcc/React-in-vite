import { memo } from "react"
import React from 'react'

function P(props) {
    console.log("P component")
  return (
    <div>
      <p>{props.abc}</p>
    </div>
  )
}

export default memo(P)
