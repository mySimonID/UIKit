import React from "react";

import SectionArea from "./Helpers/SectionArea"
import CodeViewer from './Helpers/CodeViewer';

const TextView = () => {

  const jsx1 = [""]

  return (
    <SectionArea title="Text" desc="Text sizes and colour variations">
      <CodeViewer code={jsx1}>
        <div><label className="text1">Text1</label></div>
        <div><label className="text2">Text3</label></div>
        <div><label className="text3">Text3</label></div>
        <div><label className="text4">Text4</label></div>
        <br />
        <div><label className="text2 text-default">Default</label></div>
        <div><label className="text2 text-danger">Danger</label></div>
        <div><label className="text2 text-info">Info</label></div>
        <div><label className="text2 text-primary">Primary</label></div>
        <div><label className="text2 text-success">Success</label></div>
        <div><label className="text2 text-warning">Warning</label></div>

        <br />
        <div><label className="text3 text-bold">Bold</label></div>
        <div><label className="text3 text-italic">Italic</label></div>
        <div><label className="text3 text-bold text-italic">Bold-Italic</label></div>

      </CodeViewer>
    </SectionArea>
  )

}

export default TextView
