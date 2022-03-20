# UIKit

## Description

Welcome to UIKit, a ReactJS based kit containing building blocks for creating applications.

- This is to drive consistency across an application
- Remove the guesswork out of formatting your controls
- Provide the ability to change colours centrally.

The following controls are provided:

- UIButton
- UICheckBox
- UIRadio
- UIInput
- UIScroll

## Installation

- Copy the two files UIKit.css and UIKitControls.jsx from the src/Views/Controls folder to your React components.
- In your App.js file, import the UIKit.css file. For example:

```
import "./CSS/UIKit.css"
```


## Using UIKit.

- Once you have installed the two files to your project, then the UIKit controls can easily be used in your projects.
- In one of your components, simply include the controls that you want.
- For example:

```
import { UIButton } from "./UIKitControls";

const myComponent = () => {

  const handleClick = () => {
    console.log('Clicked')
  }
   
  return (
    <UIButton 
      onClick={handleClick}
       >
      Click Me
    </UIButton>
  )
}
```

Further information can be found here: https://mysimonid.github.io/UIKit/


## License

- MIT License

