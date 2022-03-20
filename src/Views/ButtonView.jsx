import React from 'react';

import  {UIButton} from './Controls/UIKitControls'

import SectionArea from "./Helpers/SectionArea"
import CodeViewer from './Helpers/CodeViewer';

const ButtonView = () => {

  const jsx1 = [
    "<UIButton className='btn btn-primary btn-sm'>Small</UIButton>",
    "<UIButton className='btn btn-primary btn-default'>Default</UIButton>",
    "<UIButton className='btn btn-primary'>Medium</UIButton>",
    "<UIButton className='btn btn-primary btn-lg'>Large</UIButton>"
  ]

  const jsx2 = [
    "<UIButton className='btn btn-primary'>Default</UIButton>",
    "<UIButton className='btn btn-primary btn-round'>Round</UIButton>",
    "<UIButton className='btn btn-round btn-outline-info'>Outline</UIButton>"
  ]

  const jsx3 = [
    "<UIButton className='btn '>Default</UIButton>",
    "<UIButton className='btn btn-primary'>Primary</UIButton>",
    "<UIButton className='btn btn-info'>Info</UIButton>",
    "<UIButton className='btn btn-success'>Success</UIButton>",
    "<UIButton className='btn btn-warning'>Warning</UIButton>",
  ]

  const jsx4 = [
    "<UIButton className='btn btn-link'>Default</UIButton>",
    "<UIButton className='btn-link btn btn-primary'>Primary</UIButton>",
    "<UIButton className='btn-link btn btn-info'>Info</UIButton>",
    "<UIButton className='btn-link btn btn-success'>Success</UIButton>",
    "<UIButton className='btn-link btn btn-warning'>Warning</UIButton>",
  ]


  return (
    <div>
      <SectionArea title="Buttons" desc="">
        <div>
          <CodeViewer code={jsx1}>
            <UIButton className='btn btn-primary btn-sm'>Small</UIButton>
            <UIButton className='btn btn-primary btn-default'>Default</UIButton>
            <UIButton className='btn btn-primary btn-md'>Medium</UIButton>
            <UIButton className='btn btn-primary btn-lg'>Large</UIButton>
          </CodeViewer>
        </div>
      </SectionArea>

      <SectionArea title="Button Variants" desc="Standard buttons with variants">
        <div>
          <CodeViewer code={jsx2}>
            <UIButton className='btn btn-primary'>Default</UIButton>
            <UIButton className='btn btn-primary btn-round'>Round</UIButton>
            <UIButton className='btn btn-round btn-outline-info'>Outline</UIButton>
          </CodeViewer>
        </div>
      </SectionArea>


      <SectionArea title="Button Colour Variants" desc="Standard buttons with colour variants">
        <div>
          <CodeViewer code={jsx3} >
            <UIButton className='btn '>Default</UIButton>
            <UIButton className='btn btn-primary'>Primary</UIButton>
            <UIButton className='btn btn-info'>Info</UIButton>
            <UIButton className='btn btn-success'>Success</UIButton>
            <UIButton className='btn btn-warning'>Warning</UIButton>
          </CodeViewer>
        </div>
      </SectionArea>

      <SectionArea title="Links" desc="Links with colour variants">
        <div>
          <CodeViewer code={jsx4}>
            <UIButton className='btn btn-link'>Default</UIButton>
            <UIButton className='btn-link btn btn-primary'>Primary</UIButton>
            <UIButton className='btn-link btn btn-info'>Info</UIButton>
            <UIButton className='btn-link btn btn-success'>Success</UIButton>
            <UIButton className='btn-link btn btn-warning'>Warning</UIButton>
          </CodeViewer>
        </div>
      </SectionArea>
    </div>

  )

}

export default ButtonView;
