import { storiesOf } from "@storybook/react";
import Map from "Map";
import React from "react";

export default storiesOf("Map", module)
  .addDecorator((fn) => <div style={{}}>{fn()}</div>)
  .add("default", () => <Map />);
