---
layout: posts
title: "Github 오픈소스 기여하기"
excerpt: "Github에서 오픈소스에 기여할 수 있는 방법 정리, 깨끗한 풀 리퀘스트를 만드는 방법"
search: true
categories:
- common
last_modified_at: 2023-12-04
---
먼저 오픈소스에 기여 하려면 해당 오픈 소스의 Reposit을 카피
```bash
git clone git@github.com:akrabat/zend-validator.git
```

git clone git@github.com:[해당 저장소 주소]

해당 오픈소스 폴더로 이동 후 github 리포짓을 내 리포짓으로 복사

```bash
git remote add upstream git@github.com:zendframework/zend-validator.git
```

git remote add upstream git@github.com:[내 깃험]/zend-validator.git

branch 작성법
```
$ git checkout master
$ git pull upstream master && git push origin master
$ git checkout -b hotfix/readme-update
```

뭔가 작업을 하고 난뒤
```bash
git push -u origin hotfix/readme-update
```

내가 포크한 github 주소로 들어가면
Compare & pull request 버튼이 보이고
적절한 내용 작성후 
Create pull request 버튼을 누르면 완료

아래는 깃헙에 공개되어 있는 오픈소스에 기여 방법 번역

프로젝트에 기여하여 그것을 더 좋게 만들고 싶다면, 여러분의 도움을 환영합니다. 기여하는 것은 Github에서의 사회적 코딩, 새로운 기술 및 그들의 생태계를 더 잘 배우고, 건설적이고 유용한 버그 보고서, 기능 요청, 그리고 가장 고귀한 기여를 하는 방법: 좋고 깨끗한 풀 리퀘스트를 만드는 훌륭한 방법입니다.

깨끗한 풀 리퀘스트를 만드는 방법
프로젝트의 기여 지침을 찾으세요. 있으면 그 지침을 따르세요.

- Github에서 프로젝트의 개인 포크를 만듭니다.
- 로컬 기계에서 포크를 복제하세요. Github 상의 당신의 원격 저장소는 origin이라고 합니다.
- 원본 저장소를 upstream이라는 원격으로 추가하세요.
- 포크를 만든 지 오래되었다면 로컬 저장소에 upstream 변경 사항을 반드시 가져와야 합니다.
- 작업할 새 브랜치를 만드세요! develop이 있다면 그것에서 분기하고, 아니면 master에서 분기하세요.
- 구현/수정할 기능, 코드를 주석 처리하세요.
- 프로젝트의 코드 스타일을 따르세요, 들여쓰기를 포함해서요.
- 프로젝트에 테스트가 있다면 실행하세요!
- 필요한 경우 테스트를 작성하거나 적응시키세요.
- 필요한 경우 문서를 추가하거나 변경하세요.
- git의 인터랙티브 리베이스로 커밋을 단일 커밋으로 스쿼시하세요. 필요한 경우 새 브랜치를 만드세요.
- Github 상의 당신의 포크로 브랜치를 푸시하세요, 원격 origin으로요.
- 당신의 포크에서 올바른 브랜치에서 풀 리퀘스트를 열어주세요. 프로젝트에 develop 브랜치가 있다면 그것을 대상으로 하고, 아니면 master를 선택하세요!
…
관리자가 추가 변경을 요청하면 그냥 당신의 브랜치에 푸시하세요. PR은 자동으로 업데이트됩니다.
풀 리퀘스트가 승인되고 병합되면 upstream에서 변경 사항을 당신의 로컬 저장소로 가져오고, 여분의 브랜치(들)를 삭제할 수 있습니다.
마지막으로 항상 당신의 커밋 메시지를 현재 시제로 작성하세요. 당신의 커밋 메시지는 코드에 적용될 때 커밋이 코드에 무엇을 하는지를 설명해야 합니다 – 당신이 코드에 무엇을 했는지가 아니라요.
