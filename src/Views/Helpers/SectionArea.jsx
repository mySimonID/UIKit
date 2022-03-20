import React from 'react'

const SectionArea = (props) => {

  const {title, desc} = props;

  return (
    <div className='sectionRow'>
      <h1>{title}</h1>
      <p>{desc}</p>
      <div>
        {props.children}
      </div>
    </div>
  )


}

export default SectionArea