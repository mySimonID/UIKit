import React from 'react';

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
    <>
      <input
        name={name}
        type="checkbox"
        checked={props.checked}
        className={className}
        onChange={(e) => onChange(e)}>
      </input>
      {props.children}
    </>
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
    <div>
      <input
        name={name}
        type="radio"
        // value={props.checked}
        checked={props.checked == true}
        className={className}
        onChange={(e) => onChange(e)}>
      </input>
      {props.children}
    </div>
  )

}

export const UIInput = (props) => {

  const { className } = props;

  const onChange = (e) => {

    if (props.onChange) {
      props.onChange(e.target.value)
    }

  }

  return (

    <input
      value={props.value}
      className={className}
      onChange={onChange}>
      {props.children}
    </input>
  )

}

