import React from 'react'

export default function PhoneFrame({ children, className = '', style, width = 320 }) {
  return (
    <div
      className={`phone-frame ${className}`}
      style={{ width: `${width}px`, ...style }}
    >
      <div className="phone-screen">
        <div className="phone-notch" />
        {children}
      </div>
    </div>
  )
}
