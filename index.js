// Code your solution in this file!

const returnFirstTwoDrivers = function(){
    let arrayOfDrivers = (['Antonia', 'Nuru', 'Amari', 'Mo'])
    return arrayOfDrivers.slice(0,2)
    }

const returnLastTwoDrivers = function() {
    let driver = (['Antonia', 'Nuru', 'Amari', 'Mo'])
    return driver.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(num){
return function (fareMultiplier) {
    return num * fareMultiplier;
}
}
function fareDoubler(num) {
    const multiplybyTwo = createFareMultiplier(2);
    return multiplybyTwo(num)
    }


function fareTripler(num){
    const multiplyByThree = createFareMultiplier(3);
    return multiplyByThree(num)
}




function selectDifferentDrivers(arrayOfDrivers,returnFirstTwoDrivers){
 return returnFirstTwoDrivers(arrayOfDrivers)
}