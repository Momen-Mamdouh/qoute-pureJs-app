
var qoutesArray  = ['Without music, life would be a mistake.', 
                'So many books, so little time.',
                'A room without books is like a body without a soul.', 
                'You only live once, but if you do it right, once is enough.',
                'Be the change that you wish to see in the world.',
                "If you tell the truth, you don't have to remember anything.",
                "A friend is someone who knows all about you and still loves you.",
                "To live is the rarest thing in the world. Most people exist, that is all.",
                'It is better to be hated for what you are than to be loved for what you are not.',
                'We accept the love we think we deserve'


                     ];

var qouteAuthorArray = ['― Friedrich Nietzsche, Twilight of the Idols', '― Frank Zappa', 
                         '― Marcus Tullius Cicero' , '― Mae West','― Mahatma Gandhi', 
                         '― Mark Twain', '― Elbert Hubbard', '― Oscar Wilde',
                        '― Andre Gide, Autumn Leaves',
                        '― Stephen Chbosky, The Perks of Being a Wallflower'
                        ];


var qoutesObjectArray = [];

(function(){
    for(i=0; i< qoutesArray.length; i++){
        var newQoute = {
            qoute: qoutesArray[i],
            author: qouteAuthorArray[i],
        }
        qoutesObjectArray.push(newQoute);
    }
})();


function getRandomNumber(maxNumber, minNumber){
    return Math. floor( Math.random()* (maxNumber - minNumber + 1) + minNumber);
}

var randomArray = [];
var randomNumber = getRandomNumber( qoutesArray.length-1, 0);

function giveQoute(addedQoute, addedAuthor){
    document.getElementById('qoute-output').innerHTML = `
    "${addedQoute}"
    `;
    document.getElementById('author-output').innerHTML = `
    "${addedAuthor}"
    `  ;
}

giveQoute(qoutesArray[randomNumber], qouteAuthorArray[randomNumber])

randomArray.push(randomNumber);


function newQoute(){
        
        var randomNumber = getRandomNumber( qoutesArray.length-1, 0);
        while(randomArray[0] == randomNumber){
                var randomNumber = getRandomNumber( qoutesArray.length-1, 0);
        }

        giveQoute(qoutesArray[randomNumber], qouteAuthorArray[randomNumber])
        randomArray.push(randomNumber);
        randomArray.shift();

            
    }


   


