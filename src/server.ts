console.log('Loading from TYPESCRIPT')


// fibonacci series with typescript

const fibonacci = (n: number): number => {
    if (n <= 1) {
        return 1
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}


console.log(fibonacci(10))