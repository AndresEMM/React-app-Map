import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from "./components/Map"
import Navbar from './components/Navb'
import Marks from './components/Marks'
import Keys from './Keys'

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${Keys.mapsKey}`;

export default function App() {
  return (
    <div id="layout">
      {/*<Navbar/>*/}
      <Marks/>
      <div id='main'>
          <div className='contentMain' style={{padding: 0}}>
            <Map 
              googleMapURL= {mapURL}
              containerElement= {<div style={{ height:'89vh' }} />}
              mapElement= {<div style= {{ height:'100%' }} />}
              loadingElement= {<p>Cargando...</p>}
            />
          </div>
      </div>
      
    </div>
    
      
  );
}
