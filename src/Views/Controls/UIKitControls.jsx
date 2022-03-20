// 
// FormControls.jsx
// 
import React from 'react';

import "./UIKit.css"

export const UIButton = (props) => {

  const { onClick, className } = props;

  return (

    <button
      className={className}
      onClick={onClick}>
      {props.children}
    </button>
  )
}

export const UICheckBox = (props) => {

  const { name, className } = props;

  const onChange = (e) => {

    if (props.onChange) {
      props.onChange(e)
    }
  }

  return (
    <div className={className}>
      <input
        name={name}
        type="checkbox"
        checked={props.checked}
        className={className}
        onChange={(e) => onChange(e)}>
      </input>
      {props.children}
    </div>
  )

}


export const UIRadio = (props) => {

  const { name, className } = props;

  const onChange = (e) => {

    if (props.onChange) {
      props.onChange(e)
    }
  }

  return (
    <div className={className}>
      <input
        name={name}
        type="radio"
        // value={props.checked}
        checked={props.checked === true}
        className={className}
        onChange={(e) => onChange(e)}>
      </input>
      {props.children}
    </div>
  )

}

export const UIInput = (props) => {

  const { name,title, className, placeholder } = props;

  const onChange = (e) => {

    if (props.onChange) {
      props.onChange(e.target.value)
    }

  }

  return (
    <div className={className}>
      {title ? <label for={name} >{title}</label> : null}
      <input
        name={name}
        value={props.value}
       
        placeholder={placeholder}
        onChange={onChange}>
        {props.children}
      </input>
    </div>
  )
}

export const UIScroll = (props) => {

  return (
    <div className='scrollWrapper'>
      <div className='scrollContent'>
        {props.children}
      </div>
    </div>
  )
}

