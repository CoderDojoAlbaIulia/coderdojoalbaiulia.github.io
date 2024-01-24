import * as React from "react";
import { Map, Marker } from "react-map-gl";

const longitude = 23.55589332597593;
const latitude = 46.06957654591634;

export default function MyMap() {
  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoicmF6dmFuNDIiLCJhIjoiY2xyaXcwemJkMGRzYjJscG5uZ2lnc2xvaiJ9.BMTJyFNyFjcI81XEthp7dw"
      initialViewState={{
        longitude: longitude,
        latitude: latitude,
        zoom: 16,
      }}
      style={{ width: 600, height: 600 }}
      mapStyle="mapbox://styles/razvan42/clrj101eb00oo01qththo326l"
      cooperativeGestures={true}
    >
      <Marker longitude={longitude} latitude={latitude} anchor="bottom">
        <a href="https://www.google.com/maps/place/Resource+Center+-+Ladies+Academy/@46.0709601,23.5448508,15z/data=!4m6!3m5!1s0x474ea7d08f406dc7:0x7cef99f43db6a8c4!8m2!3d46.0695681!4d23.5558827!16s%2Fg%2F11c6cdh7t4?entry=tts">
          <img src="/logo.png" className=" w-14 h-14" />
        </a>
      </Marker>
    </Map>
  );
}
