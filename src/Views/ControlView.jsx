import React, { useState } from 'react';

import SectionArea from "./Helpers/SectionArea"
import CodeViewer from './Helpers/CodeViewer';

import {UICheckBox, UIRadio} from "./Controls/FormControls"

const ControlView = () => {

  const [checkState, setCheckState] = useState(
    { c1: false, c2: true, radioName: "r1" })

  const jsx1 = [
    " const handleChange = (e) => {",
    "  setCheckState({ ...checkState, [e.target.name]: e.target.checked })",
    "}",
    "//",
    "//",
    "<ul>",
    "<li>",
    "  <UICheckBox",
    "    name='c1'",
    "    className=''",
    "    checked={checkState.c1}",
    "    onChange={handleChange}>",
    "    Checked",
    "    </UICheckBox>",
    "  </li>",
    "  <li>",
    "    <UICheckBox",
    "      name='c2'",
    "      className=''",
    "     checked={checkState.c2}",
    "      onChange={handleChange}>",
    "      UnCheckbox",
    "    </UICheckBox>",
    "  </li>",
    "</ul>"
  ]

  const jsx2 = [
    " const handleRadioChange = (e) => {",
    " setCheckState({ ...checkState, radioName: e.target.name })",
    "}",
    "//",
    "//",
    "<UIRadio",
    "   name='r1'",
    "   className=''",
    "   checked={checkState.radioName === 'r1'}",
    "   onChange={handleRadioChange}>",
    "    Radio 1",
    "</UIRadio>",

    "<UIRadio",
    "   name='r2'",
    "   className=''",
    "   checked={checkState.radioName === 'r2'}",
    "   onChange={handleRadioChange}>",
    "    Radio 2",
    "</UIRadio>"
  ]

  const handleChange = (e) => {
    setCheckState({ ...checkState, [e.target.name]: e.target.checked })
  }

  const handleRadioChange = (e) => {
    setCheckState({ ...checkState, radioName: e.target.name })

  }

  return (
    <div className='sectionRow'>
      <div className=''>

        <SectionArea title="Checkboxes" desc="">
          <CodeViewer code={jsx1}>
            <ul>
              <li>
                <UICheckBox
                  name="c1"
                  className=""
                  checked={checkState.c1}
                  onChange={handleChange}>
                  Checked
                </UICheckBox>
              </li>
              <li>
                <UICheckBox
                  name="c2"
                  className=""
                  checked={checkState.c2}
                  onChange={handleChange}>
                  UnCheckbox
                </UICheckBox>
              </li>
            </ul>
          </CodeViewer>
        </SectionArea>

      </div>

      <div className=''>

        <SectionArea title="Radio Buttons" desc="">
          <CodeViewer code={jsx2}>
            <UIRadio
              name="r1"
              className=""
              checked={checkState.radioName === "r1"}
              onChange={handleRadioChange}>
              Radio 1
            </UIRadio>

            <UIRadio
              name="r2"
              className=""
              checked={checkState.radioName === "r2"}
              onChange={handleRadioChange}>
              Radio 2
            </UIRadio>
          </CodeViewer>
        </SectionArea>

      </div>
    </div>

  )

}

export default ControlView

