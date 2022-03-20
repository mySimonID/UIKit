import React, { useState } from "react";

import FrmIcon from './FrmIcon'

const CodeViewer = (props) => {

  const [showCode, setShowCode] = useState(false)

  const handleShowCode = () => {
    setShowCode(!showCode)
  }

  const handleCopy = () => {

    var codeBase = '';

    props.code.forEach(item => {
      codeBase += item + "\n"
    })

    navigator.clipboard.writeText(codeBase)
  }


  return (
    <div>

      <div className='codeView'>

        <div className={'codeView-code ' + (showCode ? 'codeView-code-show' : '')}>
          <ul>
            {props.code.map((item, index) => {
              return (<li key={index}>{item}</li>)
            })}
          </ul>
        </div>

        <div className='codeView-icons'>
          <button className='btn btn-sm' onClick={handleShowCode}><FrmIcon name='code' /></button>
          <button className='btn btn-sm' onClick={handleCopy}><FrmIcon name='copy' /></button>
        </div>

      </div>

      <div>
        {props.children}
      </div>

      {/* <div className='codeView-items'>
        {props.code.map((item, index) => {
          return (parse(item))
        })}
      </div> */}


    </div>
  )

}

export default CodeViewer;
