import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


function Home() {
     return (
          <div className="flex flex-col h-screen justify-between">
               <Navbar />
               <div className="relative bg-white">
                    <div className="max-w-7xl mx-auto">
                         <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                              <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                                   <polygon points="50,0 100,0 50,100 0,100" />
                              </svg>

                              <div>
                                   <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                                        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                                             <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                                  <div className="flex items-center justify-between w-full md:w-auto">                                                  </div>
                                             </div>
                                        </nav>
                                   </div>
                                   <div className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                                        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        </div>
                                   </div>
                              </div>
                              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                                   <div className="sm:text-center lg:text-left">
                                        <h1 className="text-2xl tracking-tight font-extrabold text-slate-800 sm:text-2xl md:text-3xl">
                                             <span className="block xl:inline">Selamat Datang Di Sistem Informasi Pencarian Lokasi Tambal Ban Terdekat Di Kabupaten Jepara</span>
                                        </h1>
                                        <p className="mt-3 text-base text-slate-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Sebelum Menjalankan Aplikasi Silahkan Hidupkan Lokasi Terlebih Dahulu</p>
                                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                             <div className="rounded-md shadow">
                                                  <Link to={"/CariBengkel"} className="w-full flex items-center justify-center px-8 py-3 border-2 border-slate-900 text-base font-medium rounded-md text-slate-900 bg-slate-100 hover:bg-slate-300 md:py-4 md:text-lg md:px-10"> Cari Bengkel </Link>
                                             </div>
                                             <div className="mt-3 sm:mt-0 sm:ml-3">
                                                  <button onClick={getLocation} className="w-full flex items-center justify-center px-8 py-3 border-2 border-slate-900 text-base font-medium rounded-md text-slate-900 bg-slate-100 hover:bg-slate-300 md:py-4 md:text-lg md:px-10"> Hidupkan Lokasi </button>
                                             </div>
                                        </div>
                                   </div>
                              </main>
                         </div>
                    </div>
                    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                         <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" />
                    </div>
               </div>
               <Footer />
          </div>
     );
}

export default Home;