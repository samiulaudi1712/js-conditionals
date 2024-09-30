const mark = 2;

if(mark >= 90 && mark <= 100) {
    console.log('A');
}
else if(mark >= 80 && mark < 90) {
    console.log('B');
}
else if(mark >= 70 && mark < 80){
    console.log('C');
}
else if(mark >= 60 && mark < 70){
    console.log('D');
}
 else if (mark >= 0 && mark < 60) {
    console.log('F');
} 
else {
    console.log('Invalid mark');
}
