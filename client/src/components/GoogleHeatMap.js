import React, { useEffect } from 'react';
import { Map, HeatMap, GoogleApiWrapper } from 'google-maps-react';
import "./GoogleHeatMap.css";

const style = {
    height: "400px",
    width: "95%"
}

function GoogleHeatMap(props) {
    const { ratingData } = props;

    return (
        <div>
            <Map
                style={style}
                google={props.google}
                zoom={13}
                initialCenter={{
                    lat: 39.9526,
                    lng: -75.1652
                }}
            >
                <HeatMap
                    opacity={.5}
                    positions={ratingData}
                // radius={1000}
                />
            </Map>
        </div>
    );
}
export default GoogleApiWrapper({
    // Maps API key
    apiKey: process.env.REACT_APP_MAPS_API,
    libraries: ['visualization']
})(GoogleHeatMap);