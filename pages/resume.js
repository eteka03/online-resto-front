import React from 'react'
import axios from 'axios'
import ViewCommande from '../components/ViewCommande/ViewCommande'

export default function resume({datas}) {
    return (
        <div>
            <h4>Commande envoyée</h4>

            <h2>Facture</h2>
            
           <ViewCommande isFacture={true} commandList={[]}/>
        </div>
    )
}


export async function getServerSideProps(context){

    
        const {query} = context      
       
        return{
            props : {
                datas:query.tableId
            }
        }  
    
}
