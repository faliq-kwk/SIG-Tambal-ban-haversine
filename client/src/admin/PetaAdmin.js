import React, { useState, useEffect } from "react";
import { Map, Marker, InfoWindow } from "google-maps-react";
import NavbarAdmin from "./NavbarAdmin";
import { axiosInstance } from "../config";

const google = window.google

const PetaAdmin = () => {
     const [users, setUser] = useState([]);

     useEffect(() => {
          getUsers();
     }, []);

     const getUsers = async () => {
          const response = await axiosInstance.get("/databengkel");
          setUser(response.data);
     };
     const [selectedElement, setSelectedElement] = useState(null);
     const [activeMarker, setActiveMarker] = useState(null);
     const [showInfoWindow, setShowInfoWindow] = useState(true);

     return (
          <div>
               <NavbarAdmin />
               <div className="mapcontainer">
                    <div style={{ height: '100vh', width: '100%' }}>
                         <Map
                              google={google}
                              initialCenter={{
                                   lat: -6.601378218124806,
                                   lng: 110.820545741962
                              }}
                              zoom={11}
                         >

                              {users.map((element, index) => {
                                   return (
                                        <Marker
                                             key={index}
                                             title={element.name}
                                             alamat={element.alamat}
                                             telepon={element.telepon}
                                             fasilitas={element.fasilitas}
                                             position={{
                                                  lat: element.lat,
                                                  lng: element.lng
                                             }}
                                             onClick={(props, marker) => {
                                                  setSelectedElement(element);
                                                  setActiveMarker(marker);
                                             }}
                                        />

                                   );
                              })}
                              {selectedElement ? (

                                   <InfoWindow
                                        visible={showInfoWindow}
                                        marker={activeMarker}
                                        onCloseClick={() => {
                                             setSelectedElement(null);
                                        }}
                                   >

                                        <div>
                                             <h1 className="font-bold text-slate-900 text-xl">{selectedElement.name}</h1>
                                             <h3 className="">Alamat :{selectedElement.alamat}</h3>
                                             <h3 className="">Telepon : +{selectedElement.telepon}</h3>
                                             <h3 className="">Fasilitas : {selectedElement.fasilitas}</h3>
                                             
                                        </div>
                                   </InfoWindow>

                              ) : null}
                         </Map>
                    </div>
               </div>
          </div>
     );
};

export default PetaAdmin;