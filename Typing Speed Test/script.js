const setOfWords = ["A bird in the hand is worth two in the bush.", "Caught between a rock and a hard place.", "Closing the barn door after the horse escapes.", "Do I look like a turnip that just fell off the turnip truck?", "Don't count your chickens before they hatch."];

const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let statTime, endTime;

const playGame = () => {
    let randomNumber = Math.floor(Math.random() * setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    statTime = date.getTime();
    btn.innerText = "Done";
}
const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - statTime)/1000);
    console.log(totalTime);

    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount / totalTime)*60);

    let finalMsg = "You typed total at " + speed + " words per minutes ";

    finalMsg += compareWords(msg.innerText, totalStr);

    msg.innerText = finalMsg;
}
const compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    words1.forEach(function (item, index){
        if(item == words2[index]){
            cnt++;
        }
    })
    let errorwords = (words1.length - cnt);
    return (cnt + " correct out of "+ words1.length + "words and the total number of error are "+ errorwords + ".");

}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    return response;
}

btn.addEventListener('click', function () {
    if (this.innerText == 'Start') {
        typeWords.disabled = false;
        playGame();
    }
    else if (this.innerText == "Done") {
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})