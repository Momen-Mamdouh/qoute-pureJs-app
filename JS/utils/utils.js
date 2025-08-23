

export function getRandomNumber(qoutes, minNumber){
    return Math. floor( Math.random()* (qoutes.length-1 - minNumber + 1) + minNumber);
};

export function checkRandomNumber(randomNumber ,generatedNumber){
    while(randomNumber === generatedNumber){
            randomNumber = getRandomNumber(0);
    };
}

