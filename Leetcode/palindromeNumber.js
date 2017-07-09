var isPalindrome = function(x) {
    let indexI; 
    let indexII; 
    let partI; 
    let partII; 
    let mid = x.length / 2; 
    
    if (x.length % 2 == 0) {
        indexI = mid - 0.5; 
        indexII = mid + 0.5; 
        
        partI = x.slice(0, indexI); 
        partII = x.slice(indexII, x.length); 
    } 
    
    if (x.length % 2 !== 0) {
        partI = x.slice(0, mid); 
        partII = x.slice(mid, x.length - 1); 
    }
    
    
    
	//finish 
};
