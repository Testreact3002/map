import "MapPoints/css/index.css";
import { CircleMarker, LayerGroup, Popup, useMapEvents } from "react-leaflet";
import { block } from "bem-cn";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import React from "react";

const b = block("map");

function MapPoints({
  points = [],
  radius = 5,
  color = "blue",
  edit = false,
  addPoint = () => {},
  delPoint = () => {},
}) {
  useMapEvents({
    click(e) {
      if (edit) {
        const { lng, lat } = e.latlng;
        addPoint([lat, lng]);
      }
    },
  });

  const pointsList = points.map((center) => (
    <CircleMarker
      key={center.toString()}
      center={center}
      pathOptions={{ color, fillColor: color, fillOpacity: 1 }}
      radius={radius}
    >
      <Popup className={b("point-popup")}>
        <ul className={b("point-popup-coords")}>
          <li className={b("point-info")}>Lat: {center[0]}</li>
          <li className={b("point-info")}>Lon: {center[1]}</li>
        </ul>
        {edit && (
          <Button
            variant="danger"
            className={b("point-remove")}
            onClick={() => delPoint(center)}
          >
            Remove
          </Button>
        )}
      </Popup>
    </CircleMarker>
  ));
  return <LayerGroup className={b("points")}>{pointsList}</LayerGroup>;
}

MapPoints.propTypes = {
  points: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  radius: PropTypes.number,
  color: PropTypes.string,
  edit: PropTypes.bool,
  addPoint: PropTypes.func,
  delPoint: PropTypes.func,
};

/*
 *Board.defaultProps = {
 *board: (i, j) => undefined,
 *click: () => {},
 *col: 8,
 *row: 8,
 *reverse: false,
 *};
 */

export default MapPoints;
