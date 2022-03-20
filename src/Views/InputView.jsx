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
          title='Small:'
          className='form-input text-small'
          placeholder="Text-small" />

        <UIInput
          name='input12'
          title='Default:'
          className='form-input text-default'
          placeholder="Text-default" />

        <UIInput
          name='input12'
          title='Medium:'
          className='form-input text-medium'
          placeholder="Text-medium" />

        <UIInput
          name='input12'
          title='Large:'
          className='form-input text-large'
          placeholder="Text-large" />

      </CodeViewer>
    </SectionArea>
  )

}

export default InputView

