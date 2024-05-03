function generatebalancedParanthesis(n){
	const res = [];
  function backtractParanthesis(s='', left=0, right =0, l2=0,r2=0){
  	if(s.length === 4*n){
    res.push(s);
    return
    }
    
    if(left<n){
    backtractParanthesis((s+'('), left+1, right, l2, r2);
    }
    if(right<left){
    backtractParanthesis((s+')'), left, right+1, l2,r2);
    }
    
     if(l2<n){
    backtractParanthesis((s+'['), left, right, l2+1, r2);
    }
    if(r2<l2){
    backtractParanthesis((s+']'), left, right,l2, r2+1 );
    }
  }
  
  backtractParanthesis();
  return res;
}

const n=1;
console.log(generatebalancedParanthesis(n));