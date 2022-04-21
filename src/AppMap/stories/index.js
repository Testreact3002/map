import { storiesOf } from "@storybook/react";
import AppMap from "AppMap";
import React from "react";

export default storiesOf("AppMap", module)
  .addDecorator((fn) => <div style={{}}>{fn()}</div>)
  .add("default", () => <AppMap />)
  .add("edit points", () => <AppMap edit="points" />)
  .add("edit polygon", () => <AppMap edit="polygon" />)
  .add("edit", () => (
    <AppMap
      polygon={[
        [51.481583, -3.17909],
        [53.219383, 6.566502],
        [43.733334, 7.416667],
      ]}
      points={[
        [48.864716, 2.349014],
        [51.509865, -0.118092],
      ]}
    />
  ));
