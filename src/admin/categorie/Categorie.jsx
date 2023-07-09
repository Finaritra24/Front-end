import React, { useState, useEffect } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import NavAdmin from '../../nav/NavAdmin';
import AjoutCategorie from './AjoutCategorie';
import ListCategorie from './ListCategorie';
        
export default function Categorie() {
  const [userId, setUserId] = useState(null);
  //if user
  useEffect(() => {
    fetch('http://localhost:8081/getAdminId', { credentials: 'include' })
      .then(response => response.text())
      .then(data => setUserId(data))
      .catch(error => console.error(error));
  }, []);

  if (userId === null) {
    return <p>Chargement...</p>
  }

  return (
    <div>
        <NavAdmin/>
        <h1>Categorie</h1>
        <div className="card">
            <Accordion activeIndex={0}>
              <AccordionTab
                    header={
                        <div className="flex align-items-center">
                            <i className="pi pi-plus mr-2"></i>
                            <span className="vertical-align-middle">Ajouter Categorie</span>
                        </div>
                    }
                >
                    <AjoutCategorie/>
              </AccordionTab>
                <AccordionTab
                    header={
                        <div className="flex align-items-center">
                            <i className="pi pi-list mr-2"></i>
                            <span className="vertical-align-middle">Liste Categorie</span>
                        </div>
                    }
                >
                    <ListCategorie/>
                </AccordionTab>
                <AccordionTab
                    header={
                        <div className="flex align-items-center">
                            <i className="pi pi-search mr-2"></i>
                            <span className="vertical-align-middle">Autres</span>
                            <i className="pi pi-cog ml-2 ml-2"></i>
                        </div>
                    }
                >
                    <p className="m-0">
                        
                    </p>
                </AccordionTab>
            </Accordion>
        </div>
    </div>
  );
}
