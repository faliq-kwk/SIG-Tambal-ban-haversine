import React, { useState, useEffect } from 'react'
import findNearestLocation from 'map-nearest-location';
import { Map, Marker } from "google-maps-react";
import axios from 'axios';
import { axiosInstance } from '../config';
const google = window.google

export default function Peta() {
     const [myLocation, setMylocation] = useState(null);
     const [inpoLokasi, setInpoLokasi] = useState([]);
     const [mapLat, setMapLat] = useState([]);
     const [mapLng, setMapLng] = useState([]);
     const [status, setStatus] = useState(null);

     useEffect(() => {
          getLocation();
     }, []);

     useEffect(() => {
          async function fetchMyPeta() {
               const response = await axiosInstance.get('/databengkel');
               let result = []
               response.data.map((user) => {
                    result.push({
                         "name": user.name,
                         "alamat": user.alamat,
                         "telepon": (user.telepon).toString(),
                         "fasilitas": user.fasilitas,
                         "lat": Number(user.lat),
                         "lng": Number(user.lng)
                    })
                    return result
               })
               if (myLocation) {
                    const marker = findNearestLocation(myLocation, result);
                    setInpoLokasi(marker.location);
                    setMapLat(marker.location.lat)
                    setMapLng(marker.location.lng)
               }
          }
          fetchMyPeta()
     }, [myLocation]);

     const getLocation = () => {
          if (!navigator.geolocation) {
               setStatus('Geolokasi tidak mendukung dibrowser kamu!!');
          } else {
               setStatus('Memuat Lokasi...');
               navigator.geolocation.getCurrentPosition((position) => {
                    setStatus(null);
                    setMylocation({
                         lat: position.coords.latitude,
                         lng: position.coords.longitude
                    })
               }, () => {
                    setStatus('Tidak bisa mendapatkan lokasi anda!!');
               });
          }
     }
     const mapStyles = {
          height: "50%",
          width: "40%",
     }
     const pusatMap = { lat: mapLat, lng: mapLng };
     return (
          <div>
               <div>{status}</div>
               <Map
                    google={google}
                    center={pusatMap}
                    style={mapStyles}
                    zoom={18}
               >
                    <Marker
                         title={inpoLokasi.name}
                         alamat={inpoLokasi.alamat}
                         telepon={inpoLokasi.telepon}
                         fasilitas={inpoLokasi.fasilitas}
                         position={{
                              lat: inpoLokasi.lat,
                              lng: inpoLokasi.lng
                         }}
                    />
               </Map>
          </div>
     )
}