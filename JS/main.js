
import {getRandomNumber} from './utils/utils.js'
import {checkPageToListen, blurTransationEffect, newQoute} from './utils/domUtils.js'
import {QOUTES} from './data/fixedData.js';
import {randomFetchedQoute} from './api/qouteWithApi.js'



let randomNumber;
const currentPage = (window.location.href).split("/").at(-1);
const qouteBtn =  document.getElementById("qouteBtn");

function handleQouteClick() {
  if (currentPage === 'noApi.html') {
      randomNumber = getRandomNumber(QOUTES, 0);
      blurTransationEffect();
      newQoute(QOUTES, randomNumber);
  }
  else if (currentPage === 'withApi.html') {
        randomNumber = getRandomNumber(QOUTES, 0);
        blurTransationEffect();
        randomFetchedQoute();
  }
}



checkPageToListen(qouteBtn, currentPage, handleQouteClick);


              













   


