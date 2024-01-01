---
layout: posts
title: "Github 오픈소스 기여하기"
excerpt: "Github에서 오픈소스에 기여할 수 있는 방법 정리"
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