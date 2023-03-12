function isPrime(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            count++;
        }
    }
    if (count == 2) {
        console.log("is Prime Number");
    }
    else {
        console.log("is Not Prime Number");
    }
}

isPrime(8);