import React, { useState } from "react";


import {UIInput} from "../Controls/FormControls";

import FrmIcon from './FrmIcon'

var parse = require('html-react-parser');

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
        <div className='codeView-icons'>
          <button className='btn btn-sm' onClick={handleShowCode}><FrmIcon name='code' /></button>
          <button className='btn btn-sm' onClick={handleCopy}><FrmIcon name='copy' /></button>
        </div>
        {showCode ?
          <div className="codeView-code">
            <ul>
              {props.code.map((item, index) => {
                return (<li key={index}>{item}</li>)
              })}
            </ul>
          </div> : null}
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
