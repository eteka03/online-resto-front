export default function isRealNumberAndInteger(n){
    let isNumber = !isNaN(parseFloat(n)) && isFinite(n);

        if(isNumber && 
             (n % 1 === 0) ){
            return true
        }
        else{
            return false
        }
}