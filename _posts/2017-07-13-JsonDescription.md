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

#### Json Description

> Language : C#
>
> Framework :  Winform
>
> Base On : [`JSON C# Class Generator`](http://jsonclassgenerator.codeplex.com/)
>
> Github Url : [`Json Description`](https://github.com/ThinkAllofYours/JsonDescription)
>
> Download Link : [`You can Download exe file (click this)`](https://drive.google.com/open?id=0B7U27fdP3tAEU3pNUGRiRjZoc00)
>
> Program Description : This application generates C# classes and Typescript Interfaces from a JSON text. You can see how the json format is formed.


#### Screen Shot
* Json Sample From [`Json Example`](http://json.org/example.html)

![JSON SAMPLE 1](/../images/Snapshot_01.png)

* Input Json

```json
{
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
}
```

* Output CSharp Class Description

```csharp

namespace Finda
{

    public class inferredJSONFormat
    {
        public Glossary glossary { get; set; }
    }


    public class Glossary
    {
        public string title { get; set; }
        public GlossDiv GlossDiv { get; set; }
    }


    public class GlossDiv
    {
        public string title { get; set; }
        public GlossList GlossList { get; set; }
    }


    public class GlossList
    {
        public GlossEntry GlossEntry { get; set; }
    }


    public class GlossEntry
    {
        public string ID { get; set; }
        public string SortAs { get; set; }
        public string GlossTerm { get; set; }
        public string Acronym { get; set; }
        public string Abbrev { get; set; }
        public GlossDef GlossDef { get; set; }
        public string GlossSee { get; set; }
    }


    public class GlossDef
    {
        public string para { get; set; }
        public IList<string> GlossSeeAlso { get; set; }
    }


}
```

* If you check 'Generate with data examples' you can see Description with examples

![JSON SAMPLE 2]({{ site.url }}/images/Snapshot_02.png)

* Input Json

```json
{"menu": {
  "id": "file",
  "value": "File",
  "popup": {
    "menuitem": [
      {"value": "New", "onclick": "CreateNewDoc()"},
      {"value": "Open", "onclick": "OpenDoc()"},
      {"value": "Close", "onclick": "CloseDoc()"}
    ]
  }
}}
```

* Output Typescript

```typescript

module Finda {

    interface inferredJSONFormat {
        /**
          // Examples: {"id":"file","value":"File","popup":{"menuitem":[{"value":"New","onclick":"CreateNewDoc()"},{"value":"Open","onclick":"OpenDoc()"},{"value":"Close","onclick":"CloseDoc()"}]}}
          */
        menu: Menu;
    }

    interface Menu {
        /**
          // Examples: "file"
          */
        id: string;

        /**
          // Examples: "File"
          */
        value: string;

        /**
          // Examples: {"menuitem":[{"value":"New","onclick":"CreateNewDoc()"},{"value":"Open","onclick":"OpenDoc()"},{"value":"Close","onclick":"CloseDoc()"}]}
          */
        popup: Popup;
    }

    interface Popup {
        /**
          // Examples: [{"value":"New","onclick":"CreateNewDoc()"},{"value":"Open","onclick":"OpenDoc()"},{"value":"Close","onclick":"CloseDoc()"}]
          */
        menuitem: Menuitem[];
    }

    interface Menuitem {
        /**
          // Examples: "New", "Open", "Close"
          */
        value: string;

        /**
          // Examples: "CreateNewDoc()", "OpenDoc()", "CloseDoc()"
          */
        onclick: string;
    }

}
```

* You can select C # or Typescript as the data type to be description.

![JSON SAMPLE 3](/../images/Snapshot_03.png)
![JSON SAMPLE 4](/../images/Snapshot_04.png)
![JSON SAMPLE 5](/../images/Snapshot_05.png)

#### Describe Files

##### Main

* 윈도우 폼을 구성하거나 이벤트를 설정하는 파일

|No.| Filename                    | Function       |
|:--|:----------------------------|:------------------|
| 1 | frmDescriptJson.cs          | 메인 C# Class - 각종 event 및 폼과 관련된 내용들이 코딩되어 있는 클래스   |
| 2 | frmDescriptJson.Designer.cs | 메인 C# Design Class - 폼의 디자인과 관련된 내용들이 기술되어 있는 클래스  |
| 3 | Program.cs                  | 프로그램 주 진입점이 어디인지 기술 |


##### Library - JsonClassGeneratorLib
* JsonClassGeneratorLib는 [`Newtonsoft`](http://www.newtonsoft.com/json)의 라이브러리를 사용

|No.| Filename                      | Function          |
|:--|:------------------------------|:------------------|
|4  | IJsonClassGeneratorConfig.cs  | JsonClassGenerator.cs 의 인터페이스. Json을 Class로 변환시키기 위한 각종 변수들이 선언 |
|5  | JsonClassGenerator.cs         | 입력된 Json Text를 Class형태로 전환하는 기능 및 관련 정보 저장  |
|6  | JsonTypeEnum.cs               | Json이 가질 수 있는 Type을 열거 ex) String, Integer, Array 등 |
|7  | JsonType.cs                   | Json의 각 요소들이 어떤 타입으로 이루어져 있는지를 확인하고 JSON의 Object를 저장 |
|8  | ICodeWriter.cs                | JsonClassGenerator를 통해 만들어진 정보를 C#, Typescript로 변환하기 위한 각정 변수들이 선언되어 있는 인터페이스 |
|9  | CSharpCodeWriterToText.cs     | ICodeWriter를 구현 JsonClassGenerator를 통해 만들어진 정보를 C# Class 형태로 변환하여 변환된 정보를 String값으로 반환 |
|10 | TypescriptCodeWriterToText.cs | ICodeWriter를 구현 JsonClassGenerator를 통해 만들어진 정보를 Typescript Interface 형태로 변환하여 변환된 정보를 String 값으로 반환 |
|11 | GeneratorDescription.cs       | Class형태로 전환된 정보를 String으로 TypescriptCodeWriterToText.cs, CSharpCodeWriterToText.cs를 활용하여 String 값으로 변환 |


#### Describe Code

##### ButtonEvent - frmDescriptJson.cs
* 프로그램을 실행하면 나오는 Form에서 Start Generate 버튼을 클릭하면 발생하는 이벤트
```cs
private void btnGenerator_Click(object sender, EventArgs e)
{
    //Json이 C#이나 Typescript로 생성되기 전까지 마우스 커서를 진행중으로 변경
    Cursor.Current = Cursors.WaitCursor;

    //Prepare에서 Json을 Class로 변환하는데 사용되는 정보들을 설정
    var gen = Prepare();
    if (gen == null) return;

    try
    {
        //입력된 Json Text를 5. JsonClassGenerator.cs의 GenerateClasses()를 이용하여
        //C#, Typescript로 변환할 수 있는 정보를 저장
        gen.GenerateClasses();

        //위에서 변환한 정보를 10. GeneratorDescription.cs로 전달하고 C#이나 Typescript의 Text파일로 변환
        //변환한 정보를 Text박스에 Insert
        edtJsonDescription.Text = GenerateDescription(gen).ToString();
    }
    catch (Exception ex)
    {
        Cursor.Current = Cursors.Default;
        MessageBox.Show(this, "Unable to generate the code: " + ex.Message, this.Text, MessageBoxButtons.OK, MessageBoxIcon.Error);
    }
    Cursor.Current = Cursors.Default;
}
```

##### GenerateDescription Method - frmDescriptJson.cs

* JsonClassGenerator.cs의 GenerateClass Method에 의해 생성된 정보를 활용하여 C#, Typescript의 Description으로 변환
```cs
private StringBuilder GenerateDescription(JsonClassGenerator generator)
{
    GenerateDescription _jsonDescriptionGenerator = new GenerateDescription();

    //JsonClassGenerator.cs에 의해 생성된 각종 정보를 GenerateDescription으로 전달
    cloneGenerator(generator, _jsonDescriptionGenerator);

    //사용자가 선택한 Description Type에 따라 관련된 Type의 Class생성
    string codeWriterName = _jsonDescriptionGenerator.CodeWriter.DisplayName;
    if (codeWriterName == "C#") _jsonDescriptionGenerator.CodeWriter = new CSharpCodeWriterToText();
    else if(codeWriterName == "TypeScript") _jsonDescriptionGenerator.CodeWriter = new TypeScriptCodeWriterToText();

    //메소드가 반환할 StringBuilder 생성
    StringBuilder _sb = new StringBuilder();
    //GeneratorDescription.cs의 WriteDescriptionToStringBuilder Method를 통해 각종 정보를 Text파일로 전환
    _jsonDescriptionGenerator.WriteDescriptionToStringBuilder(_sb, _jsonDescriptionGenerator.Types);
    return _sb;
}
```

##### WriteDescriptionToStringBuilder - GeneratorDescription.cs

* 전달받은 해쉬 형태의 Type들을 활용해 StringBuilder에 관련 정보 저장
```cs
public void WriteDescriptionToStringBuilder(StringBuilder sb, IEnumerable<JsonType> types)
{
    var inNamespace = false;
    var rootNamespace = false;

    //Description의 시작 - Nested Class를 사용할 때 동작(클래스 안에서 클래스를 정의할 떄)
    CodeWriter.WriteFileStart(this, sb);

    //IEnumerable<JsonType> types의 정보들을 활용해 Class로 변환
    for(int i = types.Count()-1; i >= 0; i--)
    {
        var type = types.ElementAt(i);

        // NameSpace를 이용할 떄 Description 정보의 시작을 표시
        if (UseNamespaces && inNamespace && rootNamespace != type.IsRoot && SecondaryNamespace != null) { CodeWriter.WriteNamespaceEnd(this, sb, rootNamespace); inNamespace = false; }
        if (UseNamespaces && !inNamespace) { CodeWriter.WriteNamespaceStart(this, sb, type.IsRoot); inNamespace = true; rootNamespace = type.IsRoot; }

        //type에 저장된 정보들을 토대로 Class를 생성
        //type는 입력된 Json Text의 Object에 맞게 정의되어 있음.
        CodeWriter.WriteClass(this, sb, type);
    }
    // NameSpace를 이용할 때 Desciprtion 의 끝을 표시
    if (UseNamespaces && inNamespace) CodeWriter.WriteNamespaceEnd(this, sb, rootNamespace);

    //Description파일의 끝 - Nested Class를 사용할 때 동작(클래스 안에서 클래스를 정의할 떄)
    CodeWriter.WriteFileEnd(this, sb);
}
```

##### WriteClass - CSharpCodeWriterToText.cs

* 전달받은 Type을 활용해 Class형태의 Text파일로 변환
```cs
public void WriteClass(IJsonClassGeneratorConfig config, StringBuilder sb, JsonType type)
{
    //설정한 정보에 따라 internal과 public중 하나를 선택
    var visibility = config.InternalVisibility ? "internal" : "public";
    //Nested Class를 사용할 때 동작
    if (config.UseNestedClasses)
    {
        if (!type.IsRoot)
        {
            if (ShouldApplyNoRenamingAttribute(config)) sb.AppendLine("        " + NoRenameAttribute);
            if (ShouldApplyNoPruneAttribute(config)) sb.AppendLine("        " + NoPruneAttribute);
            sb.AppendLine(string.Format("        {0} class {1}", visibility, type.AssignedName))
              .AppendLine("        {");
        }
    }
    else //클래스의 시작을 표시
    {
        if (ShouldApplyNoRenamingAttribute(config)) sb.AppendLine("    " + NoRenameAttribute);
        if (ShouldApplyNoPruneAttribute(config)) sb.AppendLine("    " + NoPruneAttribute);
        sb.AppendLine(string.Format("    {0} class {1}", visibility, type.AssignedName))
          .AppendLine("    {");
    }

    //prefix의 size를 결정
    var prefix = config.UseNestedClasses && !type.IsRoot ? "            " : "        ";

    //type에 저장된 Class Members의 정보를 Stringbuilder에 Class Member형태로 저장
    WriteClassMembers(config, sb, type, prefix);

    //Nested Class를 사용할 때 동작
    if (config.UseNestedClasses && !type.IsRoot)
    {
        sb.AppendLine("        }");
    }

    //일반적으로 class의 끝을 표시
    if (!config.UseNestedClasses)
    {
        sb.AppendLine("    }");
    }

    sb.AppendLine();
}
```

##### WriteClassMembers - CSharpCodeWriterToText.cs

* 전달받은 Type의 filed들을 Class의 Member로 변환 후 StringBuilder에 저장
```csharp
private void WriteClassMembers(IJsonClassGeneratorConfig config, StringBuilder sb, JsonType type, string prefix)
{
    int cnt = 1;
    foreach (var field in type.Fields)
    {
        //Examples를 표시하기를 원했을 때 동작
        if (config.ExamplesInDocumentation)
        {
            sb.AppendLine(prefix + "/// <summary>")
              .AppendLine(prefix + "/// Examples: " + field.GetExamplesText())
              .AppendLine(prefix + "/// </summary>");
        }
        //저장된 정보를 Class의 Member형식으로 저장
        sb.AppendLine(prefix + "public " + field.Type.GetTypeName() + field.MemberName + "get; set;" );
        if (config.ExamplesInDocumentation && type.Fields.Count != cnt++) sb.AppendLine();
    }
}
```