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

- Copy the two files UIKit.css and UIKitControls.jsx from the src/Controls folder to your project.
- In your App.js file, import the UIKit.css file.
- Copy the 

## Using UIKit.

- Once you have installed the two files to your project, then the UIKit controls can easily be used in your projects.
- In one of your components, simply include the 
- For example:

```
import { UIButton } from "./UIKitControls";

const myComponent = () => {

  const handleClick = () => {
    console.log('Clicked')
  }
   
  return (
    <UIButton 
      onCLick={handleClick}
       >
      Click Me
    </UIButton>
  )
}
```


## License

- MIT License

