'use strict'
let favAnim = prompt('Do you like pets? ');
favFood.toLowerCase();
let favFood = prompt('I don`t think we have good burger in Amman! Do you agree?');
favFood.toLowerCase();  
let trvel = prompt('I like traveling, I have visited many countries, would you like to join in my next trip?')
trvel.toLowerCase();
let sport = prompt('Do you do sport often?');
sport.toLowerCase();
let shisha = prompt('I smoke shisha everyday, do you?!');
shisha.toLowerCase

if (favAnim == 'yes'|| favAnim == 'y'){
// console.log('Great I like them too!')
alert('Cool I like them too!');
}
else if(favAnim== 'no'|| favAnim=='n'){
    //console.log('Whats wrong with you?')
    alert('Whats wrong with you?');
    } else{
        console.log('Common you have to answer yes or no!');
            }

switch(favFood){
    case 'yes':
        // console.log('Isn`t that shameful!')
        alert('Isn`t that shameful!');
        break;
    case 'y':
        // console.log('Isn`t that shameful!')
        alert('Isn`t that shameful!');
        break;
    case 'no':
        //console.log('Prove it!');
        alert('Prove it!');
        break;
    case 'n':
        //console.log('Prove it!');
        alert('Prove it!');
        break;
    default:
        //console.log('I think you don`t like burgers!');
        alert('I think you don`t like burgers!')

}

switch(trvel){
    case 'yes':
        //console.log('Awsome, will be lots of fun')
        alert('Awsome, will be lots of fun');
        break;
    case 'y':
        //console.log('Awsome, will be lots of fun')
        alert('Awsome, will be lots of fun');
        break;
    case 'no':
        //console.log('Fine! will send you awsome photos')
        alert('Fine! will send you awsome photos');
        break;
    case 'n':
         //console.log('Fine! will send you awsome photos')
         alert('Fine! will send you awsome photos');
         break;
    default:
        //console.log('You have to do something in your vacation')
        alert('You have to do something in your vacation')


}

if (sport == 'yes'|| sport=='y'){
    //console.log('Awsome, keep it up!')
    alert('Awsome, keep it up!')
}else if(sport=='no'|| sport=='n'){
    //console.log('You are missing a lot')
    alert('You are missing a lot');

}else{
    //console.log('Don`t run away from the answer')
    alert('Don`t run away from the answer')
}

