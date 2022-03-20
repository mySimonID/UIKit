import React from "react";

import SectionArea from "./Helpers/SectionArea"

const DetailsView = () => {

  return (
    <SectionArea title="UIKit Details" desc="">
      <hr className="text-default" />
      <h2 className="text-primary text-underline">GitHub</h2>
      <p>The GitHub repository for UIKit can be found by following this link:
        <a href='https://github.com/mySimonID/UIKit'>UIKit</a></p>
      <br />
      <h2 className="text-primary text-underline">Making Changes</h2>
      <p>UIKit consists of two main files which can be incorporated into your own projects: </p>
      <ul>
        <li>
          <h3 className="text-default">UIKit.css</h3>
          <p>This contains all of the CSS required to format the controls.</p>
          <p>The CSS elements are parametarised at the top of the CSS file for you to change as required.</p>
        </li>
        <li>
        <h3 className="text-default">UIKitControls.css</h3>
        <p>To use one or more of the controls, import the controls as follows:</p>
        <code>{`import {UIButton, UICheckBox} from "./UIKitControls"`}</code>
        <p>Then using the examples, incorporate the control in your project, for example</p>
        <code>{`<UIButton onClick={handleClick} />`}</code>
        <br />
        <code>{`Click Me`}</code>
        <br />
        <code>{`</UIButton>`}</code>
        </li>
      </ul>
      <p className="text-default">Have fun!</p>

      <br />
      <br />
      <br />
    </SectionArea>

  )

}

export default DetailsView;
