"use client";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const DefaultIcon = L.icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const LeafletMap = ({ height = "300px" }: { height?: string }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure the map initializes only on the client side
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Render nothing during SSR

  return (
    <div className={`leaflet-map-box w-full h-[${height}] !rounded-lg overflow-hidden`}>
      <MapContainer
        center={[40.712776, -74.005974]}
        zoom={13}
        className="h-full w-full"
        scrollWheelZoom={false}
        doubleClickZoom={true}
        style={{ zIndex: 1 }} 
        touchZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[40.712776, -74.005974]}>
          <Popup>
            Zesty-Zone <br />
            123 Culinary Street, Foodie City
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
