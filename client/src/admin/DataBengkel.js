import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import NavbarAdmin from './NavbarAdmin';
import { axiosInstance } from '../config';

const DataBengkel = () => {
     const [datas, setData] = useState([]);

     useEffect(() => {
          getUsers();
     }, []);

     const getUsers = async () => {
          const response = await axiosInstance.get("/databengkel");
          setData(response.data);
     };

     const deleteUser = async (id) => {
          try {
               await axiosInstance.delete(`/databengkel/${id}`);
               getUsers();
          } catch (error) {
               console.log(error);
          }
     }
     return (
          <>
               <NavbarAdmin />
               <div className='mt-5 mx-5'>
                    <Link to={"/add"} className="my-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Tambah data</Link>
                    <table className="mt-8 border-2 border-gray-600">
                         <thead>
                              <tr>
                                   <th className='border-2 border-black'>No.</th>
                                   <th className='border-2 border-black'>Nama</th>
                                   <th className='border-2 border-black'>Alamat</th>
                                   <th className='border-2 border-black'>Telepon</th>
                                   <th className='border-2 border-black'>Fasilitas</th>
                                   <th className='border-2 border-black'>Buka</th>
                                   <th className='border-2 border-black'>Tutup</th>
                                   <th className='border-2 border-black'>Latitude</th>
                                   <th className='border-2 border-black'>Longtitude</th>
                                   <th className='border-2 border-black'>Edit</th>
                                   <th className='border-2 border-black'>Hapus</th>
                              </tr>
                         </thead>
                         <tbody>
                              {datas.map((user, index) => {
                                   return (
                                        <tr key={user._id}>
                                             <td className='border-2 border-black'>{index + 1}</td>
                                             <td className='border-2 border-black'>{user.name}</td>
                                             <td className='border-2 border-black'>{user.alamat}</td>
                                             <td className='border-2 border-black'>+{user.telepon}</td>
                                             <td className='border-2 border-black'>{user.fasilitas}</td>
                                             <td className='border-2 border-black'>{user.buka}:00</td>
                                             <td className='border-2 border-black'>{user.tutup}:00</td>
                                             <td className='border-2 border-black'>{user.lat}</td>
                                             <td className='border-2 border-black'>{user.lng}</td>
                                             <td className='border-2 border-black'>
                                                  <Link to={`/edit-bengkel/${user._id}`}
                                                       className='p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                                                  >edit</Link>

                                             </td>
                                             <td className='border-2 border-black'>
                                                  <button
                                                       onClick={() => deleteUser(user._id)}
                                                       className='p-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                                                  >
                                                       delete</button>
                                             </td>
                                        </tr>
                                   )
                              })
                              }
                         </tbody>
                    </table>
               </div>
          </>
     )
}

export default DataBengkel