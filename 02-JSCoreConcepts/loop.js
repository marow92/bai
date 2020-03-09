/*
console.log(2);
console.log(6);
console.log(10);
console.log(14);
*/
const loopWhile = () => {
    let a = 2
    while(a < 14){
        console.log(a)
        a+=4
    }
}

loopWhile()

const loopFor = () => {
    for(let i = 2; i < 15; i+=4) {
    console.log(i);
	}
}

loopFor()