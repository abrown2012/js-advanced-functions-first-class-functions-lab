// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => {
    return arr.slice(0,2)
}

const returnLastTwoDrivers = (arr) => {
    return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const  createFareMultiplier = (value) => {
    return function(multiplier){
        return value * multiplier
    }
}

const fareDoubler = (fare) => {
    return fare * 2
}

const fareTripler = (fare) => {
    return fare * 3
}

const selectDifferentDrivers = (arrayOfDrivers, fun) =>{
    return fun(arrayOfDrivers)
}