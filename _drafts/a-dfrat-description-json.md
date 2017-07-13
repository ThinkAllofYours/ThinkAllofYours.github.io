---
layout: default
title: Description Json Project
---

### Assignment

Using the language of your choice, write a function that takes as input a JSON string representing an array of objects, and returns a description of the data format.  Write one or more new test inputs.  Provide the function, the test inputs, and the corresponding test outputs.

##### SAMPLE INPUT
```json
[
   {
      "name": "Douglas Crawford",
      "salary": 80000,
      "address": {
         "line1": "c/o Unstructured Programmers Anonymous",
         "line2": "7723 Western Avenue",
         "city": "San Francisco",
         "state": "CA",
         "zip": "9123"
      }
   },
   {
      "name": "Brian Kernighan",
      "salary": 60000,
      "address": {
         "line1": "PO BOX 455",
         "city": "Princeton",
         "state": "NJ",
         "zip": "08544"
      }
   }
]
```

##### SAMPLE OUTPUT (you choose the format.  This implementer chose to use TypeScript's interface format, augmenting with comments.)

```ts
interface inferredJSONFormat {
    name: string,
    salary: number,
    address: IAddress,
}

interface IAddress {
    line1: string,
    line2?: string,
    city: string,
    state: string, // 2 characters
    zip: string, // numeric, 5 digit, 0 padded on left
}
```

* * *

### Submit an assignment

#### Description Json

* Language : C#
* Framework :  Winform
* Base On : [`JSON C# Class Generator`](http://jsonclassgenerator.codeplex.com/)
* Github Url : [`Json Description`]()
* Program Description : This application generates C# classes and Typescript Interfaces from a JSON text. You can see how the json format is formed.


#### Screen Shot
* Json Sample From [`Json Example`](http://json.org/example.html)

![JSON SAMPLE 1](http://127.0.0.1:4000/images/Snapshot_01.png)

* If you check 'Generate with data examples' you can see Description with examples

![JSON SAMPLE 2](http://127.0.0.1:4000/images/Snapshot_02.png)

* You can select C # or Typescript as the data type to be description.

![JSON SAMPLE 3](http://127.0.0.1:4000/images/Snapshot_03.png)
![JSON SAMPLE 4](http://127.0.0.1:4000/images/Snapshot_04.png)
![JSON SAMPLE 5](http://127.0.0.1:4000/images/Snapshot_05.png)

#### Describe Code

##### 파일에 따른 기능

###### 메인

| Filename                    | Function       |
|:----------------------------|:------------------|
| frmDescriptJson.cs          | 메인 C# Class - 각종 event 및 폼과 관련된 내용들이 코딩되어 있는 클래스   |
| frmDescriptJson.Designer.cs | 메인 C# Design Class - 폼의 디자인과 관련된 내용들이 기술되어 있는 클래스  |
| Program.cs                  | 프로그램 주 진입점이 어디인지 기술 |


###### 라이브러리 - JsonClassGeneratorLib
* JsonClassGeneratorLib는 [`Newtonsoft`](http://www.newtonsoft.com/json)의 라이브러리를 사용

| Filename                      | Function          |
|:------------------------------|:------------------|
| IJsonClassGeneratorConfig.cs  | JsonClassGenerator.cs 의 인터페이스. Json을 Class로 변환시키기 위한 각종 변수들이 선언 |
| JsonClassGenerator.cs         | 입력된 Json Text를 Class형태로 전환하는 기능 및 관련 정보 저장  |
| JsonTypeEnum.cs               | Json이 가질 수 있는 Type을 열거 ex) String, Integer, Array 등 |
| JsonType.cs                   | Json의 각 요소들이 어떤 타입으로 이루어져 있는지를 확인하고 JSON의 Object를 저장 |
| ICodeWriter.cs                | JsonClassGenerator를 통해 만들어진 정보를 C#, Typescript로 변환하기 위한 각정 변수들이 선언되어 있는 인터페이스 |
| CSharpCodeWriterToText.cs     | ICodeWriter를 구현 JsonClassGenerator를 통해 만들어진 정보를 C# Class 형태로 변환하여 변환된 정보를 String값으로 반환 |
| TypescriptCodeWriterToText.cs | ICodeWriter를 구현 JsonClassGenerator를 통해 만들어진 정보를 Typescript Interface 형태로 변환하여 변환된 정보를 String 값으로 반환 |
| GeneratorDescription.cs       | Class형태로 전환된 정보를 String으로 TypescriptCodeWriterToText.cs, CSharpCodeWriterToText.cs를 활용하여 String 값으로 변환 |


