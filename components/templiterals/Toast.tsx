// position can be one of left | right | top | bottom

import React from 'react'

type HorizontalPosition = "left" | "center" | "right"
type VerticalPosition = "top" | "center" | "bottom"

type ToastProps = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center"> | "center"
}

const Toast = ({ position }: ToastProps) => {
  return (
    <div>Toast position - {position}</div>
  )
}

export default Toast