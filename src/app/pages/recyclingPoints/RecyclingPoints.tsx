import "./RecyclingPoints.scss";
import { MapContainer, TileLayer } from 'react-leaflet'

export default () => <>
    <MapContainer className="map" center={[55.796127, 49.106414]} zoom={19}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    </MapContainer>
</>
