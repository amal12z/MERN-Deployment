import React from 'react'

const Button = ({buttonClass , onClickHandleProps, buttonContent}) => {

    const onClickHandle = (e) => {
        onClickHandleProps

    }



  return (
    <>
        <button className={buttonClass} onClick={(e) => {onClickHandle(e)}}>{buttonContent}</button>
    </>
  )
}

export default Button