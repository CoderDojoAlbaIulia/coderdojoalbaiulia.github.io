import { Map, Marker } from "react-map-gl";

const longitude = 23.5850596;
const latitude = 46.0798696;

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
      locale={{
        "ScrollZoomBlocker.CtrlMessage":
          "Folosește CTRL + Scroll pentru a mări harta ",
        "ScrollZoomBlocker.CmdMessage":
          "Folosește ⌘ + scroll pentru a mări harta",
        "TouchPanBlocker.Message": "Folosește 2 degete pentru a mări harta",
      }}
    >
      <Marker
        longitude={longitude}
        latitude={latitude}
        anchor="bottom"
      >
        <a href="https://maps.app.goo.gl/YPS2kBDRMVAzPygw6">
          <img
            src="/logo.png"
            className=" w-14 h-14"
          />
        </a>
      </Marker>
    </Map>
  );
}
