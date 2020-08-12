import React , {useEffect,useState}from 'react'
import {useRouter} from 'next/router'
import fakeMenu from './functions/fakeMenu'
import Plat from '../components/Plat/Plat'
import ViewCommande from '../components/ViewCommande/ViewCommande'



export default function commande({data,menu}) {
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

             

            setCommandList([...commandWithoutExistingPlat,platWithNewQty])
            
        }else{        

            setCommandList([...commandeList,{...addPlat,qty:1}])
        }
    }


    const removePlat = removePlat => {


        if(removePlat.qty === 1){
            console.log('qty =1')
            setCommandList(commandeList.filter(plat => plat.name !== removePlat.name))
        }else{
            console.log('qty =2..')
            const newPlatQty = {...removePlat,qty:removePlat.qty - 1}
           const listWithoutRemovePlat = commandeList.filter(plat => plat.name !== removePlat.name)
            setCommandList([...listWithoutRemovePlat,newPlatQty])
        }
        
          

           
    }


    return (
        <div>
            <div className="commande-entete-section">
    <h4>Table numero {query.table || '0'}</h4>

    <h4>Total : {total} $</h4>
            </div>

            <div>
                <h4>Votre commande</h4>
                <ViewCommande commandList={commandeList} addPlat={addPlat} removePlat={removePlat}/>
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
        </div>
    )
}

export async function getServerSideProps(context){
    const {query} = context

    return{
        props:{
            data:query,
            menu:fakeMenu()
        }
    }
}


