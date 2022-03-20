import React, { useEffect, useState } from 'react';

import SectionArea from "./Helpers/SectionArea"
import CodeViewer from './Helpers/CodeViewer';

import { UIScroll } from "./Controls/UIKitControls"

const ScrollView = () => {

  const [content, setContent] = useState([])

  useEffect(() => {

    const rows = [];

    for (var i = 1; i < 50; i++) {
      rows.push(<li className='text-default' key={i}>Item-{i}</li>)
    }

    setContent(rows);

  }, [])

  const jsx1 = [
    " <div style={",
    "  {",
    "    height: '200px',",
    "    padding:'8px',",
    "    marginLeft:'16px',",
    "    marginRight:'16px',",
    "    border:'1px solid gray'",
    "  }",
    "}>'",
    "  <UIScroll>",
    "    <ul>",
    "      {content}",
    "    </ul>",
    "  </UIScroll>",
    "</div>",
  ]

  return (
    <SectionArea title="Scroll View" desc="For automatically scrolling content when required">
      <CodeViewer code={jsx1}>
        <div style={
          {
            height: '200px',
            padding:'8px',
            marginLeft:'16px',
            marginRight:'16px',
            border:'1px solid gray'
          }
        }>
          <UIScroll>
            <ul>
              {content}
            </ul>
          </UIScroll>
        </div>
      </CodeViewer>
    </SectionArea>
  )

}

export default ScrollView

