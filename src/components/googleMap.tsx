import { useEffect } from "react";

declare global {
    interface Window {
    google: typeof google;
    }
}

const GoogleMap = () => {
    useEffect(() => {
    const initMap = () => {
      const location = { lat: -27.449911149532912, lng: -58.97721869777109 }; // Coordenadas exactas
        const map = new window.google.maps.Map(document.getElementById("map") as HTMLElement, {
        zoom: 15,
        center: location,
        });
        new window.google.maps.Marker({
        position: location,
        map: map,
        });
    };

    if (window.google) {
        initMap();
    } else {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDc_A8f8ahCGK6I9S-9eFeqvaWC676pf2I&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.onload = initMap;
    }
}, []);

return <div id="map"></div>;
};

export default GoogleMap;
