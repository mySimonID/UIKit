import React from 'react';

import SectionArea from "./Helpers/SectionArea"
import CodeViewer from './Helpers/CodeViewer';

import {UIInput} from "./Controls/FormControls"

const InputView = () => {

  const jsx1 = [
    "<UIInput className='' />"
  ]

  return (
    <SectionArea title="Inputs" desc="">
    <CodeViewer code={jsx1}>
      <UIInput className="" />
      </CodeViewer>
    </SectionArea>
  )

}

export default InputView

