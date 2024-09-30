// const age = 62;
// const price = 500;
// if (age <= 12) {
//   console.log("You can eat for FREE");
// } else if (age >= 60) {
//   // 50% Discount
//   const discount = (price * 50) / 100;
//   const payAmount = price - discount;
//   console.log(payAmount);
// } else if (age >= 50) {
//   // 25% Discount
//   const discount = (price * 25) / 100;
//   const payAmount = price - discount;
//   console.log(payAmount);
// } else if (age >= 40) {
//   // 10% Discount
//   const discount = (price * 10) / 100;
//   const payAmount = price - discount;
//   console.log(payAmount);
// } else {
//   console.log(price);
// }


const age= 67;
const price= 500;
if(age <= 12){
  console.log('you can eat for free');
}
else if (age >= 60){
  // 50% Discount
  const discount = (price * 50) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
}
else if(age >= 50){
  // 40% Discount
  const discount = (price * 40) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
}
else{
  console.log(price);
}