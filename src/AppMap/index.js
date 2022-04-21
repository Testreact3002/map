import "AppMap/css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { block } from "bem-cn";
import { pointInPolygon, pointsInPolygon } from "pip";
import Button from "react-bootstrap/Button";
import Map from "Map";
import MapPoints from "MapPoints";
import MapPolygon from "MapPolygon";
import PropTypes from "prop-types";
import React, { useState } from "react";

const b = block("app-map");

function AppMap({
  center = [51.505, -0.09],
  zoom = 5,
  edit = "",
  polygon = [],
  points = [],
}) {
  const [editMode, setEditMode] = useState(edit);
  const [poly, setPoly] = useState([...polygon]);
  const [pnts, setPoints] = useState([...points]);
  const [pips, setPips] = useState(pointsInPolygon(poly, pnts));
  const addPoint = (latlon) => {
    setPoints([...pnts, latlon]);
    setPips(pips + pointInPolygon(latlon, poly));
  };
  const addPolygon = (latlon) => {
    const arr = [...poly, latlon];
    setPips(pointsInPolygon(arr, pnts));
    setPoly(arr);
  };
  const delPoint = (latlon) => {
    setPoints(pnts.filter((p) => p.toString() != latlon.toString()));
    setPips(pips - pointInPolygon(latlon, poly));
  };
  const delPolygon = (latlon) => {
    const arr = poly.filter((p) => p.toString() != latlon.toString());
    setPips(pointsInPolygon(arr, pnts));
    setPoly(arr);
  };

  const togglePointsEdit = () =>
    setEditMode(editMode == "points" ? "" : "points");
  const togglePolygonEdit = () => {
    if (editMode == "polygon") {
      setEditMode("");
    } else {
      setPoly([]);
      setEditMode("polygon");
    }
  };

  return (
    <div className={b()}>
      <Map center={center} zoom={zoom}>
        {editMode == "polygon" ? (
          <MapPoints
            key="points1"
            points={poly}
            edit={editMode == "polygon"}
            color="green"
            delPoint={delPolygon}
          />
        ) : null}
        <MapPolygon
          key="poly"
          positions={poly}
          edit={editMode == "polygon"}
          addPoint={addPolygon}
          color="green"
        />
        <MapPoints
          key="points2"
          points={pnts}
          addPoint={addPoint}
          edit={editMode == "points"}
          delPoint={delPoint}
        />
      </Map>
      <div className={b("panel")}>
        <Button
          variant={editMode == "points" ? "primary" : "outline-primary"}
          size="sm"
          onClick={togglePointsEdit}
        >
          Ставить точки
        </Button>
        <Button
          variant={editMode == "polygon" ? "success" : "outline-success"}
          size="sm"
          onClick={togglePolygonEdit}
        >
          Рисовать контур
        </Button>
        <div className={b("report")}>Точек в контуре: {pips} </div>
      </div>
    </div>
  );
}

AppMap.propTypes = {
  edit: PropTypes.oneOf(["", "points", "polygon"]),
  center: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
  polygon: PropTypes.arrayOf(PropTypes.number),
  points: PropTypes.arrayOf(PropTypes.number),
};
/*
 *Board.defaultProps = {
 *  board: (i, j) => undefined,
 *  click: () => {},
 *  col: 8,
 *  row: 8,
 *  reverse: false,
 *};
 */
export default AppMap;
