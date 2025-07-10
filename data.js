const { Cars } = require("./Cars");


function getCars() {
    var arr1 = ['Empala','Octavio','Punto','Thar','Continental'];
    var arr2 = ['Ambassador','Skoda','Fiat','Jeep','Lincoln'];
    var arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        var car = new Cars(arr1[i], arr2[i]);
        arr3.push(car);
    }
    return arr3;
}

function getCar(a) {
    var aa = a;
    var obj = null;
    obj = getCars().filter(n => n.name === a);
    return obj;
}


module.exports.modata = {
    getcars:getCars,getcar:getCar
};