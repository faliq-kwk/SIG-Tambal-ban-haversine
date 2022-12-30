import React from 'react'
import Turup from './Turup'
import Peta from './Peta'
import Navbar from './Navbar'

export default function App() {
     return (
          <div>
               <Navbar />
               <section id="caribengkel" className='pt-10 pb-20 bg-slate-100'>
                    <div className="container">
                         <div className="w-full px-4">
                              <div className="max-w-xl mx-auto text-center mb-16">
                                   <h2 className='font-bold text-dark text-3xl mb-4'>Lokasi Terdekat</h2>
                              </div>
                         </div>
                         <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                              <div className="mb-12 p-4 md:w-1/2 ">
                                   <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Lokasi Tambal Ban Terdekat Saat ini</h3>
                                   <Turup />
                                   
                              </div>
                              <div className="mb-12 p-4 md:w-1/2">
                                   <div className='rounded-md shadow-md overflow-hidden'>
                                        <Peta />
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     )
}