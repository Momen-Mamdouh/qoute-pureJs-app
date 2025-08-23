import {getRandomNumber} from '../utils/utils.js'
import {hideLoader, newQoute, showLoader} from '../utils/domUtils.js'



const loader = document.getElementById("loader");
const quoteContainer = document.getElementById("qoute");
let randomNumber;

const fetchRandomQoute = async ()=>{
    const result = await fetch('/api/quotes.js');
    return await result.json()
};


export const randomFetchedQoute = async () => {
    try {
        showLoader(loader, quoteContainer);

        let localRandomQoutes = localStorage.getItem("qoutes");

        if (localRandomQoutes) {
            localRandomQoutes = JSON.parse(localRandomQoutes);
            randomNumber = getRandomNumber(localRandomQoutes, 0);
            newQoute(localRandomQoutes, randomNumber);
        } else {
            const qoutes = await fetchRandomQoute();
            localStorage.setItem("qoutes", JSON.stringify(qoutes));
            randomNumber = getRandomNumber(qoutes, 0);
            newQoute(qoutes, randomNumber);
        }
    } catch (err) {
        console.error("Error fetching quote:", err);
    } finally {
       hideLoader(loader, quoteContainer);
    }
};


