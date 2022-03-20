import React from "react";

import ButtonView from "./Views/ButtonView"
import DetailsView from "./Views/DetailsView"
import InputView from "./Views/InputView"
import ControlView from "./Views/ControlView"
import ScrollView from './Views/ScrollView.jsx';
import TextView from './Views/TextView';


const UIKitView = () => {
  return (
    <div className="App">
      <div>
        <h2 className="text-default text-underline text-bold">UIKit</h2>
        <p className="text-default">Welcome to UIKit a ReactJS based kit containing building blocks for creating applications.</p>
        <hr />
        <br />
      </div>
      <ButtonView />
      <TextView />
      <InputView />
      <ControlView />
      <ScrollView />
      <DetailsView />
    </div>
  );
}

export default UIKitView;
