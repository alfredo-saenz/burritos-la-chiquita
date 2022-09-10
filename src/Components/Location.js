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

     const [selectedElement, setSelectedElement] = useState(null);

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
            
        </Marker>
		</GoogleMap>
        
	</div>
);
     
}}
export default Location;
