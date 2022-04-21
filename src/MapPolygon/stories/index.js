import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import Map from "Map";
import MapPolygon from "MapPolygon";
import React from "react";

export default storiesOf("Polygon", module)
  .addDecorator((fn) => <div style={{}}>{fn()}</div>)
  .add("default", () => (
    <Map>
      <MapPolygon />
    </Map>
  ))
  .add("positions", () => (
    <Map>
      <MapPolygon
        positions={[
          [51.481583, -3.17909],
          [53.219383, 6.566502],
          [43.733334, 7.416667],
        ]}
        addPoint={action("addPoint")}
      />
    </Map>
  ))
  .add("positions edit", () => (
    <Map>
      <MapPolygon
        positions={[
          [51.481583, -3.17909],
          [53.219383, 6.566502],
          [43.733334, 7.416667],
        ]}
        addPoint={action("addPoint")}
        edit
      />
    </Map>
  ));
