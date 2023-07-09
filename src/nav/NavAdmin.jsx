
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { PanelMenu } from 'primereact/panelmenu';
import { useNavigate } from 'react-router-dom';
export default function NavAdmin() {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = (url) => {
        navigate(url);
    };
    const items = [
        {
            label: 'Element de base',
            icon: 'pi pi-sliders-h',
            items: [
                {
                label: 'Categorie',
                icon: 'pi pi-fw pi-file',
                command: () => handleNavigation('/categorie'),
                },
                {
                label: 'Produit',
                icon: 'pi pi-fw pi-file',
                command: () => handleNavigation('/produit'),
                },
                {
                    label: 'Sonorisation',
                    icon: 'pi pi-fw pi-file',
                    command: () => handleNavigation('/sonorisation'),
                },
                {
                    label: 'Logistique',
                    icon: 'pi pi-fw pi-file',
                    command: () => handleNavigation('/logistique'),
                },
                {
                    label: 'Lieu',
                    icon: 'pi pi-fw pi-file',
                    command: () => handleNavigation('/lieu'),
                },
                {
                    label: 'Autre Depense',
                    icon: 'pi pi-fw pi-file',
                    command: () => handleNavigation('/autredepense'),
                },
            ],
        },
        {
            label:'Edit',
            icon:'pi pi-fw pi-pencil',
            items:[
                {
                    label:'Left',
                    icon:'pi pi-fw pi-align-left'
                },
                {
                    label:'Right',
                    icon:'pi pi-fw pi-align-right'
                },
                {
                    label:'Center',
                    icon:'pi pi-fw pi-align-center'
                },
                {
                    label:'Justify',
                    icon:'pi pi-fw pi-align-justify'
                }
            ]
        },
        {
            label:'Users',
            icon:'pi pi-fw pi-user',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-user-plus'
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-user-minus'
                },
                {
                    label:'Search',
                    icon:'pi pi-fw pi-users',
                    items:[
                    {
                        label:'Filter',
                        icon:'pi pi-fw pi-filter',
                        items:[
                            {
                                label:'Print',
                                icon:'pi pi-fw pi-print'
                            }
                        ]
                    },
                    {
                        icon:'pi pi-fw pi-bars',
                        label:'List'
                    }
                    ]
                }
            ]
        },
        {
            label:'Events',
            icon:'pi pi-fw pi-calendar',
            items:[
                {
                    label:'Edit',
                    icon:'pi pi-fw pi-pencil',
                    items:[
                    {
                        label:'Save',
                        icon:'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-calendar-minus'
                    }
                    ]
                },
                {
                    label:'Archive',
                    icon:'pi pi-fw pi-calendar-times',
                    items:[
                    {
                        label:'Remove',
                        icon:'pi pi-fw pi-calendar-minus'
                    }
                    ]
                }
            ]
        }
    ];
    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <h2>Menu</h2>
                <div className="card flex justify-content-center">
                    <PanelMenu model={items} className="w-full md:w-25rem" />
                </div>
            </Sidebar>
            <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
        </div>
    )
}
        
