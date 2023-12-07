let container = document.querySelector(".container");
let btn = document.querySelector(".btn")
let box = document.querySelector(".box")
let scorediv = document.querySelector(".score")
let valu = 0;
var score = 0
let backgroundaudio = document.querySelector(".backgroundaudio");
let questions = [{question:"what is the capital of pakistan",options:["islamabad","karachi","lahore","multan"],answer:"islamabad"},{question:"what is the capital of India",options:["islamabad","karachi","lahore","delhi"],answer:"delhi"},{question:"Who is the father of our nation",options:["Quaid e Azam M.Ali Jinnah","Liaquat Ali khan","Allama Iqbal","M.Ali Johar"],answer:"Quaid e Azam M.Ali Jinnah"},{question:"How many colors are there in a rainbow",options:["six","seven","eight","nine"],answer:"seven"},{question:"Which animal is known as the 'King of the Jungle'",options:["Lion","Tiger","Elephant","Monkey"],answer:"Lion"},{question:"What is the name of the planet we live on",options:["Earth","Jupitor","Mars","Venus"],answer:"Earth"},{question:"What season comes after summer",options:["Winter","Autumn","Spring","Rainy"],answer:"Winter"},{question:"What is the color of the Sun",options:["Yellow","Red","Green","White"],answer:"Yellow"},{question:"What is the tallest animal on Earth",options:["Giraffe","rat","Elephant","Monkey"],answer:"Giraffe"},{question:"What do you use to brush your teeth",options:["Finger","Clothes","Swatches","Toothbrush"],answer:"Toothbrush"}];
let timer;
let intervalReference;
let time = document.querySelector(".time")
let containerr = document.querySelector(".containerr");
let scorep = document.querySelector(".scorep")
let backgroundAudioPlayed = false;


// document.addEventListener("click", function () {
//     playBackgroundAudioOnce();
// });
// function playBackgroundAudioOnce() {
//     if (!backgroundAudioPlayed) {
//       backgroundaudio.play();
//       backgroundAudioPlayed = true;
//     }
//   }
  
function timemanage(){
    timer = 20;
    if(timer>1){

        intervalReference = setInterval(()=>{
            timer--
            time.innerHTML = timer

            if (timer === 0) {
                clearInterval(intervalReference);

                containerr.style.display = "none"
                scorediv.style.display = "block"
                scorediv.style.height = "100vh";
                scorediv.style.width = "100vw";
                scorediv.innerHTML = `you have won $ ${score} Dollars` 
                time.style.display = "none"

              }
        },1000)
    }
  

}
window.onload = function() {
    // playBackgroundAudioOnce();

    onreloadfunction();
  };

  function onreloadfunction(){
   
    // backgroundaudio.play();
    timemanage()
  }




function quizdata(){


    let data = `<h1 class="questionheading">${questions[valu].question}</h1>
    <div class="buttons">
    <button class="optionone">${questions[valu].options[0]}</button>
    <button class="optiontwo">${questions[valu].options[1]}</button>
    <button class="optionthree">${questions[valu].options[2]}</button>
    <button class="optionfour">${questions[valu].options[3]}</button>
    </div>
    `

    container.innerHTML = data;

    clearInterval(intervalReference);
    timemanage()
}
container.addEventListener("click",function(e){

    const jsonData =[ 
        "optionone",
        "optiontwo",
        "optionthree",
        "optionfour"
    ]
    let selected = e.target.classList[0];
    let findindex = jsonData.indexOf(selected)
    let newArray = jsonData.slice(0, findindex).concat(jsonData.slice(findindex+1));
    newArray.forEach((data)=>{
        let disabledkarrooo = document.querySelector(`.${data}`)
        disabledkarrooo.disabled = true;
    })



    if(e.target.textContent === questions[valu].answer){
        document.querySelector(".btn").style.display = "block";
        setTimeout(()=>{
            e.target.style.backgroundColor= "green"
            score += 100000
            highlightPrize()
        },1000)
    }
    else{
        setTimeout(()=>{

            e.target.style.backgroundColor= "red"
        },300)
        setTimeout(()=>{
            containerr.style.display = "none"
            scorediv.style.display = "block"
            scorediv.style.height = "100vh";
            scorediv.style.width = "100vw";
            scorep.innerHTML = `you have won $ ${score} Dollars` 
            // tim  e.style.display = "none"
            clearInterval(intervalReference);
        },1000)  
    }
})
function handlenextbtn(){
    

    if(valu < questions.length){
        quizdata()
    }
}
btn.addEventListener("click",()=>{
    valu++
           if(valu < questions.length){
handlenextbtn()
           }
           else{
            containerr.style.display = "none"
        scorediv.style.display = "block"
        scorediv.style.height = "100vh";
        scorediv.style.width = "100vw";
         scorep.innerHTML = `you have won $ ${score} Dollars` 
        // time.style.display = "none"
        clearInterval(intervalReference);
           }

})


// // ==============practise=============

// container.addEventListener("click",function(e){

// console.log(e.target);

// })

function highlightPrize() {
    const prizeList = document.querySelectorAll('.pricelist p');
    prizeList.forEach((element)=>{
        if(+element.textContent === score){
            
        element.classList.add('highlight');
        element.textContent = "$ " +element.textContent
        }
        else{
            element.classList.remove('highlight');
 
        }
    })
}
highlightPrize()