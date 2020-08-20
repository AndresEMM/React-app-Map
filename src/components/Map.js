import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    InfoWindow
} from 'react-google-maps';
import * as parksData from '../data/skateboard-parks.json';
import cssMap from '../mapcss/Mcss.json'

function Map() {
    const [selectedPark, setSelectedPark] = useState(null);

    useEffect(() => {
        console.log(selectedPark)
    }) // si se agrega "[]", solo se ejecutara 1 vez.

    return(
        <GoogleMap 
            defaultZoom = {11}
            defaultCenter = {{lat: 45.4211, lng: -75.6903}}
            defaultOptions = {{ styles: cssMap}}
        >
            {parksData.features.map(park => (
                <Marker 
                    key={park.properties.PARK_ID} 
                    position={{
                        lat: park.geometry.coordinates[1],
                        lng: park.geometry.coordinates[0]
                    }} 
                    onClick={() => {
                        setSelectedPark(park);
                    }}
                    icon={{
                        url: logo,
                        scaledSize: new window.google.maps.Size(55, 55)
                    }}
                />
            ))}

            {selectedPark && (
                <InfoWindow
                    position={{
                        lat: selectedPark.geometry.coordinates[1] + .02,
                        lng: selectedPark.geometry.coordinates[0]
                    }}
                    onCloseClick={() => {
                        setSelectedPark(null);
                    }}
                >
                    <div>
                        <h2>{selectedPark.properties.NAME}</h2>
                        <p>{selectedPark.properties.DESCRIPTIO}</p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}

export default withScriptjs(withGoogleMap(Map));