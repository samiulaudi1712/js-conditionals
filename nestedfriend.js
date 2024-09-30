/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const myNumber = 72;
const friendNumber = 34;
if (myNumber > 80){
    console.log('Friend score');
    if(friendNumber > 80){
        console.log('Go to lunch');
    }
    else{
        if(friendNumber < 80 && friendNumber >=60 ){
            console.log('Good Luck next time');
        }
        else{
            if(friendNumber < 60 && friendNumber >=40){
                console.log('unseen');
            }
            else{
                if(friendNumber < 40){
                    console.log('Block Friend');
                }
            }
        }
    }
}
else{
    if(myNumber < 80){
        console.log('go to home and sleep and act sad');
    }
}
