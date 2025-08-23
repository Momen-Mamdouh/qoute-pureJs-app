import {getRandomNumber, checkRandomNumber} from '../utils/utils.js'


export function newQoute(qoutes, randomNumber){
        let generatedRN = getRandomNumber(qoutes, 0);
        checkRandomNumber(randomNumber, generatedRN);
        randomNumber = generatedRN
        displayQoute(qoutes[randomNumber]);      
}


export function displayQoute(qoute){
    document.getElementById('qoute-output').textContent = `${qoute.q}`;
    document.getElementById('author-output').textContent = `${qoute.a}` ;
};


export function checkPageToListen(qouteBtn, currentPage, handleQouteClick){
    if (qouteBtn) {
        if (currentPage !== '' | currentPage !== 'home') {
            qouteBtn.addEventListener("click", handleQouteClick);
        } 
        else {
            qouteBtn.removeEventListener("click", handleQouteClick);
        }
    }
}

export  function  blurTransationEffect(){
    document.body.style.filter = "blur(10px)";
    setTimeout(()=>{
       document.body.style.filter = "blur(0px)";
    }, 150); 
};


export function showLoader(loader, quoteContainer){
        loader.style.display = "flex";  
        quoteContainer.style.display = "none"; 
};

export function hideLoader(loader, quoteContainer){
    loader.style.display = "none";   
    quoteContainer.style.display = "block"; 
};

