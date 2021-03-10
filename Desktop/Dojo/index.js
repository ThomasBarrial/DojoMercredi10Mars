fuuunction fizzbuzz() {
    const solution = [];
    for(let i = 0; i< 101 ; i++){ 
        if (i === 0) {
            solution[i] = '0'
        } else if(i% 3 === 0 && i % 5 === 0){
            solution[i] = 'fizzbuzz'
        }
        else if(i% 5 === 0) {     
            solution[i] = 'buzz'
        } else if(i % 3 === 0 ) {
            solution[i] = 'fizz'
        }  
        else{
            solution[i]= i.toString()
        }
    }
    return solution 
}
console.log("la solution est" + fizzbuzz());