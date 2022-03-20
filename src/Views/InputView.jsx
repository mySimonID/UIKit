import React from 'react';

import SectionArea from "./Helpers/SectionArea"
import CodeViewer from './Helpers/CodeViewer';

import { UIInput } from "./Controls/UIKitControls"

const InputView = () => {

  const jsx1 = [
    "<UIInput className='form-input' />"
  ]

  return (
    <SectionArea title="Inputs" desc="">
      <CodeViewer code={jsx1}>
        <UIInput
          name='input1'
          title='First:'
          className='form-input text1'
          placeholder="Text1" />

        <UIInput
          name='input12'
          title='Second:'
          className='form-input text2'
          placeholder="Text2" />

        <UIInput
          name='input12'
          title='Third:'
          className='form-input text3'
          placeholder="Text3" />

        <UIInput
          name='input12'
          title='Fourth:'
          className='form-input text4'
          placeholder="Text4" />

      </CodeViewer>
    </SectionArea>
  )

}

export default InputView

