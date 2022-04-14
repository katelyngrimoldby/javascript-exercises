const repeatString = function(string, num) {
    let newString = ''

    if(num < 0){
        return newString = 'ERROR';
    }
    for(i=0; i < num; i++){
        newString = newString.concat(string);
    }
    return newString;
};
console.log(repeatString)
// Do not edit below this line
module.exports = repeatString;
