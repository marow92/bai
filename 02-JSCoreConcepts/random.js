const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const fillArray = (n) => {
    let array = []
    while(n != 0){
        array.push(getRandomInteger(1,10))
        n-=1
    }
    return array
}

const print = () => { console.log(fillArray(10)) }

print()