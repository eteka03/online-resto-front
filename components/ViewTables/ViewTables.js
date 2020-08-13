import React,{useState,useEffect, useCallback} from 'react'
import Axios from 'axios'

export default function ViewTables() {

    const [allTable,setAllTable]= useState([])


    useEffect(()=>{
        refresh()
    },[])

    useEffect(()=>{

    },[allTable])



    const refresh = ()=>{
        Axios.get('/api/tables')
            .then(data => {
                if(data.data.tables){
                    setAllTable(data.data.tables)
                }
            })
            .catch(error => {
                
            })
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        
                            <th>
                                Numero
                            </th>
                            <th>
                                status
                            </th>
                            <th>
                                commande
                            </th>
                        
                    </tr>
                </thead>
                <tbody>
                    {allTable.map(table => {
                        return(
                        <tr key={table.id}>
                            <td>{table.id}</td>
                        <td>{table.status}</td>
                        <td>{table.commande}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>

            <button onClick={refresh}>Rafraichir</button>
        </div>
    )
}
