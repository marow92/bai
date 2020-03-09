title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';

/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/


function printWithoutFormatting() {
    console.log(' dr', name, surname, '\n', 'ul.', street, '\n', zip, city, '\n', country)
}

function printUsingFormatting(){
    console.log(`dr ${name} ${surname}
                ul. ${street}
                ${zip} ${city}
                ${country}`)
}

printWithoutFormatting()
printUsingFormatting()