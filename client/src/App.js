import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import LihatPeta from "./components/lihatpeta/LihatPeta";
import CariBengkel from "./components/CariBengkel";
import PetunjukArah from "./components/PetunjukArah";

import DashboardAdmin from "../src/admin/DashboardAdmin";
import TambahBengkel from "../src/admin/TambahBengkel";
import PetaAdmin from "../src/admin/PetaAdmin";
import Directions from "../src/admin/Directions";
import EditBengkel from "../src/admin/EditBengkel";
import DataBengkel from "../src/admin/DataBengkel";
import CariBengkelAdmin from "../src/admin/AdminCariBengkel";

function App() {
     const user = localStorage.getItem("token");
     return (
          <Routes>
               <Route path="/" exact element={<Main />} />
               <Route path="/signup" exact element={<Signup />} />
               <Route path="/login" exact element={<Login />} />
               <Route path="/lihatpeta" element={<LihatPeta />} />
               <Route path="/caribengkel" element={<CariBengkel />} />
               <Route path="/petunjukarah/:id" element={<PetunjukArah />} />
               
               {user &&<Route path="/admin" element={<DashboardAdmin />} />}
               {user &&<Route path="/tambah-bengkel" element={<TambahBengkel />} />}
               {user &&<Route path="/edit-bengkel/:id" element={<EditBengkel />} />}
               {user &&<Route path="/data-bengkel" element={<DataBengkel />} />}
               {user &&<Route path="/peta-admin" element={<PetaAdmin />} />}
               {user &&<Route path="/cari-bengkel-admin" element={<CariBengkelAdmin />} />}
               {user &&<Route path="/directions/:id" element={<Directions />} />}
               <Route path="/admin" element={<Navigate replace to="/login" />} />
               <Route path="/tambah-bengkel" element={<Navigate replace to="/login" />} />
               <Route path="/edit-bengkel/:id" element={<Navigate replace to="/login" />} />
               <Route path="/data-bengkel" element={<Navigate replace to="/login" />} />
               <Route path="/peta-admin" element={<Navigate replace to="/login" />} />
               <Route path="/cari-bengkel-admin" element={<Navigate replace to="/login" />} />
               <Route path="/directions/:id" element={<Navigate replace to="/login" />} />
          </Routes>
     );
}

export default App;
