import React, { useState, useEffect } from 'react'
import findNearestLocation from 'map-nearest-location';
import { axiosInstance } from '../config';

function LokasiTerdekat() {
     const [myLocation, setMylocation] = useState(null);
     const [status, setStatus] = useState(null);
     const [dapat, setDapat] = useState([]);

     useEffect(() => {
          getLocation();
     }, []);

     useEffect(() => {
          async function fecthData() {
               const response = await axiosInstance.get(`/databengkel`);
               let locations = []
               response.data.map((user) => {
                    locations.push({
                         "id": user._id,
                         "name": user.name,
                         "alamat": user.alamat,
                         "telepon": (user.telepon).toString(),
                         "fasilitas": user.fasilitas,
                         "buka": user.buka,
                         "tutup": user.tutup,
                         "lat": Number(user.lat),
                         "lng": Number(user.lng)
                    })
                    return locations
               })
               if (myLocation) {
                    var nearestLocations = [];
                    var turu = [];
                    var kadal = [];
                    for (let step = 0; step < 60; step++) {
                         if (locations.length === 0) break;
                         let nearest = findNearestLocation(myLocation, locations);
                         nearestLocations.push(nearest);
                         kadal.push(nearest.location.tutup);
                         turu.push(nearest.location.buka);
                         locations = locations.filter(function (location) {
                              return (location.lat !== nearest.location.lat &&
                                   location.lng !== nearest.location.lng &&
                                   location.name !== nearest.location.name &&
                                   location.telepon !== nearest.location.telepon);
                         });
                    }
                    setDapat(nearestLocations);
               }
          }
          fecthData()
     }, [myLocation]);

     const getLocation = () => {
          if (!navigator.geolocation) {
               setStatus('Gelokasi tidak mendukung dibrowser kamu!!');
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
     return (
          <div>
               <div>{status}</div>
               {dapat.map((kondang, index) => {
                    return (
                         <div key={kondang.location.id}>
                              <div>Nomor : {index + 1}</div>
                              <div className='font-bold'>nama: {kondang.location.name}</div>
                              <div>alamat: {kondang.location.alamat}</div>
                              <div>Telepon: +{kondang.location.telepon}</div>
                              <div>Fasilitas : {kondang.location.fasilitas}</div>
                              <div>Jam : {kondang.location.buka}:00 <span className='font-bold'>sampai</span> {kondang.location.tutup}:00</div>
                              <div>Latitude: {kondang.location.lat}</div>
                              <div>Longitude: {kondang.location.lng}</div>
                              <div>Jarak: <span className='text-blue-700 font-semibold'> {kondang.distance}</span> Meter</div>
                              <button className='mt-10 mb-10 mr-2'>
                                   <a href={`/directions/${kondang.location.id}`} className='text-base font-semibold text-white bg-blue-500 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out'>Petunjuk Arah</a>
                              </button>
                         </div>
                    )
               })}
          </div>
     )
}

export default LokasiTerdekat