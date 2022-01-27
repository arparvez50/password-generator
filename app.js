let pwdSection = document.querySelector('.password-field');
let pwdBox = document.getElementById('pwd');
let copyBtn = document.getElementById('copy-pwd');
let createBtn = document.getElementById('create-pwd');
let modal = document.querySelector('.modal');


// Create the password according to the input of user => easy / medium / hard
createBtn.addEventListener('click', function (e) {
    pwdBox.value = 'helloworld';
    let pwdLevel = document.getElementById('password-type').value;
    if (pwdLevel === 'Easy') {
        let value = easyPassWord();
        pwdBox.value = value;
        setTimeout(function(){
            pwdBox.style.border = '3px solid red';
            pwdBox.style.color = 'red';
        },300)
    } else if (pwdLevel === 'Medium') {
        let value = mediumPassword();
        pwdBox.value = value;
        setTimeout(function(){
            pwdBox.style.border = '3px solid #b67f7f';
            pwdBox.style.color = '#b67f7f';
        },300)
    } else {
        let value = highPassword();
        pwdBox.value = value;
        setTimeout(function(){
            pwdBox.style.border = '3px solid green';
            pwdBox.style.color = 'green';
        },300)
    }
})

// Copy the password if there have any
copyBtn.addEventListener('click',function(e){
    if(pwdBox.value.length == 0){
        alert('Please first generate a password then copy it')
    }else{
        pwdBox.select();
        document.execCommand('copy')
        alertModal();

    }
})

// PassWord Creator Function's array 
const smallCapsWord = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const largeCapsWord = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const caracter = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const allCaracter = [...smallCapsWord, ...largeCapsWord, ...caracter, ...numbers];


// Easy Password creator
function easyPassWord() {
    let str = '';
    for (let i = 0; i < 6; i++) {
        let randomLetter = Math.round((Math.random() * (smallCapsWord.length - 1)));
        let result = smallCapsWord[randomLetter.toString()]
        // let randomLetter = allCaracter[Math.round(Math.random * allCaracter.length)]
        str += result;
    }
    return str;
}

// Medium Password creator
function mediumPassword() {
    let str = '';
    for (let i = 0; i < 2; i++) {
        let randomLetterOne = Math.round(Math.random() * (smallCapsWord.length - 1));
        let randomLetterOneResult = smallCapsWord[randomLetterOne]

        let randomLetterTwo = Math.round(Math.random() * (largeCapsWord.length - 1));
        let randomLetterTwoResult = largeCapsWord[randomLetterTwo];

        let randomLetterThree = Math.round(Math.random() * (numbers.length - 1));
        let randomLetterThreeResult = numbers[randomLetterThree];

        let randomLetterFour = Math.round(Math.random() * (caracter.length - 1));
        let randomLetterFourResult = caracter[randomLetterFour];


        str += randomLetterOneResult;
        str += randomLetterTwoResult;
        str += randomLetterThreeResult;
        str += randomLetterFourResult;
    }
    return str
}


// Secure PassWord creator
function highPassword() {

    let str = '';
    for (let i = 0; i < 2; i++) {
        let randomLetterOne = Math.round(Math.random() * (smallCapsWord.length - 1));
        let randomLetterOneResult = smallCapsWord[randomLetterOne];

        let randomLetterTwo = Math.round(Math.random() * (caracter.length - 1));
        let randomLetterTwoResult = caracter[randomLetterTwo];

        let randomLetterThree = Math.round(Math.random() * (largeCapsWord.length - 1));
        let randomLetterThreeResult = largeCapsWord[randomLetterThree];

        let randomLetterFour = Math.round(Math.random() * (caracter.length - 1));
        let randomLetterFourResult = caracter[randomLetterFour];

        let randomLetterFive = Math.round(Math.random() * (numbers.length - 1));
        let randomLetterFiveResult = numbers[randomLetterFive];

        let randomLetterSix = Math.round(Math.random() * (caracter.length - 1));
        let randomLetterSixResult = caracter[randomLetterSix];

        str += randomLetterOneResult;
        str += randomLetterTwoResult;
        str += randomLetterThreeResult;
        str += randomLetterFourResult;
        str += randomLetterFiveResult;
        str += randomLetterSixResult;
    }
    return str
}




// copied alert modal 

function alertModal(){
 setTimeout(function(){
        modal.style.display = 'inline-block';
    },200)
    setTimeout(function(){
        modal.style.display = 'none';
    },1500)
}


console.log('Vanilla JavaScript Project By Ar parvez')