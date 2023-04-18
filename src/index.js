// var var1 = 'aaa';
// console.log(var1);
// var1 = 'bbb';
// console.log(var1);

// var var1 = 'ccc';
// console.log(var1);

// let let1 = 'aaa';
// console.log(let1);

// let let1 = 'bbb';
// console.log(let1);

// オブジェクトで生成しているから変更できる
// const val4 = {
//   name: 'aaa',
//   age: 22,
// };

// val4.name = 'bbb';
// val4.address = 'Otaru';
// console.log(val4);

// const val5 = ['dog', 'cat'];
// val5[2] = 'bird';
// val5.push = 'monkey';
// console.log(val5);

// const name = 'Gota';
// const age = 22; 

// const message1 = '私の名前は' + name + 'です';
// console.log(message1);

// const message2 = `私の名前は${name}です`;
// console.log(message2);

// function func1(str){
//   return str;
// }

// const func1 = function(str){
//   return str;
// }

// console.log(func1('aaa'));

// const func2 = (str) => {
//   return str;
// }
// console.log(func2('bbb'));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 20));


// 分割代入
// const myProfile = {
//   name: 'Gota',
//   age:22,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;
// console.log(message1);

// const { name , age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message2);

// const myProfile = ['Gota', 22];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message4);

// デフォルト値
// const sayHello = (name = 'ゲスト') => {
//   return console.log(`こんにちは${name}さん`);
// };

// sayHello('Gota');
// sayHello();

//スプレッド構文
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => {
//   return console.log(num1 + num2);
// };

// 同じことをしている
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);
// console.log(...arr3);

// スプレッド構文だとコピーを渡すが、arr4 = arr7のような書き方だと参照渡しとなり、コピー元も変えてしまうことになる
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr4[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr = [1,2,3,4,5];
// for(let i=0;i<arr.length;i++){
//   console.log(arr[i]);
// };

// const arr2 = arr.map((num) => {
//   return num;
// })
// console.log(arr2);

// const arr2 = arr.map((num) => console.log(num));

// arr.map((num, i) => {console.log(`${i + 1}番目は${num}です`)});

// const newArr = arr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newArr);

// const newArr = arr.map((num) => {
//   if (num % 2 === 1){
//     return `○`
//   } else {
//     return `×`
//   }
// });

// console.log(newArr);

// const val1 = 1 > 0 ? 'true' : 'false';
// console.log(val1);

// const num = 1300;
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えている' : '許容範囲内'
// }
// console.log(checkSum(60,50));

// ||は左側がfalseなら右側を返す
// const num = null;
// const fee = num || '金額未設定';
// console.log(fee);

// &&は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && '何か設定された';
// console.log(fee2);
