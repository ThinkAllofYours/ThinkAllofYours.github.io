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

