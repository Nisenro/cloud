import {GoogleMap, LoadScript, Marker} from "@react-google-maps/api"

//googlemap helps us render the content in our component on Google maps while LOADSCRIPT loads the google maps api script and MARKER identifies a location on the map

const MapContainer = () => {
  const item = {
    name: "place",
    location: {
      lat : 6.5244, 
      lng : 3.3792
    },
  };

  const mapStyles = {
    height: "400px",
    width: "50%"
  };

  const defaultCenter = {
    lat : 6.5244, 
    lng : 3.3792
  }

  return(
    <div>
      <LoadScript googleMapsApiKey="AIzaSyC-9HBtGH2Tn5omz6Y4g9B29Jg5EVVx2xE">
        <GoogleMap mapContainerStyle={mapStyles} zoom={30} center={defaultCenter}>
          <Marker key={item.name} position={item.location}></Marker>
        </GoogleMap>

      </LoadScript>
    </div>
  )
};

export default MapContainer;