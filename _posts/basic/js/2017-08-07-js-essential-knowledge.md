---
layout: posts
title:  "Javascript 인터뷰 5가지 필수 지식"
excerpt:  "Javascript 인터뷰 5가지 필수 지식"
search: true
categories:
- javascript 
last_modified_at: 2018-08-07T08:06:00-05:00
---
>Programming is **如切如磋 如琢如磨**

## 5 Typical Javascript
Base on this : [5 Typical JavaScript Interview Exercises](https://www.sitepoint.com/5-typical-javascript-interview-exercises/)

* * *
### Question 1 - Scope
- 콘솔에 어떻게 프린트 될까?
    ```js
    (function() {
       var a = b = 5;
    })();

    console.log(b);

    // 실행결과
    5
    ```

- 왜 5가 찍혔냐하면 a는 var로 선언되어 있어서 지역변수(local variable of the function)로 선언되어 있고
b는 Global Scope에 할당되어 있기 때문이다.
- Scope에 대한 이해 : [JavaScript : Scope 이해](http://www.nextree.co.kr/p7363/)
- 내용 핵심 : JavaScript의 유효범위를 알아야 하는 이유에서 언급했듯 JavaScript의 유효범위는 다른 프로그래밍언어와 다른 개념을 갖습니다. JavaScript 유효범위만의 특징을 크게 분류하여 나열하면 다음과 같습니다.
- 함수 단위의 유효범위 : 함수 구문 안에서 정의된 지역변수는 구문 밖에서도 참조 가능
    ```js
    (function(){
        if(true){
            var a = 5;
        }
        console.log(a);
    })();
    // 실행결과
    5
    ```
- 변수명 중복 허용
    ```js
    var a = 5;
    (function(){
        if(true){
            var a = 6;
        }
    })();
    console.log(a);
    // 실행결과
    6
    ```
- var 키워드의 생략
    ```js
    (function(){
        if(true){
            a = 6;
        }
    })();
    ```
- 렉시컬 특성
    ```js
    function f1(){
        var a= 10;
        f2();
    }
    function f2(){
        return a;
    }
    f1();

    //실행결과
    /*
    Uncaught Reference Error
    : a is not defined
    */
    ```
- Closure, Scope Chain 참고 : [Javascript의 함수와 스코프 체인(Scope Chain)](http://blog.naver.com/PostView.nhn?blogId=jjoommnn&logNo=130149113595)

- 그러면 만약 이렇게 코드를 작성한다면 console 에는 어떻게 찍힐까?
    ```js
    (function(){
        "use strict";
        var a = window.b = 5;
    })();

    console.log(b);
    ```

    ```js
    // 실행결과
    /*
    Uncaught Reference Error
    : b is not defined
    */
    ```
- 이렇게 되는 이유는 "use strict"; 때문이다. : 자바 스크립트 코드에서 발생할 수 있는 실수들을 잡아 준다.
- use strict의 이해 : [JavaScript’s Strict Mode and Why You Should Use It](http://cjihrig.com/blog/javascripts-strict-mode-and-why-you-should-use-it/)<br>
- 차라리 몇가지 테스트 해보면 더 이해가 빠를지도 [w3school - use strict](https://www.w3schools.com/js/js_strict.asp)

* * *
### Question 2 - Create “native” methods
- native Method의 활용 및 pototype의 이해
- String Object에 repeatify function을 정의하라. 출력은 hellohellohello가 되어야 함.
    ```js
    console.log('hello'.repeatify(3));
    ```
    ```js
    String.prototype.repeatify = String.prototype.repeatify || function(times){
        var str = "";
        for(var i = 0 ; i < times ; i++){
            str += this;
        }
        return str;
    };
    ```
- javascript prototype의 이해 : [JavaScript : 프로토타입(prototype) 이해](http://www.nextree.co.kr/p7323/)

* * *
### Question 3 - Hoisting
- Hoisting
    ```js
    function test() {
       console.log(a);
       console.log(foo());

       var a = 1;
       function foo() {
          return 2;
       }
    }

    test();
    // 실행결과
    /*
    a= undefined
    2
    */
    ```
- 실행결과 위와 동일
    ```js
    function test() {
    var a;
    function foo() {
       return 2;
    }

    console.log(a);
    console.log(foo());

    a = 1;
    }
    test();
    ```
Question 1의 Scope에 대한 이해의 링크를 따라가면 Hoisting 에 대한 상세 내용 확인 가능

* * *
### Question 4 - How this works in JavaScript
- Javascript에서 This는 어떻게 작동할까?
    ```js
    var fullname = 'John Doe';
    var obj = {
       fullname: 'Colin Ihrig',
       prop: {
          fullname: 'Aurelio De Rosa',
          getFullname: function() {
             return this.fullname;
          }
       }
    };

    console.log(obj.prop.getFullname());

    var test = obj.prop.getFullname;

    console.log(test());

    // 실행결과
    /*
    Aurelio De Rosa
    John Doe
    */
    ```

* * *
### 참고로 추천할 다른 글
- 정규표현식의 이해 : [http://www.nextree.co.kr/p4327/](http://www.nextree.co.kr/p4327/)
    - ex) 자바스크립트의 이런 것들이(var reg_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;)을 설명함

