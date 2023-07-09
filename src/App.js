import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import LoginAdmin from './admin/LoginAdmin';
import AjoutAdmin from "./admin/AjoutAdmin";
import AccueilAdmin from "./admin/AccueilAdmin";
import Categorie from "./admin/categorie/Categorie";
import ModifCategorie from "./admin/categorie/ModifCategorie";

function App() {
  return (
    <div>
    <div className="background">
      
    <div className="myHeader">
      <p><i className="pi pi-cart-plus" style={{ color: 'var(--primary-color)' }}></i>ShopWise</p>
    </div>
    <br/>
    {/* Le contenu de votre application */}
    <Router>
    <div className='App'>
    <Routes>
      {/* admin */}
      <Route exact path="/admin" element={<LoginAdmin />} />
      <Route exact path="/ajoutadmin" element={<AjoutAdmin />} />
      <Route exact path="/accueiladmin" element={<AccueilAdmin />} />
      <Route exact path="/categorie" element={<Categorie />} />
      <Route exact path="/modifcategorie" element={<ModifCategorie />} />
      {/* user */}
    </Routes>
    </div>
    </Router>
  </div>
  </div>
  );
}

export default App;
