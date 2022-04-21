import L from "leaflet";
import leafletPip from "@mapbox/leaflet-pip";

const polygonJson = (poly) => ({
  type: "Feature",
  geometry: {
    type: "Polygon",
    coordinates: [poly.map(([lat, lon]) => [lon, lat])],
  },
  properties: {
    prop0: "value0",
    prop1: { this: "that" },
  },
});
leafletPip.bassackwards = true;
export const pointsInPolygon = (poly, pnts) => {
  if (poly.length < 2) {
    return 0;
  }
  const p = L.geoJson(polygonJson(poly));

  const pip = (latlon) =>
    (leafletPip.pointInLayer(latlon, p, true).length > 0) | 0;
  return pnts.reduce((sum, latlon) => sum + pip(latlon), 0);
};
export const pointInPolygon = (latlon, poly) => {
  if (poly.length < 2) {
    return 0;
  }

  return (
    (leafletPip.pointInLayer(latlon, L.geoJson(polygonJson(poly)), true)
      .length >
      0) |
    0
  );
};
