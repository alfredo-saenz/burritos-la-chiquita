import {React,useState} from 'react';
import {
	GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from '@react-google-maps/api';

function Location(props) {
   const { isLoaded } = useLoadScript({
			googleMapsApiKey: process.env.REACT_APP_API_KEY,
		});
const infoWindowStyle = {
	position: 'relative',
	bottom: 150,
	left: '-45px',
	width: 220,
	backgroundColor: 'white',
	boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
	padding: 10,
	fontSize: 14,
	zIndex: 100,
};

    if(!isLoaded) return <div>Loading...</div>;
    return <Map />
     function Map(){
return (
	<div>
		<GoogleMap
			clickableIcon={true}
			zoom={15}
			center={{ lat: 39.11583, lng: -94.64421 }}
			mapContainerClassName='map-container'>
			<Marker position={{ lat: 39.11583, lng: -94.64421 }} visible={true}>
				<InfoWindow position={{ lat: 39.11583, lng: -94.64421 }} visible={true}>
				
            <div>CLick here for Directions</div>
				</InfoWindow>
			</Marker>
		</GoogleMap>
	</div>
);
     
}}
export default Location;
