import React from 'react';
import {
	GoogleMap,
	useJsApiLoader,
    LoadScript,
    useLoadScript
} from '@react-google-maps/api';

function Location(props) {
   const { isLoaded } = useLoadScript({
			googleMapsApiKey: process.env.REACT_APP_API_KEY,
		});

  

    if(!isLoaded) return <div>Loading...</div>;
    return <Map />
     function Map(){
return  (
<GoogleMap zoom={10} center= {{lat:44, lng: -80}} mapContainerClassName="map-container"></GoogleMap>
     );
     
}}
export default Location;
