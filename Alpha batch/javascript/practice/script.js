const array = [
  ["iron man ", "superman", "thor"],
  ["wonder women", "batman ", "flash"],
];
// for(arry of array){
//     console.log(arry);
//     for(aa of arry){
//         console.log(aa)
//     }
// }

// for(let i=0 ;i<array.length;i++){
//     console.log(`arry length ${i} ` ,array[i])
//     for(let j=0;j<array[i].length;j++){
//         console.log(array[i][j]);
//     }
// }

// let num = [1,2,3,4,5,6,2,3];
// console.log(num.indexOf(2));

// let num =233544;
// let n = num.toString()

// console.log(n.length)

// promises
// const url =
//   "https://api-football-v1.p.rapidapi.com/v2/odds/league/865927/bookmaker/5?page=2";

// const user = fetch(url);
// console.log(user);

// user.then((data) => {
//   console.log(data);
// });

// const cart = ["shoes", "Tshirt ", "Pants "];
// let promise = createorder(cart);

// promise
//   .then(function (orderid) {
//     console.log(orderid);
//     return orderid;
//   })
//   .catch(function (err) {
//     console.log(err);
//   })

//   .then(function (orderid) {
//     return porocedtopayment(orderid);
//   })

//   .then(function (payment) {
//     console.log(payment);
//     return payment;
//   })
//   .then(function (payment) {
//     return showordersummary(payment);
//   })

//   .then(function (summary) {
//         console.log(summary)
//     return summary;
//   })
//   .then(function (summary1) {
//      return updatevlete(summary1) ;
//   })
//   .then(function(value){
//     console.log(value)
//   })
//  .catch(function (err1) {
//     console.log(err1);
//   });
// // creating promise

// function createorder(cart) {
//   let pr = new Promise(function (resolve, reject) {
//     if (!validatecart(cart)) {
//       const err = new Error("Cart is empty");
//       reject(err);
//     }
//     let orderid = "7976";
//     setTimeout(() => {
//       resolve(orderid);
//     }, 3000);
//   });
//   return pr;
// }

// function validatecart(cart) {
//   if (cart.length > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function porocedtopayment(orderid) {
//   return new Promise(function (resolve, reject) {
//     resolve(`payment is Sussesfullof your order ${orderid} `);
//   });
// }

// function showordersummary(payment) {
//   return new Promise(function (resolve, reject) {
//     if (payment) {
//       resolve("Showing Item");
//     } else {
//       let err = new Error("Payment not done");
//       reject(err);
//     }
//   });
// }

// function updatevlete(summary) {
//   return new Promise(function (resolve , reject) {
//     if (summary) {
//       resolve(
//         (`you have some  that why walle tis updated`)
//       );
//     }
//     else {
//         let err1 = new Error("summary is not comming");
//         reject( err1);

       
//     }
//   });
// }



// async await

const url =
  "https://api-football-v1.p.rapidapi.com/v2/odds/league/865927/bookmaker/5?page=2";

  // const data= new Promise((resolve , reject)=>{
  //   setTimeout(()=>{
  //     resolve( fetch(url))
  //   },5000)
   
  // })  


 async function getdata(){
     let data=  await fetch(url);
     console.log(data);
     let data1= await data.json();
     console.log(data1)
  }

  getdata();
