## OOP(Object Oriented Programming)✨

a programming paradigm based on the concept of "objects" which can contain data and code.

**_Imperative and Procedural Programming_** 💩

![Imperative and Procedural Programming](https://user-images.githubusercontent.com/77663233/105565711-8d64a800-5d6b-11eb-9320-0f3d98e4348d.png)

1. 함수와 데이터가 서로 얽혀있다 보니 하나를 수정하기 위해서는 전체적인 어플리케이션이 어떻게 돌아가는지 알고 있어야 한다.
2. 한눈에 이해하기가 매우 어렵다.
3. 유지보수 / 확장성이 좋지 않다.

**_Object Oriented Programming_** ✨

![Object Oriented Programming](https://user-images.githubusercontent.com/77663233/105565662-41b1fe80-5d6b-11eb-8c23-17125803bef3.png)

1. 프로그램을 객체로 정의해서 객체들끼리 서로 의사소통하도록 디자인하고 코딩해나간다.
2. 한곳에서 문제가 생긴다면 관련 있는 오브젝트만 이해하고 변경하면 된다.
3. 여러 번 반복되는 것이 있다면 관련된 오브젝트를 재사용 할 수 있다.
4. 새로운 무언가가 필요하다면 새로운 객체를 만들면 되므로 확장성도 좋다.
5. 생산성, 높은 퀄리티, 빠른 개발 속도를 제공한다.

**_OOP PRINCIPLES_** 🤡

1. Encapsulation(캡슐화)<br>
   관련있는 데이터와 함수를 한 객체안에 담아두는 것을 의미한다. 그리고 외부에서 사용되지 않는 데이터는 객체안에 잘 숨겨놓아야 한다. 예를 들어보자.
   <br>

   만약 고양이를 객체로 만든다고 생각해보자. 고양이의 내부 state(hungry, full, happy, tired)를 외부에서 접근해서 강제로 바꿀 수는 없다. 그러므로 이것들은 고양이라는 내부 객체에 잘 숨겨야 한다.
   <div>
    <img src="https://user-images.githubusercontent.com/77663233/105566123-d584ca00-5d6d-11eb-9393-946edbc11b52.png" width="300px" height="200px">
   </div>
   <br>
   하지만 외부에서 play, feed와 같은 외부 행동(외부 function)들로 고양이의 state를 바꿔줄 수 있다.
   <div>
    <img src="https://user-images.githubusercontent.com/77663233/105566153-f0573e80-5d6d-11eb-9212-88828d383c15.png" width="300px" height="200px">
   </div>
   <br>

2. Abstraction(추상성)<br>
   Encapsulation과 밀접한 연관이 있다. 내부의 복잡한 기능을 다 이해하지 않고 외부에서 간단한 인터페이스를 통해서 쓸 수 있는 것을 말한다. 예를 들어 커피머신의 내부 구현을 몰라도 외부에 나와 있는 버튼(외부에서만 보이는 interface(function)) 하나만 눌러도 커피를 만들 수 있다.
   <div>
    <img src="https://user-images.githubusercontent.com/77663233/105566478-d3236f80-5d6f-11eb-96f4-97bde0654197.png" width="100px" height="100px">
   </div>
   <br>
3. Inheritance(상속)<br>
   Inheritance는 잘 만들어진 커피머신이 있다면 거기서 필요한 기능들을 더해서 새로운 커피머신을 만드는 것을 의미한다.
   <div>
    <img src="https://user-images.githubusercontent.com/77663233/105566663-bf2c3d80-5d70-11eb-8158-83ba894f9022.png" width="400px" height="200px">
   </div>
   <br>

   상속 관계를 `IS-A 관계`라고 부르기도 한다. 자식 클래스는 곧 부모 클래스이기 때문이다. 부모는 `parent`, `super`, `base`라고 부르고 자식은 `child`, `sub`, `derived`라고 부른다.
   <div>
    <img src="https://user-images.githubusercontent.com/77663233/105566802-7923a980-5d71-11eb-8962-8269b9133f26.png" width="400px" height="200px">
   </div>
   <div>
    <img src="https://user-images.githubusercontent.com/77663233/105566941-3910f680-5d72-11eb-8d7c-69e0ac1a4bb1.png" width="400px" height="200px">
   </div>
   <div>
    <img src="https://user-images.githubusercontent.com/77663233/105567016-b0df2100-5d72-11eb-87cf-712d1dc31867.png" width="400px" height="200px">
   </div>
   <br>

4. Polymorphism(다형성)<br>
   poly는 `many`, morphism는 `form`을 의미하고 `다양한 형태`라고 생각하면 된다. 예를 들어 상속을 통해 만들어진 것들의 종류에 상관없이 부모 클래스(coffee machine, animal)의 메서드(공통된 메서드 ex) makeCoffee, makeSound)에 접근할 수 있다.

**_상속의 문제점 및 해결 방법_** 💫

1. 문제점

   - 부모 클래스가 바뀌게 되면 상속된 모든 자식 클래스에 영향을 미친다.
   - Typescript에서는 한가지 이상의 클래스를 상속할 수 없다.
      <div>
         <img src="https://user-images.githubusercontent.com/77663233/105621735-1c49f100-5e4e-11eb-8dbe-f61a9f477cab.png" width="400px" height="200px">
      </div>

2. 해결방법
   - `Composition`을 사용한다.
   - 구성요소, 구성이라는 뜻을 지녔다.
   - 필요한 것들을 조립해내가는 것을 말한다.
