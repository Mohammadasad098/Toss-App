const h3 = document.querySelector('h3');
const image = document.querySelector('img');
const image1 = document.querySelector('#image1');
function toss(btn) {
    // console.log("toss" , btn);
    var mathRandom = Math.ceil(Math.random()*2);
    // console.log( mathRandon);
    if(btn === "head" && mathRandom === 1 || btn === "tail" && mathRandom === 2){
        // console.log("you won the toss");
        h3.innerHTML = "You Won The Toss.";
        image1.src = 'img3.png'

    }else{
        // console.log("you lost the toss");
        h3.innerHTML = "You Lost The Toss!";
        image1.src = 'img4.png'
    }
    if(mathRandom === 1){
        image.src = 'img1.png'
    }else{
        image.src = 'img2.png'
    }

    
}