import "./index.css";
import { Button } from "@storybook/react/demo";
import { storiesOf } from "@storybook/react";
import AppMap from "AppMap/stories";
import Map from "Map/stories";
import MapPoints from "MapPoints/stories";
import MapPolygon from "MapPolygon/stories";
import React from "react";

storiesOf("Button", module)
  .add("with text", () => <Button>Hello Button</Button>)
  .add("with emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
