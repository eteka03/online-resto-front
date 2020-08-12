import React , {useEffect,useState}from 'react'
import {useRouter} from 'next/router'
import fakeMenu from './functions/fakeMenu'
import Plat from '../components/Plat/Plat'
import ViewCommande from '../components/ViewCommande/ViewCommande'
import commandFactureAvantTaxe from './functions/commandFactureAvantTaxe'
import ViewCommandeFacture from '../components/ViewCommandeFacture/ViewCommandeFacture'
import axios from 'axios'




export default function commande({tableId,menu}) {
    const Router = useRouter()
    const [total,setTotal] = useState(0)
    const [commandeList,setCommandList] = useState([])
    const {query} = Router

useEffect(()=>{

   
},[])
    
    const addPlat = (addPlat) => {
            
        const searchExistingPlat = commandeList.filter(plat => plat.name === addPlat.name)

        if(searchExistingPlat.length > 0 ){
            
            const platWithNewQty = {...searchExistingPlat[0],qty:searchExistingPlat[0].qty+1}
            const commandWithoutExistingPlat =  commandeList.filter(plat => plat.name !== addPlat.name)
            const newCommandList = [...commandWithoutExistingPlat,platWithNewQty]
             
            setCommandList(newCommandList)
            setTotal(commandFactureAvantTaxe(newCommandList))
        }else{        
            const newCommandList = [...commandeList,{...addPlat,qty:1}]
            setCommandList(newCommandList)
            setTotal(commandFactureAvantTaxe(newCommandList))
        }
    }


    const removePlat = removePlat => {


        if(removePlat.qty === 1){
            const newCommandList = commandeList.filter(plat => plat.name !== removePlat.name)
            setCommandList(newCommandList)
            setTotal(commandFactureAvantTaxe(newCommandList))

        }else{
            console.log('qty =2..')
            const newPlatQty = {...removePlat,qty:removePlat.qty - 1}
           const listWithoutRemovePlat = commandeList.filter(plat => plat.name !== removePlat.name)
           const newCommandList = [...listWithoutRemovePlat,newPlatQty]
            setCommandList(newCommandList)
            setTotal(commandFactureAvantTaxe(newCommandList))
        }       
    }

    const commander = async ()=>{
        try {

            const {data} = await axios.post(`/api/order?tableId=${tableId}`,{commandeList})

            if(data){
                Router.push(`/resume?tableId=${tableId}`)
            }
            
            
        } catch (error) {
            
        }
        

        
    }


    return (
        <div>
            <div className="commande-entete-section">
    <h4>Table numero {query.table || '0'}</h4>

    <ViewCommandeFacture total={total}/>
            </div>

            <div>
                <h4>Votre commande</h4>
                <ViewCommande isFacture={false} commandList={commandeList} addPlat={addPlat} removePlat={removePlat}/>
            </div>

            <div className="commande-menu-section">
                <h2>Menu</h2>

                <div className="menu-div">
                   
    {menu.map(obj => 
    <div key={obj.category}>
         <h3>{obj.category}</h3>
          <ul key={obj.category}>
              {obj.plats.map(plat => 

              <Plat plat={plat} addPlat={addPlat} removePlat={removePlat} key={plat.name} name={plat.name} description={plat.description} price={plat.price} />
              
              )}
            </ul> 
      </div>)}
                   
                </div>

            </div>

            <div className="command-action-section">
                <button onClick={()=>Router.push('/')}>Annuler</button>

                <button onClick={commander}>Commander</button>
            </div>
        </div>
    )
}

export async function getServerSideProps(context){
    const {query} = context

    return{
        props:{
            tableId:query.table,
            menu:fakeMenu()
        }
    }
}


