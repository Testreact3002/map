import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import Map from "Map";
import MapPoints from "MapPoints";
import React from "react";

export default storiesOf("MapPoints", module)
  .addDecorator((fn) => <div style={{}}>{fn()}</div>)
  .add("default", () => (
    <Map>
      <MapPoints />
    </Map>
  ))
  .add("points", () => (
    <Map>
      <MapPoints
        points={[
          [48.864716, 2.349014],
          [51.509865, -0.118092],
        ]}
        addPoint={action("addPoint")}
      />
    </Map>
  ))
  .add("point edit", () => (
    <Map>
      <MapPoints
        points={[
          [48.864716, 2.349014],
          [51.509865, -0.118092],
        ]}
        addPoint={action("addPoint")}
        edit
        delPoint={action("delPoint")}
      />
    </Map>
  ));
