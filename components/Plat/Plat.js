import React,{useState,useEffect} from 'react'
import { Row } from 'reactstrap'

export default function Plat({plat,addPlat,removePLat,name,price,description,}) {
     const [Qty, setQty] = useState(0)

     
    return (
        <li>
            <Row xs={4} sm={4} md={4}>
    <div>{name}</div>
    <div>{description}</div>
    <div>{price}</div>
    <div><button onClick={()=>addPlat(plat)}>Add</button></div>
            </Row>
        </li>
    )
}
