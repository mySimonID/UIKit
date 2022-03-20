import React from 'react';

import SectionArea from './Helpers/SectionArea'
import CodeViewer from './Helpers/CodeViewer';

const TextView = () => {

  const jsx1 = [
    "<div><label className='text-small'>Small</label></div>",
    "<div><label className='text-default'>Default</label></div>",
    "<div><label className='text-medium'>Medium</label></div>",
    "<div><label className='text-large'>Large</label></div>",
    "<div><label className='text-default text-default'>Default</label></div>",
    "<div><label className='text-default text-info'>Info</label></div>",
    "<div><label className='text-default text-primary'>Primary</label></div>",
    "<div><label className='text-default text-success'>Success</label></div>",
    "<div><label className='text-default text-warning'>Warning</label></div>",
    "<div><label className='text-medium text-bold'>Bold</label></div>",
    "<div><label className='text-medium text-italic'>Italic</label></div>",
    "<div><label className='text-medium text-bold text-italic'>Bold-Italic</label></div>"
  ]

  return (
    <SectionArea title='Text' desc='Text sizes and colour variations'>
      <CodeViewer code={jsx1}>
        <div><label className='text-small'>Small</label></div>
        <div><label className='text-default'>Default</label></div>
        <div><label className='text-medium'>Medium</label></div>
        <div><label className='text-large'>Large</label></div>
        <br />
        <div><label className='text-default text-default'>Default</label></div>
        <div><label className='text-default text-info'>Info</label></div>
        <div><label className='text-default text-primary'>Primary</label></div>
        <div><label className='text-default text-success'>Success</label></div>
        <div><label className='text-default text-warning'>Warning</label></div>
        <br />
        <div><label className='text-medium text-bold'>Bold</label></div>
        <div><label className='text-medium text-italic'>Italic</label></div>
        <div><label className='text-medium text-bold text-italic'>Bold-Italic</label></div>

      </CodeViewer>
    </SectionArea>
  )

}

export default TextView
