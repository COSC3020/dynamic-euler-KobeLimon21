function bottomupdp(n) {
    if (n === 0) {
        return 1; // base case for 0 
    }

    let fact = 1; // set factorial to 1 for first term 
    let e = 1; // first term 

    for (let i = 1; i <= n; i++) { // loop till last term 
        fact = fact * i;  // multiply to get next factorial
        e += 1.0 / fact;   // gets next term and adds it to e 
    }

    return e;
}

