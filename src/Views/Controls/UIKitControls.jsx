// 
// FormControls.jsx
// 
// UIButton
// UICheckBox
// UIRadio
// UIInput
// UIScroll
// 
import React from 'react';

import "./UIKit.css"

/**
 * UIButton
 *  Props:
 *   onClick - Click event, provided by the parent
 *   className - CSS classes for formatting
 *   children - Any jsx between  <UIButton> --children-- </UIButton>
 */
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


/**
 * UICheckBox
 *  Props:
 *   name: name of the control
 *   checked - value of the checkbox
 *   onChange - onChange event provided by the parent
 *   className - CSS classes for formatting
 *   children - Any jsx between  <UICheckBox> --children-- </UICheckBox>
 */

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

/**
 * UIRadio
 *  Props:
 *   name: name of the control
 *   checked - value of the checkbox
 *   onChange - onChange event provided by the parent
 *   className - CSS classes for formatting
 *   children - Any jsx between  <UIRadio> --children-- </UIRadio>
 */

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
        checked={props.checked === true}
        className={className}
        onChange={(e) => onChange(e)}>
      </input>
      {props.children}
    </div>
  )

}

/**
 * UIInput
 *  Props:
 *   name: name of the control
 *   title: Label title
 *   placeholder: input placeholder
 *   value: Value to be displayed in the input box
 *   onChange - onChange event provided by the parent
 *   className - CSS classes for formatting
 */

export const UIInput = (props) => {

  const { name, title, className, placeholder, value} = props;

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
        value={value}
        placeholder={placeholder}
        onChange={onChange}>
      </input>
    </div>
  )
}


/**
 * UIScroll
 *  Props:
 *   children - Any jsx between  <UIScroll> --children-- </UIScroll>
 */
export const UIScroll = (props) => {

  return (
    <div className='scrollWrapper'>
      <div className='scrollContent'>
        {props.children}
      </div>
    </div>
  )
}

