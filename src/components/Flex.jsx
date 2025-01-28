import React from 'react'

const children = ({children , className}) => {
  return (
    <div className={`flex ${className}`}>{children}</div>
  )
}

export default children