import "Map/css/index.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { block } from "bem-cn";
import PropTypes from "prop-types";
import React from "react";

const b = block("map");

/*
 *function Clickable(){
 *  const map = useMapEvents({
 *    click(e){
 *      alert(e);
 *    }
 *  });
 *  return null;
 *}
 */
function Map({ center = [51.505, -0.09], zoom = 5, children = [] }) {
  return (
    <MapContainer center={center} zoom={zoom} className={b()}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /*
         *whenCreated = {(map)=>{
         *map.on('click',function(e){
         *console.log('e',e);
         *
         *});
         *return null;
         *}}
         */
      />
      {children}
    </MapContainer>
  );
}

Map.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
  children: PropTypes.node,
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
export default Map;
