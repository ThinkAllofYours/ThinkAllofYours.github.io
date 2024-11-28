---
slug: php-legacy
title: 🚀 PHP 레거시 코드 리팩토링 - 300배 성능 개선 사례
authors: [bundabergman]
tags: [php, performance, refactoring, legacy-code]
---

## 📝 개요

레거시 PHP 시스템의 성능 개선 사례를 공유합니다. **300분**이 걸리던 데이터 처리 작업을 **5초**로 단축한 리팩토링 과정을 설명합니다.

## 🔍 문제 상황

### ❌ 기존 시스템의 문제점

- 300명의 데이터 처리에 약 300분 소요 (1인당 1분)
- 운영팀의 업무 효율성 저하
- 데이터가 증가할수록 기하급수적으로 처리 시간 증가

### 🤔 성능 저하의 주요 원인

1. **비효율적인 데이터 조회 방식**

   ```php
   // 기존: 단건 조회 반복
   for($i = 0; $i < count($list); $i++) {
       $sql = "SELECT id, member_info FROM 고객테이블 WHERE id = '$user_id'";
       // 매 반복마다 DB 조회 발생
       // 고객이 입과 되어 있는 데이터 조회 1
       // for문 안에서 고객 정보가 있는 또다른 데이터 조회
       // 고객 정보가 있는 또다른 데이터 조회

       // 이러한 방식으로 데이터 조회가 반복되어 성능 저하
   }
   ```

2. **트랜잭션 관리 미흡**
   - 건별 처리 및 커밋으로 인한 오버헤드
   - 부분 실패 시 데이터 정합성 문제

## ⚡ 개선 방안

### 1. 💾 데이터 조회 최적화

```php
// 개선: IN 절을 활용한 일괄 조회
$user_ids = array_column($list, 'user_id');
$sql = "SELECT * FROM 고객테이블 WHERE id IN (" . implode(',', $user_ids) . ")";
$result = sql_query($sql);

// 메모리 캐싱 구현
$user_map = [];
while($row = sql_fetch_array($result)) {
    $user_map[$row['id']] = $row;  // 사용자 ID를 키로 하는 연관 배열 생성
}

// 캐시된 데이터 활용 예시
foreach($list as $item) {
    $user_id = $item['user_id'];
    if (isset($user_map[$user_id])) {
        $user_info = $user_map[$user_id];  // DB 조회 없이 메모리에서 즉시 조회
        // 추가 처리 로직...
    }
}
```

#### 메모리 캐싱 효과

- 🚀 DB 조회 횟수: 300회 → 1회로 감소
- 💡 조회 속도: O(n) → O(1) 복잡도로 개선
- 🔄 데이터 재사용: 동일 데이터 반복 조회 제거

### 2. 📦 Bulk Insert 구현

```php
function bulk_insert($tableName, $columns, $values) {
    $sql = "INSERT INTO {$tableName} (" . implode(',', $columns) . ") VALUES ";
    $valueStrings = [];
    
    foreach($values as $row) {
        $valueStrings[] = "(" . implode(',', array_map('sql_escape', $row)) . ")";
    }
    
    $sql .= implode(',', $valueStrings);
    return sql_query($sql);
}
```

### 3. 🔄 트랜잭션 처리 개선

```php
sql_begin_transaction();
try {
    // 데이터 검증
    $validated_data = processValidate($input_data);
    
    // Bulk Insert 실행
    bulk_insert('score_table', $columns, $validated_data);
    bulk_insert('history_table', $columns, $validated_data);
    
    sql_commit();
} catch (Exception $e) {
    sql_rollback();
    log_error($e->getMessage());
    return ['success' => false, 'message' => '처리 중 오류가 발생했습니다.'];
}
```

## 📊 개선 결과

| 구분 | 처리 시간 | 메모리 사용량 | DB 부하 |
|-----|---------|------------|---------|
| 개선 전 | 300분 | 높음 | 높음 |
| 개선 후 | 5초 | 최적화 | 낮음 |

### ✨ 주요 개선 포인트

1. **🔋 데이터베이스 호출 최소화**
   - 300 * 10회 → 10회로 감소
   - 메모리 캐싱 활용

2. **⚡ 일괄 처리 도입**
   - Bulk Insert로 Insert 쿼리 최소화
   - 트랜잭션 단위 최적화

3. **📈 코드 품질 향상**
   - 모듈화 및 함수 분리
   - 에러 처리 강화
   - 데이터 검증 로직 체계화

## 💫 마치며

> 이번 리팩토링을 통해 얻은 교훈:

- 🎯 레거시 코드도 적절한 리팩토링으로 큰 성능 개선이 가능
- 💡 데이터베이스 작업 최적화의 중요성
- 🏗️ 체계적인 코드 구조의 필요성

앞으로도 지속적인 코드 개선과 학습을 통해 더 나은 시스템을 만들어가보겠습니다.

Legacy..Legacy..Legacy.. 내가 만들땐 진짜 이런 문제가 안생기도록 노력해야 할 것 같습니다.

:::tip 💡 참고
실제 프로덕션 환경에서 검증된 사례입니다. 유사한 성능 이슈가 있다면 이러한 접근 방식을 고려해보세요.
:::
