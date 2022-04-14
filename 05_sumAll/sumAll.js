const sumAll = function(num1, num2) {

    let num = 0;

    if(typeof num1 === typeof num2){
        if(num1 > 0 && num2 > 0){
            if(num1 > num2){
                for(let i=num1; i>=num2; i--){
                    num = num + i
                }
                return num
            } else {
                for(let i=num1; i<=num2; i++){
                    num = num + i
                }
                return num
            }
        }
    }
    return 'ERROR'
};

// Do not edit below this line
module.exports = sumAll;
