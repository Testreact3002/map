import "Map/css/index.css";
import "leaflet/dist/leaflet.css";
import { Polygon, useMapEvents } from "react-leaflet";
import { block } from "bem-cn";
import PropTypes from "prop-types";
import React from "react";

const b = block("map");

function MapPolygon({
  positions = [],
  color = "green",
  edit = false,
  addPoint = () => {},
}) {
  useMapEvents({
    click(e) {
      if (edit) {
        const { lng, lat } = e.latlng;
        addPoint([lat, lng]);
      }
    },
  });

  return (
    <Polygon
      positions={positions}
      className={`${b("polygon")}`}
      pathOptions={{ color, fillColor: color }}
    />
  );
}
MapPolygon.propTypes = {
  positions: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  color: PropTypes.string,
  edit: PropTypes.bool,
  addPoint: PropTypes.func,
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
export default MapPolygon;
