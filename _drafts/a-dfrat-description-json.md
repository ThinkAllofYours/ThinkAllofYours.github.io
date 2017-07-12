---
layout: default
title: Description Json Project
---

## Assignment
```
Using the language of your choice, write a function that takes as input a JSON string representing an array of objects, and returns a description of the data format.  Write one or more new test inputs.  Provide the function, the test inputs, and the corresponding test outputs.

SAMPLE INPUT
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

SAMPLE OUTPUT (you choose the format.  This implementer chose to use TypeScript's interface format, augmenting with comments.)

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