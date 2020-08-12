import React, { useEffect } from 'react'
import {orderBy} from 'lodash'
export default function ViewCommande({commandList,addPlat,removePlat}) {


    const sortCommand = orderBy(commandList,['name'],"asc")
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prix Unitaire $</th>
                    <th>quantité</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {sortCommand.map(plat=>{
                        return(
                        <tr key={plat.name}>
                            <td>{plat.name}</td>
                            <td>{plat.price}</td>
                            <td>{plat.qty}</td>
                            <td><button onClick={()=>addPlat(plat)}>+</button><span> </span> <button onClick={()=>removePlat(plat)}>-</button></td>
                        </tr>
                        )
                    })}
                </tbody>
               
                   
                    

            </table>
        </div>
    )
}
