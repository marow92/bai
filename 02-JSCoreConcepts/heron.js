// boki trójkąta
a = 3;
b = 4;
c = 5;
h = 7

const p = (a, b, c) => (a + b + c) / 2

const countTriangleArea = (a, b, c) => {
    const halfOfCircuit = p(a,b,c)
    return Math.sqrt(halfOfCircuit * (halfOfCircuit-a) * (halfOfCircuit-b) * (halfOfCircuit-c))
}

const printTriangleArea = (a,b,c) => `Pole trójkąta o bokach ${a}, ${b} oraz ${c} wynosi ${countTriangleArea(a,b,c)}`
console.log(printTriangleArea);