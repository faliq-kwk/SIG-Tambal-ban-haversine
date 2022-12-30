import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import { useGoogleMaps } from 'react-hook-google-maps';
import NavbarAdmin from './NavbarAdmin';
import { axiosInstance } from '../config';

function Directions() {
     const [name, setName] = useState("");
     const [alamat, setAlamat] = useState("");
     const [telepon, setTelepon] = useState("");
     const [fasilitas, setFasilitas] = useState("");
     const [buka, setBuka] = useState("");
     const [tutup, setTutup] = useState("");
     const [lat, setLat] = useState("");
     const [lng, setLng] = useState("");
     const [status, setStatus] = useState(null);
     const { id } = useParams();
     const prevMarkersRef = useRef([]);
     const [point, setPoint] = useState(null)

     useEffect(() => {
          getUserById();
     }, []);

     const getUserById = async () => {
          const response = await axiosInstance.get(`/databengkel/${id}`);
          setName(response.data.name);
          setAlamat(response.data.alamat);
          setTelepon(response.data.telepon);
          setFasilitas(response.data.fasilitas);
          setBuka(response.data.buka);
          setTutup(response.data.tutup);
          setLat(response.data.lat);
          setLng(response.data.lng);
     };
     useEffect(() => {
          getLocation();
     }, []);

     const getLocation = () => {
          if (!navigator.geolocation) {
               setStatus('Geolokasi tidak mendukung dibrowser kamu!!');
          } else {
               setStatus('Memuat Lokasi...!!');
               navigator.geolocation.getCurrentPosition((position) => {
                    setStatus(null);
                    setPoint({
                         lat: position.coords.latitude,
                         lng: position.coords.longitude
                    })
               }, () => {
                    setStatus('Tidak dapat mendapatkan lokasi..!!');
               });
          }
     }
     const dest = {
          lat: lat,
          lng: lng,
     };

     // Map options
     const { ref, map, google } = useGoogleMaps(
          "https://maps.googleapis.com/maps/api/directions/js?key=AIzaSyCrHq7bTjOXDllhFGtdgs96-FgKHUfiGmI",
          {
               zoom: 11,
               center: point
          }
     );
     useEffect(() => {

          if (map) {
               // ADD MARKER
               const m = addMarker();
               clearMarkers(prevMarkersRef.current); //clear prev markers
               prevMarkersRef.current.push(m);
               map.setCenter(point);
               // Add Directions
               let directionsService = new google.maps.DirectionsService();
               let directionsRenderer = new google.maps.DirectionsRenderer();
               directionsRenderer.setMap(map);
               calcRoute(directionsService, directionsRenderer);
          }
     }, [point, addMarker, calcRoute, map]);


     // SIDE FUNCTIONS
     function addMarker() {
          return new window.google.maps.Marker({
               position: point,
               map: map
          });
     }
     function clearMarkers(markers) {
          for (let m of markers) {
               m.setMap(null);
          }
     }
     function calcRoute(directionsService, directionsRenderer) {
          let request = {
               origin: point,
               destination: dest,
               travelMode: "DRIVING"
          };
          directionsService.route(request, function (result, status) {
               if (status === "OK") {
                    directionsRenderer.setDirections(result);
               }
          });
     }

     const time = new Date().getHours();
     let greeting;
     const jamBuka = buka;
     const jamTutup = tutup;
     if (time < jamBuka) {
          greeting = "Tutup";
     } else if (time < jamTutup) {
          greeting = "Buka";
     } else {
          greeting = "Tutup";
     }
     const hello = `https://api.whatsapp.com/send?phone=${telepon}&text=Haloo..%20Apakah%20bengkel%20masih%20buka%20??%20`
     return (
          <>
               <NavbarAdmin />
               < section id="caribengkel" className='pt-10 pb-20 bg-slate-100' >
                    <div className="container">
                         <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                              <div className="mb-12 p-4 md:w-8/12 ">
                                   <div>{status}</div>
                                   <div ref={ref} style={{ width: 650, height: 400 }} />
                              </div>
                              <div className="mb-12 p-4 md:w-4/12">
                                   <div className='font-bold'>Nama : {name}</div>
                                   <div>Alamat : {alamat}</div>
                                   <div>Telepon : +{telepon}</div>
                                   <div>Fasilitas : {fasilitas}</div>
                                   <div>Latitude : {lat}</div>
                                   <div>Longitude : {lng}</div>
                                   <div>Jam : {greeting}</div>
                                   <div><span className='font-bold'>A</span>  : Lokasi Anda</div>
                                   <div><span className='font-bold'>B</span>  : Lokasi Tujuan</div>
                                   <button className='mt-10'>
                                        <a href={hello} target="_blank" rel="noreferrer noopener" className='text-base font-semibold text-white bg-blue-500 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out'>Hubungi Bengkel</a>
                                   </button>
                              </div>
                         </div>
                    </div>
               </section >
          </>
     )
}

export default Directions