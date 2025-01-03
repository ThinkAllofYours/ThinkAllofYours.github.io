---
slug: php-legacy
title: PHP 코드의 예측 불가능한 동작 
authors: [bundabergman]
tags: [php, performance, refactoring, legacy-code]
---

## **도전: PHP 코드의 예측 불가능한 동작** 🎯

> 10년차 개발자인 저도 코딩을 하다가 자주 문제에 부딪힙니다.

이번에는 엑셀 파일에서 데이터를 처리하는 PHP 스크립트가 예측 불가능하게 동작하는 문제가 발생했다.

심사 마감이 얼마 남지 않은 상황에서 오늘 오전 9시에 들어온 요청인데
적어도 오후 2-3시 사이에 문제를 파악해서 수정하는 코드를 배포하는 것이 중요한데
_와 오늘 오후 마감인데 이제 요청이...?_ ⏰

### 이 문제의 원인을 찾는 것이 중요 🔍

엑셀에 업로드된 파일로 데이터를 입력하는 기능인데
어떨 때는 정상적으로 업로드 되고
어떨 때는 정상적으로 업로드 되지 않는 문제가 생겼다.
프로그래머로 이런 문제를 만나면 정말 당황스럽다 상황에 따라 되고 안되고 한다니? 똑같은 코드에서..?? 😱

```sql
# 같은 프로세스인데 저장 된 값이 아래 부분과 윗 부분이 다르다.
# 거의 숨은그림 찾기 수준 잘 찾아보면 다른점이 보인다.
# a:5:{i:1;a:2:{s:5:"check";i:0;s:4:"text";s:107:"정량지표는 보통 계량화된 수치의 형태로 나타날 수 있는 생산성 지표이다.";}i:2;a:2:{s:5:"check";i:0;s:4:"text";s:130:"정성지표는 비계량화된 형태로 나타나므로 역량을 기반으로 평가를 하는 것이 일반적이다.";}i:3;a:2:{s:5:"check";i:0;s:4:"text";s:150:"조직의 성과평가는 객관적이고 공정해야 하며 가급적이며 평가자의 주관적 요소가 개입되어서는 안 된다.";}i:4;a:2:{s:5:"check";i:1;s:4:"text";s:48:"정성적인 지표를 최대화해야 한다.";}i:5;a:2:{s:5:"check";i:0;s:4:"text";s:0:"";}}

# a:5:{i:1;a:2:{s:5:"check";s:1:"0";s:4:"text";s:107:"정량지표는 보통 계량화된 수치의 형태로 나타날 수 있는 생산성 지표이다.";}i:2;a:2:{s:5:"check";s:1:"0";s:4:"text";s:130:"정성지표는 비계량화된 형태로 나타나므로 역량을 기반으로 평가를 하는 것이 일반적이다.";}i:3;a:2:{s:5:"check";s:1:"0";s:4:"text";s:150:"조직의 성과평가는 객관적이고 공정해야 하며 가급적이며 평가자의 주관적 요소가 개입되어서는 안 된다.";}i:4;a:2:{s:5:"check";s:1:"1";s:4:"text";s:48:"정성적인 지표를 최대화해야 한다.";}i:5;a:2:{s:5:"check";s:1:"0";s:4:"text";s:0:"";}}
```

문제가 된 코드는 아래와 같다.

```php
        $rows[10] = @explode(",", $rows[10]);

        $row['exb_answers'] = array(
            1 => array('check' => (in_array(1, $rows[10])) ? '1' : '0', 'text' => sql_escape_string($rows[5])),
            2 => array('check' => (in_array(2, $rows[10])) ? '1' : '0', 'text' => sql_escape_string($rows[6])),
            3 => array('check' => (in_array(3, $rows[10])) ? '1' : '0', 'text' => sql_escape_string($rows[7])),
            4 => array('check' => (in_array(4, $rows[10])) ? '1' : '0', 'text' => sql_escape_string($rows[8])),
            5 => array('check' => (in_array(5, $rows[10])) ? '1' : '0', 'text' => sql_escape_string($rows[9])),
        );
        $row['exb_answers']             = serialize($row['exb_answers']);
```

처음에는 데이터베이스 설정에서 문제가 발생했을 거라고 생각했는데

하지만 서비스 간 설정을 비교해본 결과, 데이터베이스 구성이 일관되게 유지되고 있었고,

문제는 PHP 코드 내에서 문자열 이스케이핑을 처리하는 sql_escape_string 함수의 사용 방식에 있었다.

~~분명히 얼마전에는 문제가 없었는데 코드 수정도 안했는데 갑자기? 이런 문제가 생기네요???~~ 🤔

#### 문제의 주범: sql_escape_string 함수 ⚠️

```php
function sql_escape_string($str) {
    global $connect_db;
    return ($connect_db, $str);
}
```

이 함수는 데이터베이스 연결에 문자 인코딩을 명시적으로 설정하지 않았고, 이는 비-ASCII 문자들, 특히 한글 문자나 특수 수학기호 처리에 결정적

#### **해결책: 올바른 문자 인코딩 설정** ✨

문제를 해결하기 위해 sql_escape_string 함수를 수정하여 데이터베이스 연결 시 UTF-8 인코딩을 명시적으로 설정하도록 변경.
모든 문자열이 올바르게 인코딩되도록 보장하는 것이 중요헀음
다음은 업데이트된 함수

```php
function sql_escape_string($str) {
    global $connect_db;
    $connect_db->set_charset('utf8');
    return mysqli_escape_string($connect_db, $str);
}
```

#### 해결책 선택 이유 💡

- 일관된 인코딩: 각 호출마다 문자 집합을 utf8으로 설정함으로써 특히 한글,특수문자 데이터 처리의 일관성을 보장
- 유연성과 보안: 이 함수는 mysqli_escape_string을 계속 사용하지만(mysqli_real_escape_string 사용을 더 권장합니다), SQL 인젝션에 대한 보안을 제공
- 전역 적용: 이 변경은 한글 문자 문제 해결뿐만 아니라 다른 비-ASCII 문자 처리 능력을 향상시켜 수학기호 등의 특수기호 사용에 용의

#### 결론: 특수문자를 저장하고 코드는 문자 인코딩이 매우 중요하고 오류를 수정할 때나 기능을 구현할 때 제일 먼저 고려해야 함 🎓

혹시나 같은 문제를 가지고 있는 사람에게 도움이 될까하여 올려 봅니다.

> 현재 개발되고 있는 새로운 python 기반 시스템이 심사가 잘 통과될때까지 잘 고쳐서 써봐야지 휴... 🐍