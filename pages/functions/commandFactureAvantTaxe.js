import { toNumber } from "lodash"

export default function commandFactureAvantTaxe(list){

   

  const FacturAvantTaxe = list.reduce((total, plat)=>{

        const totalForOnePlate = toNumber(plat.qty) * toNumber(plat.price)

        return total+totalForOnePlate
    },0)

    console.log(FacturAvantTaxe)

    return FacturAvantTaxe

} 