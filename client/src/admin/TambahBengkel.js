import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavbarAdmin from './NavbarAdmin';
import { axiosInstance } from '../config';

const TambahBengkel = () => {
     const [name, setName] = useState("");
     const [alamat, setAlamat] = useState("");
     const [telepon, setTelepon] = useState("");
     const [fasilitas, setFasilitas] = useState("");
     const [buka, setBuka] = useState("");
     const [tutup, setTutup] = useState("");
     const [lat, setLat] = useState("");
     const [lng, setLng] = useState("");
     const navigate = useNavigate();

     const saveUser = async (e) => {
          e.preventDefault();
          try {
               await axiosInstance.post('/databengkel', {
                    name,
                    alamat,
                    telepon,
                    fasilitas,
                    buka,
                    tutup,
                    lat,
                    lng,
               });
               navigate("/data-bengkel");
          } catch (error) {
               console.log(error);
          }
     }
     return (
          <>
               <NavbarAdmin />
               <div className="w-full max-w-xs">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={saveUser}>
                         <div className="mb-4">
                              <label className="block text-gray-700 text-sm font-bold mb-2">
                                   Nama
                              </label>
                              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nama" />
                         </div>
                         <div className="mb-6">
                              <label className="block text-gray-700 text-sm font-bold mb-2">
                                   Alamat
                              </label>
                              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={alamat} onChange={(e) => setAlamat(e.target.value)} type="text" placeholder="Alamat" />
                         </div>
                         <div className="mb-6">
                              <label className="block text-gray-700 text-sm font-bold mb-2">
                                   Telepon
                              </label>
                              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={telepon} onChange={(e) => setTelepon(e.target.value)} type="text" placeholder="Telepon" />
                         </div>
                         <div className="mb-6">
                              <label className="block text-gray-700 text-sm font-bold mb-2">
                                   Fasilitas
                              </label>
                              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={fasilitas} onChange={(e) => setFasilitas(e.target.value)} type="text" placeholder="Fasilitas" />
                         </div>
                         <div className="mb-6">
                              <label className="block text-gray-700 text-sm font-bold mb-2">
                                   Jam
                              </label>
                              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={buka} onChange={(e) => setBuka(e.target.value)} type="text" placeholder="Buka" />
                              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={tutup} onChange={(e) => setTutup(e.target.value)} type="text" placeholder="Tutup" />
                         </div>
                         <div className="mb-6">
                              <label className="block text-gray-700 text-sm font-bold mb-2">
                                   Latitude
                              </label>
                              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={lat} onChange={(e) => setLat(e.target.value)} type="text" placeholder="Latitude" />
                         </div>
                         <div className="mb-6">
                              <label className="block text-gray-700 text-sm font-bold mb-2">
                                   Longtitude
                              </label>
                              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={lng} onChange={(e) => setLng(e.target.value)} type="text" placeholder="Longtitude" />
                         </div>

                         <div className="flex items-center justify-between">
                              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                   Save
                              </button>
                         </div>
                    </form>
               </div>
          </>
     )
}

export default TambahBengkel