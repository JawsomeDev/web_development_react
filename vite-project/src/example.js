// // JavaScript 복습 및 React 적용 문법 # 1

// let a = 1;
// console.log(a);

// // 지역 변수 / 전역 변수 개념
// let count = 10;
// if(count > 5){
//   const total = count * 2;
//   console.log(total);
// }

// // console.log(total); // {} 범위를 벗어났기 때문에 오류가 발생함.

// // const가 객체 / 배열

// const myObj = {foo:3};
// console.log(myObj.foo);
// myObj.foo = 5;
// console.log(myObj.foo);

// /**
//  * const가 상수이긴 한데, 객체 또는 배열인 경우 내부의 속성이나 요소를 업데이트 할 수 있습니다.
//  */

// // 화살표 함수

// // JS 상에서 함수를 정의하는 방법 # 1
// function multiply(x) {
//   return x * 2;
// }
// console.log(multiply(2));

// // 이상의 코드를 화살표 함수를 적용했을 때는
// x => x * 2;

// const calc = x => x * 2;
// console.log(calc(3)); // 6 출력

// // argument가 두 개 이상인 경우는 ()로 묶어줘야 합니다.

// const calcSum = (x, y) => x + y;
// console.log(calcSum(2,3)); // 5 출력

// // (화살표) 함수 본문이 return 값인 경우 명시할 필요가 없습니다(이상에서 볼 수 있듯이), 그런데 함수 본문{}이 여러 줄에 걸칠 경우에는 중괄호를 명시해줘야만 합니다.

// const calcMulti = (x, y) => {
//   console.log('곱셈 결과는 다음과 같습니다.')
//   return x * y;
// }

// console.log(calcMulti(5, 6)); // 30 출력

// // 함수에 파라미터가 없다면 빈 괄호로 작성해야 합니다.
// const sayHello = () => console.log("안녕하세요");

// sayHello();