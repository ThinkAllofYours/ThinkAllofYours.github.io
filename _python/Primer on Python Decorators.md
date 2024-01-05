---
layout: single
title: "Python 데코레이터 입문서"
search: true 
excerpt: "python에서 가장 많이 사용하는 데코레이터를 파헤쳐 보자"
categories:
- vim 
last_modified_at: 2024-01-03 
permalink: /python/python-decorator/ 
toc: true
toc_label: "Table of Contents"
toc_icon: "space-shuttle"
toc_sticky: "true"
---
참고한 사이트 : [realpython.com](https://realpython.com/primer-on-python-decorators/#first-class-objects)

# Table of Contents

- [함수(Functions)](#함수)
    - [일급 객체(First-Class Object)](#일급-객체)
    - [내부 함수(Inner Functions)](#내부-함수)
    - [함수에서 함수 반환하기(Returning Functions From Functions)](#함수에서-함수-반환하기)
- [간단한 데코레이터(Simple Decorators)](#간단한-데코레이터)
    - [문법적 설탕!(Syntactic Sugar!)](#문법적-설탕)
    - [데코레이터 재사용하기(Reusing Decorators)](#데코레이터-재사용하기)
    - [데코레이팅된 함수로부터 값 반환하기(Returning Values From Decorated Functions)](#데코레이팅된-함수로부터-값-반환하기)
    - [당신 정체가뭐야?(Who Are You, Really?)](#당신-정체가뭐야)
- [실제 사례 몇 가지(A Few Real World Examples)](#실제-사례-몇-가지)
    - [함수 시간 측정하기(Timing Functions)](#함수-시간-측정하기)
    - [코드 디버깅하기(Debugging Code)](#코드-디버깅하기)
    - [코드 속도 늦추기(Slowing Down Code)](#코드-속도-늦추기)
    - [플러그인 등록하기(Registering Plugins)](#플러그인-등록하기)
    - [사용자가 로그인했는가?(Is the User Logged In?)](#사용자가-로그인했는가)
- [고급 데코레이터(Fancy Decorators)](#고급-데코레이터)
    - [클래스 데코레이팅하기(Decorating Classes)](#클래스-데코레이팅하기)
    - [데코레이터 중첩하기(Nesting Decorators)](#데코레이터-중첩하기)
    - [인자를 가진 데코레이터(Decorators With Arguments)](#인자를-가진-데코레이터)
    - [데코레이터 조합하기(Both Please, But Never Mind the Bread)](#데코레이터-조합하기)
    - [상태를 가진 데코레이터(Stateful Decorators)](#상태를-가진-데코레이터)
    - [데코레이터로서의 클래스(Classes as Decorators)](#데코레이터로서의-클래스)
- [더 많은 실제 사례들(More Real World Examples)](#더-많은-실제-사례들)
    - [코드 속도 늦추기,다시 알아보기(Slowing Down Code, Revisited)](#코드-속도-늦추기-다시-알아보기)
    - [싱글톤 만들기(Creating Singletons)](#싱글톤-만들기)
    - [반환 값 캐싱하기(Caching Return Values)](#반환-값-캐싱하기)
    - [단위에 대한 정보 추가하기(Adding Information About Units)](#단위에-대한-정보-추가하기)
    - [JSON 유효성 검사하기(Validating JSON)](#json-유효성-검사하기)
- [결론(Conclusion)](#결론)
- [추가 읽기(Further Reading)](#추가-읽기)

---

## 함수

### 일급 객체

파이썬에서는 일급 객체가 바로 function이다. 뭐가 자바스크립트랑 비슷하지 않나?   
자바스크립트도 일급 객체가 function이다.   
자바스크립트와 파이썬의 일급객체의 가장 큰 차이는 바로 데코레이터를 지원하느냐 하지 않느냐인데   
파이썬에서는 일급 객체를 가장 적극적으로 사용하는 방법이 데코레이터를 쓰는 방법이다.   
파이썬에서는 함수 내에서 현재 인스턴스에 접근하기 위해 self 키워드를 사용하는데 this 보다 더 명확하다고 생각한다.   
자바스크립트는 기본적으로 비동기적으로 수행되기 때문에 파이썬과 언어의 사용 접근성이 다름    
여기 함수를 인자로 전달하는 간단한 예시이다.

```python
def square(number):
    return number * number


def apply_function(func, value):
    return func(value)


result = apply_function(square, 5)

print(result)  # 출력: 25
```

이렇게 파이썬도 자바스크립트와 마찬가지로 함수를 인자로 전달할 수 있다.

### 내부 함수

파이썬은 함수안에 다른 함수를 정의할 수 있는데 내부 함수의 특징으로는

1. 스코프(Scope)제한 : 내부 함수는 외부 함수의 스코프 내에서만 접근 및 호출이 가능함. 특정 함수 내에서만 사용 가능한 함수가 있다면 필요한 기능을 내부에서 정의함으로
   필요한 기능을 숨기고 전역네임스페이스를 깔끔하게 유지
2. 클로저(Closure)형성 : 내부 함수는 외부 함수의 변수에 접근할 수 있음 (이거 완전 장점 아닌가?) 내부 함수는 외부 함수의 변수에 대한 참조를 유지함
3. 데이터 은닉과 캡슐화 : 내부 함수는 데이터 은닉과 캡슐화에 유용함

아래는 내부 함수의 간단한 예시

```python
def outer_function(text):
    # 외부 함수
    # 여기서 inner_function()을 실행할 수 없다 반드시 아래에서 실행
    def inner_function():
        # 내부 함수
        return text.upper()

    # inner_function()이 선언된 이후만 사용 가능
    result = inner_function()
    return result


print(outer_function("hello"))  # 출력: HELLO
```

### 함수에서 함수 반환하기

파이썬에서 함수에서 함수 반환하기는 고차함수의 개념 중 하나.    
고차 함수란 다음 두 가지 중 하나 이상을 수행하는 함수를 말함

1. 함수를 인자로 받는다.
2. 함수를 결과로 반환한다.

함수에서 다른 함수를 반환하는 기능은 사실 스크립트로 되어 있는 언어에서는 대부분 가능하다.   
당연히 자바스크립트에서도 된다. Java에서는 함수에서 함수를 반환하는건 안되고 람다 표현식과 함수형 인터페이스를 사용하면 된다고 한다.      
아래는 python에서 구현한 함수에서 함수 반환하기이다.

```python
def outer_function(text):
    def inner_function():
        return f"Message: {text}"

    return inner_function


my_func = outer_function("Hello, World!")
print(my_func())  # 출력: Message: Hello, World!
```

똑같은 동작을 하는 코드를 자바에서는 이렇게 표현한다.

```java

@FunctionalInterface
interface StringSupplier {
    String get();
}

public class Main {
    public static void main(String[] args) {
        StringSupplier myFunc = outerFunction("Hello, World!");
        System.out.println(myFunc.get());  // 출력: Message: Hello, World!
    }

    public static StringSupplier outerFunction(String text) {
        return () -> "Message: " + text;
    }
}
```

outerFunction 안에는 get이라는 메소드가 없지만 선언한 후 get()울 출력할 수 있다.   
하지만 역시 불편하다. ~~그래서 나는 파이썬이 좋다~~

## 간단한 데코레이터

**데코레이터의 기본개념**<br>
데코레이터는 함수를 다른 함수로 "감싸는" 방식으로 동작합니다.<br>

```python
def my_decorator(func):
    def wrapper():
        print("something1")
        func()  # 원래 함수 호출
        print("something2")

    return wrapper


def something3():
    print("something3")


result = my_decorator(something3)
print(result())
# 결과
# something1
# something3
# something2
```

이렇게 함수를 인자로 전달 받아 사용할 수 있다.<br>
result를 프린터 하면

```bash
>>> print(result)
<function my_decorator.<locals>.wrapper at 0x10056f420>
```

이렇게 화면이 나오는데 우리가 코딩한 것이 my_decorator 함수안에 wrapper를 반환하기 때문에 wrapper 주소(0x10056f420)가 출력되는 것이다.<br>

### 문법적 설탕

자 간단한 예시로 수행하는 모든 sql문을 일단 print로 출력하고 수행하는 데코레이터 함수를 만들려고 한다면 간단하게 다음과 같이 할 수 있다. <br>

```python
def sql_executor(func):
    def wrapper(sql_query):
        # SQL 문 출력
        print(f"Executing SQL: {sql_query}")
        # 유효성 검사 같은 것들을 할 수 있습니다.
        # 원래 함수 호출
        return func(sql_query)

    return wrapper
```

```python
@sql_executor
def run_sql_query(sql_query):
    # SQL 문을 처리하는 실제 로직
    # 예: 데이터베이스 결과 반환
    # 여기서는 단순히 SQL 문을 반환합니다.
    return sql_query
```

```python
sql = "SELECT * FROM users WHERE id = 1"
result = run_sql_query(sql)
print(f"Result: {result}")
```

sql을 수행한 다음 제대로 수행했는지 terminal창 같은 곳에서 확인하거나 Log를 남기거나 하는 용도로 사용할 수 있다.<br>
이 함수는 **run_sql_query** 함수는 **@sql_executor** 데코레이터에 의해 감싸져 있다.<br>
함수가 호출될 때, **sql_executor** 데코레이터의 **wrapper** 함수가 먼저 실행되어 SQL 문을 출력하고, 그 후에 실제 **run_sql_query**
함수가 실행된다<br>
**@sql_executor** 함수는 위에서 정의했고 그 함수를 이렇게 사용할 수 있는 것이다. **sql_query**이 정확하게 작성되었는지 금지된 sql 문이 들어가지
않았는지 등을 검사할 수 있다.

### 데코레이터 재사용하기

데코레이터 재사용하기(Reusing Decorators) 한 번 정의된 데코레이터를 다양한 함수에 적용하여 코드 중복을 줄이고, 유지보수를 용이하게 한다. 데코레이터를 재사용하는
것은 특히 로깅, 권한 검사, 성능 측정, 트랜잭션 처리와 같은 공통된 작업에 매우 많이 사용되고<br>
python의 Celery같이 동시성 프로그램에서 많이 사용되는 Worker를 실행하는데 필수이다.<br>

**데코레이터 재사용의 장점**

1. 중복 코드 감소: 비슷한 기능이 여러 함수에 필요할 때, 데코레이터를 재사용함으로써 중복 코드를 줄일 수 있음
2. 유지보수 용이: 공통 기능을 수정해야 할 경우, 데코레이터만 수정하면 모든 적용된 함수에 반영됨
3. 가독성 향상: 데코레이터를 사용함으로써 함수의 주요 로직과 부가적인 기능을 분리할 수 있어, 코드의 가독성이 향상됨<br>

**데코레이터 재사용 예시**<br>
**Django에서 로깅 데이터 사용하는 예.**

```python
# settings.py

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
        },
    },
    'loggers': {
        'my_logger': {
            'handlers': ['console'],
            'level': 'INFO',
        },
    },
}
```

**로깅 데코레이터 정의**
@wraps(func) 데코레이터는 원래 함수의 메타데이터(예: 함수 이름)를 보존하는 데 사용된다.

```python
# decorators.py

import logging
from functools import wraps

# Django 설정에서 정의한 로거 이름을 사용하여 로거 인스턴스를 가져온다.
logger = logging.getLogger('my_logger')


def log_decorator(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        logger.info(f"{func.__name__} 함수가 호출되었습니다.")
        return func(*args, **kwargs)

    return wrapper
```

**데코레이터 적용**

```python
# views.py 또는 다른 모듈

from .decorators import log_decorator


@log_decorator
def my_view(request):
    # 뷰 로직
    return HttpResponse("Hello, World!")
```

이 예제에서는 my_view 함수에 log_decorator를 적용했다. 함수가 호출될 때마다, my_logger 로거를 통해 "my_view 함수가 호출되었습니다."라는 로그
메시지가 콘솔에 출력된다.<br>

---
**Note:** *args는 "arguments"의 줄임말로, 함수에 전달되는 가변 개수의 위치 인자를 의미하는데 함수 정의에서 *args를 사용하면, 함수 호출 시 제공되는
위치 인자들을 **튜플**로 묶어서 받을 수 있다. 예를 들어 아래 예시와 같이 사용 가능하다. {: .notice--info}

```python
def add(*args):
    return sum(args)


print(add(1, 2, 3))  # 출력: 6
print(add(1, 2, 3, 4, 5))  # 출력: 15
```

**Note:** **kwargs는 "keyword arguments"의 줄임말로, 함수에 전달되는 가변 개수의 키워드 인자를 의미한다.  **kwargs를 사용하면, 함수 호출
시 제공되는 키워드 인자들을 딕셔너리로 묶어서 받을 수 있다. 예를 들면 아래와 같이 사용 가능하다. {: .notice--info}

```python
def greet(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")


greet(name="John", age=30)  # 출력: name: John, age: 30
```

**Note:** *args와 **kwargs는 함께 사용될 수 있으며, 이 경우 함수는 임의의 수의 위치 인자와 키워드 인자를 모두 받을 수 있다. {:
.notice--info}

```python
def example_func(*args, **kwargs):
    print("args:", args)
    print("kwargs:", kwargs)


example_func(1, 2, 3, a=4, b=5)
# 출력: 
# args: (1, 2, 3)
# kwargs: {'a': 4, 'b': 5}
```

**Note:** 반드시 기억해야 할 것은 *args는 위치 인자들을 튜플로, **kwargs는 키워드 인자들을 딕셔너리로 각각 묶어 처리한다는 것이다.<br>
{: .notice--info}
---

### 데코레이팅된 함수로부터 값 반환하기

데코레이터는 함수에 추가적인 기능을 부여할 수도 있고, 원래 함수의 값을 그대로 반환하거나 변경해서 반환 할 수 있다.

```python
def logging_decorator(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        # 여기서 result를 변경할 수 있다.
        print(f"{func.__name__} 함수의 반환값: {result}")
        return result  # 원래 함수의 반환값 반환

    return wrapper


@logging_decorator
def add(a, b):
    return a + b


sum = add(3, 5)  # 출력 add 함수의 반환값: 8
print(sum)  # 출력: 8
```

### 당신 정체가뭐야

아래를 보라 python shell에서 위에 함수들의 이름을 확인해봤다.

```shell
>>> print
<built-in function print>
>>> print.__name__
'print'
>>> help(print)
Help on built-in function print in module builtins:
...
>>> add
<function logging_decorator.<locals>.wrapper at 0x10056f600>
>>> add.__name__
'wrapper'
>>> help(add)
Help on function wrapper in module __main__:

wrapper(*args, **kwargs)
```

add.__name__의 이름은 사실 add다 wrapper가 아니다.이 문제는 데코레이터 내부에서 정의된 wrapper 함수가 원래 함수 add의 정보(예: 함수 이름,
도움말)를 덮어쓰기 때문에 발생한다.<br>
이 문제는 다음과 같이 수정하면 된다.

```python
from functools import wraps  # 이 라인을 추가


def logging_decorator(func):
    @wraps(func)  # 이 라인을 추가
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        print(f"{func.__name__} 함수의 반환값: {result}")
        return result

    return wrapper


@logging_decorator
def add(a, b):
    return a + b
```

변경한 결과는 아래와 같다.

```shell
>>> add.__name__
'add'
>>> help(add)
# Help on function add in module __main__:
# add(a, b)
```

'functions.wraps' 데코레이터를 사용하면, 데코레이터가 적용된 함수의 `__name__`, `__doc__`, `__module__`등의 속성이 원래 함수의 속성으로
대체된다.<br>
당연히 데코레이터 함수를 사용할때 당연히 원래 함수의 속성을 유지하고 싶기 때문에 일반적으로 거의 모든 데코레이터 함수는 @wraps(func)을 추가한다.<br>

## 실제 사례 몇 가지

자 실제 사례 몇 가지를 보기 전에 데코레이터 함수가 어떻게 동작하는지 기본적으로 생각해보자

```python
from functools import wraps


def decorator(func):
    @wraps(func)
    def wrapper_decorator(*args, **kwargs):
        # 함수 실행전에 뭔가를 한다. 
        result = func(*args, **kwargs)
        # 함수 실행후에 뭔가를 한다.
        return result

    return wrapper_decorator
```

### 함수 시간 측정하기

함수의 실행 시간을 측정하는 데코레이터로 성능 분석에 사용됨, 보통 sql같은 걸 수행할 때 많이 사용된다.

```python
import time
from functools import wraps


def timing_decorator(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"{func.__name__} 실행 시간: {end_time - start_time}초")
        return result

    return wrapper


@timing_decorator
def execute_query(query):
    print(f"Executing SQL query: {query}")
    time.sleep(2)  # 실제 쿼리 대신 2초간 대기하는 가상의 시나리오
    return "query results"


# SQL 쿼리 실행 예시
results = execute_query("SELECT * FROM users")
print(results)
```

**결과**

```python
Executing
SQL
query: SELECT * FROM
users
execute_query
실행
시간: 2.0044610500335693
초
query
results
```

### 코드 디버깅하기

다음은 인자, 함수 이름, 실행 결과를 모두 로깅하는 디버깅 데코레이터의 예시

```python
from functools import wraps


def debugging_decorator(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        args_repr = [repr(a) for a in args]  # args의 표현
        kwargs_repr = [f"{k}={v!r}" for k, v in kwargs.items()]  # kwargs의 표현
        signature = ", ".join(args_repr + kwargs_repr)  # 함수 시그니처
        print(f"호출됨: {func.__name__}({signature})")

        # 실제 함수 실행 및 결과
        result = func(*args, **kwargs)

        print(f"[{func.__name__}] 함수의 반환 값: {result}")
        return result

    return wrapper


@debugging_decorator
def add(a, b):
    return a + b


@debugging_decorator
def say_hello(name="World"):
    return f"Hello, {name}"


# 함수 호출 예시
add(5, 7)
say_hello(name="Alice")

# 출력
# 호출됨: add(5, 7)
# [add] 함수의 반환 값: 12
# 호출됨: say_hello(name='Alice')
# [say_hello] 함수의 반환 값: Hello, Alice
```

### 코드 속도 늦추기

특정 함수의 실행을 일부러 늦추는 데코레이터는, 예를 들어 API 호출의 속도를 제한하거나 웹 페이지와 같은 리소스가 변경되었는지 지속적으로 확인하는 기능의 속도를 저하시켜서
너무 자주 실행되지 않도록 한다.<br>
"코드 속도 늦추기 (Slowing Down Code)"의 개념을 사용하여 특정 시간 이후에 API가 작동하도록 설정하는 예시

```python
import time
from functools import wraps
from datetime import datetime, time as dt_time


def run_after(time_to_run):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            current_time = datetime.now().time()
            if current_time < time_to_run:
                print(f"현재 시간({current_time})은 티켓 예매 시간 ({time_to_run}) 이전입니다.")
            print("티켓 예매 시작")
            return func(*args, **kwargs)

        return wrapper

    return decorator


start_time = dt_time(10, 0)


@run_after(start_time)  # 오전 10시
def book_tickets():
    # 티켓 예매 프로세스
    print("티켓 예매가 완료되었습니다.")

# 출력
# 현재 시간(09:55:00)은 티켓 예매 시간(10:00:00) 이전입니다
# 티켓 예매 시작!
# 티켓 예매가 완료되었습니다.
```

### 플러그인 등록하기

플러그인 등록하기는 동적으로 플러그인을 등록하고 관리 할 수 있다. 확장 가능한 어플리케이션을 구축할 때 유용하고 플러그인 기반의 아키텍처를 지원하는데 필요함

```python
# 플러그인을 저장할 저장소
plugins = {}


# 플러그인 등록 데코레이터
def register_plugin(func):
    plugins[func.__name__] = func
    return func


# 플러그인 예시
@register_plugin
def my_plugin():
    print("My Plugin 실행")


@register_plugin
def another_plugin():
    print("Another Plugin 실행")


# 플러그인 사용
def run_plugins():
    for plugin_name, plugin_func in plugins.items():
        print(f"플러그인 실행: {plugin_name}")
        plugin_func()


# 모든 플러그인 실행
run_plugins()


# 출력
# 플러그인 실행: my_plugin
# My Plugin 실행
# 플러그인 실행: another_plugin
# Another Plugin 실행

def run_specific_plugin(plugin_name):
    if plugin_name in plugins:
        plugins[plugin_name]()
    else:
        print(f"{plugin_name} 플러그인을 찾을 수 없습니다.")


run_specific_plugin('my_plugin')
# 출력
# My Plugin 실행
```

### 사용자가 로그인했는가

아래는 내가 udacity fullstack nanodegree를 딸 때 사용했던 코드다. FLASK를 사용했다.

```python
def requires_auth(permission=""):
    def requires_auth_decorator(f):
        @wraps(f)
        def wrapper(*args, **kwargs):
            token = get_token_auth_header()
            payload = verify_decode_jwt(token)
            check_permissions(permission, payload)
            return f(payload, *args, **kwargs)

        return wrapper

    return requires_auth_decorator
```

이제 보니 'f' 라고 하는것보다는 'func'라고 하는게 더 나았을 것 같다. 상세한 코드는 여기서 확인 할 수 있다.
[깃헙 코드](https://github.com/ThinkAllofYours/coffeeshop/blob/main/backend/src/auth/auth.py)

## 고급 데코레이터

데코레이터의 기능을 더욱 깊이 있고 다양하게 활용하는 방법을 알아보자

### 클래스 데코레이팅하기

클래스 테코레이터는 클래스의 동작을 변경하거나 확장하기 위해 클래스 정의에 적용된다. 클래스 데코레이터는 클래스 자체를 인자로 받아, 수정된 클래스를 반환한다.

```python
def log_class(cls):
    # 원래의 __init__ 메서드를 가져옴
    orig_init = cls.__init__

    # 새로운 __init__ 메서드를 정의
    def new_init(self, *args, **kwargs):
        print(f"{cls.__name__} 인스턴스가 생성되었습니다.")
        orig_init(self, *args, **kwargs)  # 원래의 __init__ 호출

    # 클래스의 __init__을 새로운 __init__으로 교체
    cls.__init__ = new_init
    return cls


# 데코레이터 적용
@log_class
class TestClass:
    def __init__(self, name):
        self.name = name


# 테스트
test_instance = TestClass("Test")
# 출력 
# TestClass 인스턴스가 생성되었습니다.
```

클래스의 모든 메서드에 자동으로 데코레이터를 적용하는 클래스 데코레이터를 만들 수도 있다.

```python
import time


def timing_decorator(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} 실행 시간: {end - start}초")
        return result

    return wrapper


def time_all_methods(cls):
    for key, value in cls.__dict__.items():
        if callable(value):
            setattr(cls, key, timing_decorator(value))
    return cls


@time_all_methods
class MyClass:
    def method1(self):
        time.sleep(1)

    def method2(self):
        time.sleep(2)


my_instance = MyClass()
my_instance.method1()
my_instance.method2()

# 출력
# method1 실행 시간: 1.0051379203796387초
# method2 실행 시간: 2.0029659271240234초
```

**Note:** 위에 이해가 안되는 코드가 있을 것 같아 부가적으로 설명한다. {: .notice--info}
> ```python
for key, value in cls.__dict__.items():
if callable(value):
setattr(cls, key, timing_decorator(value))
> ```
> - `cls.__dict__.items()`<br>
> 'cls'는 데코레이터에 의해 전달된 클래스를 의미한다. 'cls.__dict__'는 클래스의 속성과 메스드에 대한 딕셔너리를 반환한다.
> ```bash
> >>> my_instance.__dict__.
my_instance.__dict__.clear(       my_instance.__dict__.pop(
my_instance.__dict__.copy(        my_instance.__dict__.popitem()
my_instance.__dict__.fromkeys(    my_instance.__dict__.setdefault(
my_instance.__dict__.get(         my_instance.__dict__.update(
my_instance.__dict__.items(       my_instance.__dict__.values(
my_instance.__dict__.keys(
> ```
> items() 메서드는 딕셔너리의 키-값 쌍을 반복 가능한 형태로 반환.<br><br>
> - `if callable(value)`<br>
> value가 호출 가능한 객체(함수, 메서드등)인지 검사한다.<br><br>
> - `setattr(cls, key, timing_decorator(value))`<br>
> setattr 함수는 클래스 cls에 속성(또는 메서드)을 동적으로 설정하는 데 사용, key는 클래스의 메서드 이름을 나타내며, value는 해당 메서드 객체<br>
> timing_decorator(value)는 원래 메서드를 timing_decorator로 감싼 새로운 메서드를 생성, 이 새로운 메서드는 setattr에 의해서 원래의 메서드 이름('key')에 할당되어
> 클래스의 원래 메서드를 데코레이터가 적용된 새로운 메서드로 만든다.

### 데코레이터 중첩하기

데코레이터 중첩하기(Nesting Decorators)는 하나의 함수에 여러 데코레이터를 적용하는 것을 의미한다.<br>
데코레이터는 함수를 감싸는 형태로 적용되기 때문에, 여러 데코레이터를 중첩하면, 가장 밖에 있는 데코레이터부터 안쪽으로 순차적으로 적용된다.

```python
def decorator1(func):
    def wrapper():
        print("Decorator1 실행 전")
        func()
        print("Decorator1 실행 후")

    return wrapper


def decorator2(func):
    def wrapper():
        print("Decorator2 실행 전")
        func()
        print("Decorator2 실행 후")

    return wrapper


@decorator1
@decorator2
def greet():
    print("Hello!")


greet()
```

결과가 어떻게 될 것 같은가?
<details>
<summary>결과 보기(Click!)</summary>
Decorator1 실행 전<br>
Decorator2 실행 전<br>
Hello!         <br>
Decorator2 실행 후<br>
Decorator1 실행 후<br>
</details>

이걸 코드로 분해하면 다음과 같다.

```python
def decorator1(func):
    def wrapper():
        print("Decorator1 실행 전")
        decorator2().wrapper()
        """
        print("Decorator2 실행 전")
        func() --> greet가 수행
        print("Decorator2 실행 후")
        """
        print("Decorator1 실행 후")

    return wrapper
```

~~이거보다 잘 설명할 자신이 없다.~~

### 인자를 가진 데코레이터

예매 하기에서 이미 설명해 버려서 할께 없지만 간단하게 보여주면 아래와 같다.

```python
from functools import wraps


def message_decorator(msg):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            print(f"{msg} - {func.__name__} 호출 전")
            result = func(*args, **kwargs)
            print(f"{msg} - {func.__name__} 호출 후")
            return result

        return wrapper

    return decorator


@message_decorator("인사 메시지")
def greet(name):
    print(f"Hello, {name}!")


greet("Alice")

# 출력
# 인사 메시지 - greet 호출 전
# Hello, Alice!
# 인사 메시지 - greet 호출 후
```

### 데코레이터 조합하기

데코레이터를 통해 함수의 기능을 확장할 때, 필요한 기능만을 선택적으로 적용하고자 할 때 유용하다.<br>

```python
from functools import wraps


def logging_decorator(func):  # 로깅 데코레이터 정의
    wraps(func)

    def logging_wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result}")
        return result

    return logging_wrapper


def authentication_decorator(func):  # 인증 데코레이터
    wraps(func)

    def auth_wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        print("Checking user authentication")
        # 인증 로직
        return func(*args, **kwargs)

    return auth_wrapper


@logging_decorator
@authentication_decorator
def some_function(data):
    # 함수 로직
    return data


some_function("test data")
```

### 상태를 가진 데코레이터
상태를 가진 데코레이터는 내부적으로 데이터를 유지할 수 있도록 하는것, 호출될 때마다 일부 정보를 저장하고, 이 정보를 기반으로 향후의 호출에서 다른 동작을 수행할 수 있다.
**내부 함수를 사용해여 상태 저장**
```python
def count_calls(func):
    def wrapper(*args, **kwargs):
        wrapper.calls += 1
        print(f"Function {func.__name__} has been called {wrapper.calls} times")
        return func(*args, **kwargs)
    wrapper.calls = 0
    return wrapper

@count_calls
def say_hello():
    print("Hello!")

# 함수 호출
say_hello()
say_hello()
```

### 데코레이터로서의 클래스
**클래스를 사용하여 데코레이터 구현**
```python
class CountCalls:
    def __init__(self, func):
        self.func = func
        self.calls = 0

    def __call__(self, *args, **kwargs):
        self.calls += 1
        print(f"Function {self.func.__name__} has been called {self.calls} times")
        return self.func(*args, **kwargs)

@CountCalls
def say_hello():
    print("Hello!")

say_hello()
say_hello()
```
캐시데이터를 구현하여 만약에 데이터를 조회 했다면 DB 조회 없이 전달하도록 할 수 있지 않을까?
```python
from functools import wraps

def cache_decorator(func):
    cache = {}
    
    @wraps(func)
    def wrapper(*args, **kwargs):
        # 인자들을 캐시 키로 사용
        cache_key = args + tuple(kwargs.items())
        
        ### 캐시에 값이 있다면 캐시된 값을 반환
        if cache_key in cache:
            print("캐시된 데이터 사용")
            return cache[cache_key]
        # 캐시에 값이 없다면 함수를 실행하고 결과를 캐시
        result = func(*args, **kwargs)
        cache[cache_key] = result
        return result
    return wrapper

@cache_decorator
def get_data_from_db(sql):
    print(f"DB에서 데이터 조회 : {sql}")
    # 데이터베이스 조회 로직 구현 
    return "table 데이터"

print(get_data_from_db("SELECT * FROM table"))
print(get_data_from_db("SELECT * FROM table"))  # 캐시된 데이터 반환

# DB에서 데이터 조회 : SELECT * FROM table
# table 데이터
# 캐시된 데이터 사용
# table 데이터
```


## 더 많은 실제 사례들
실무에서 위의 주제들을 어떻게 사용할 수 있는지 알아보자

### 코드 속도 늦추기, 다시 알아보기
```python
import time

def slow_down(_func=None, *, delay=1):
    def decorator_slow_down(func):
        def wrapper(*args, **kwargs):
            time.sleep(delay)
            print(f"func is act : {func.__name__}")
            return func(*args, **kwargs)
        return wrapper

    if _func is None:
        print(f"{delay}")
        print("func is none")
        return decorator_slow_down
    else:
        return decorator_slow_down(_func)

@slow_down(delay=3)
def my_function():
    print("Function executed")

my_function()
```
여기에서 딜레이 값이 있으면 slow_down이 최초에 한번 수행되기 때문에
```text
3
func is none
func is act : my_function
Function executed
```
선언된 변수인 delay와 'func is none'이 출력된다.
만약에 delay 변수가 없으면 어떻게 될까?<br>
```text
func is act : my_function
Function executed
```
이렇게만 출력된다. 이렇게 임의로 api속도를 늦추는 방법으로도 사용할 수 있고 부하 테스트의 방법으로도 사용할 수 있다.

### 싱글톤 만들기
싱글톤은 자바에서도 DB를 연결하기 위해 많이 섰던 방식인데 singleton 데코레이터를 쓰는 방법과 `__new__` 메서드를 오버라이딩 하는 방법이 있다.
```python
def singleton(cls):
    instances = {}
    def get_instance(*args, **kwargs):
        if cls not in instances:
            instances[cls] = cls(*args, **kwargs)
        return instances[cls]
    return get_instance

@singleton
class DatabaseConnector:
    def __init__(self):
        # 여기에 데이터베이스 연결 로직
        # 예: self.connection = some_database_connection()
        pass

object1 = DatabaseConnector()
object2 = DatabaseConnector()

print(f"{id(object1)}")
print(f"{id(object2)}")

# 출력
# 4367764048
# 4367764048
```
```python
class DatabaseConnector:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(DatabaseConnector, cls).__new__(cls)
            # 여기에 데이터베이스 연결 로직
            # 예: cls._instance.connection = some_database_connection()
        return cls._instance

object1 = DatabaseConnector()
object2 = DatabaseConnector()

print(f"{id(object1)}")
print(f"{id(object2)}")

# 출력
# 4345988752
# 4345988752
```

### 반환 값 캐싱하기
[데코레이터로서의 클래스(Classes as Decorators)](#데코레이터로서의-클래스)에 이미 적어 놓았다. 카테고리 같은 정보를 반환하는건 실무에서 아주 쓸만한 기술이니 알아두면 좋을 것 같다. 
하지만, python에서는 캐시 데이터를 위한 표준 라이브러리가 존재한다. 함수의 호출 결과를 캐시하는 건데 사용법은 아래와 같다.
```python
import functools
import time

@functools.lru_cache(maxsize=100)
def expensive_function(num):
    time.sleep(2)  # 시간 소모적인 연산을 시뮬레이션
    return num * num

# 첫 번째 호출 (캐시되지 않음)
print(expensive_function(4))  # 2초 후에 결과 출력

# 두 번째 호출 (캐시된 결과 사용)
print(expensive_function(4))  # 즉시 결과 출력
```
이렇게 사용했을 때 장점은 성능향상은 물론이고 LRU 알고리즘을 사용하여 캐시 크기를 관리하기 때문에 가장 최근에 사용되지 않은 항목부터 자동으로 제거된다는 점에 있다.

### 단위에 대한 정보 추가하기
원화를 달러로 달러를 원화로 변경하는 데코레이터를 만들어 보겠다.
```python
from functools import wraps
from enum import Enum

class Currency(Enum):
    USD = "USD"
    KRW = "KRW"

# 환율 (가정)
USD_TO_KRW_RATE = 1200
KRW_TO_USD_RATE = 1 / USD_TO_KRW_RATE

def currency_converter(original_currency: Currency, target_currency: Currency):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            result = func(*args, **kwargs)
            
            if original_currency == Currency.USD and target_currency == Currency.KRW:
                return result * USD_TO_KRW_RATE, "KRW"
            elif original_currency == Currency.KRW and target_currency == Currency.USD:
                return result * KRW_TO_USD_RATE, "USD"
            else:
                return result, original_currency.value

# 달러를 원화로 변환
@currency_converter(Currency.USD, Currency.KRW)
def get_amount_in_usd(amount):
    return amount

# 원화를 달러로 변환
@currency_converter(Currency.KRW, Currency.USD)
def get_amount_in_krw(amount):
    return amount

# 테스트
print(get_amount_in_usd(100))  # 출력: (120000, 'KRW')
print(get_amount_in_krw(120000))  # 출력: (100.0, 'USD')
```

### json 유효성 검사하기
데코레이터를 사용하여 함수에 전달된 JSON 데이터가 특정 스키마에 맞는지 검증하는 예시는 다음과 같다.<br>
` pip install jsonschema`로 먼저 설치해야 한다.
```python
import jsonschema
from functools import wraps

def validate_json(schema):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            json_data = kwargs.get('data')
            try:
                # JSON 데이터 검증
                if json_data is not None:
                    jsonschema.validate(instance=json_data, schema=schema)
            except jsonschema.ValidationError as e:
                # 유효성 검사 실패 시 처리
                return f"JSON 유효성 검사 실패: {e.message}"

            # 원래 함수 실행
            return func(*args, **kwargs)
        return wrapper
    return decorator

# 사용할 JSON 스키마 정의
schema = {
    "type": "object",
    "properties": {
        "name": {"type": "string"},
        "age": {"type": "integer"}
    },
    "required": ["name", "age"]
}

# 데코레이터 적용
@validate_json(schema)
def process_data(data):
    process_data = f"Processing data: {data}";
    print(process_data)
    return process_data


result1 = process_data(data={"name": "Alice"})
result2 = process_data(data={"name": "Alice", "age": 30})

# 출력
# Processing data: {'name': 'Alice', 'age': 30}
```

## 결론
'@'를 수많은 코드에 사용하면서 어떻게 동작하는지 대략적으로만 알뿐 자세히 알아볼 생각을 하지 않았는데 이번 기회를 통해서 데코레이터 패턴에 대해 자세히 공부하고 공유할 수 있어서 기쁘다.

### 추가 읽기
목록은 realpythom에서 많이 가져왔다. 추가적으로 Python Cookbook이라는 책이 있다고 하니 생각있는 분들은 읽어 보는 것도 좋을 것 같다. <br>
참고한 사이트 : [realpython.com](https://realpython.com/primer-on-python-decorators/#first-class-objects)<br>
도움 : Chatgpt4