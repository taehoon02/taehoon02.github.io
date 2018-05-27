---
title: "Hugo 블로그 만들기"
date: 2018-04-04T21:31:00+09:00
tags: ["HUGO", "GO", "BLOG"]
---

### 시작하기 전에

1. windows를 기준으로 설명한다. (필자는 windows 10)

2. <a href="https://golang.org/">go언어</a>를 설치하자.

3. github pages이므로 git 설치 안했다고 빼애액거리면 때리러감.<br>그러므로 git을 설치하자^^

### 시작하기

<a href="https://gohugo.io/getting-started/installing/">Install Hugo</a>에 나와있는데로 <a herf="https://chocolatey.org/">Chocolatey</a>을 통해서 설치할 수도 있지만 다른 방법을 사용하여 Hugo 설치 및 깃허브 호스팅 방법을 올리도록 하겠다.

### Hugo 설치

1. <a href="https://github.com/gohugoio/hugo/releases">Hugo Releases</a>에 들어가 최신버전의 Hugo를 다운받는다. (windows-32bit.zip 혹은 windows-64bit.zip 을 자신의 컴퓨터에 알맞게 선택하여 설치)

2. Hugo 폴더를 만들고 안에 bin 폴더를 만든다. (C:\Hugo\bin\)

3. 다운받은 압축파일의 내용물만 bin폴더에 푼다. (hugo.exe, README.md, LICENSE.md)

설치 완료.

### Hugo 블로그 만들기

1. Hugo 폴더에서 시작한다. (C:\Hugo\)

2. 새로운 사이트를 만든다.

```
$ hugo new site <site_name>
ex) $ hugo new site blog
```
사이트 생성 완료.

### 테마 적용하기

<a href="https://themes.gohugo.io/">Hugo Themes</a>에서 원하는 테마의 git 저장소 URL을 확인한다. 그리고 생성된 사이트 폴더에서 아래와 같이 cmd에 입력.

```
$ cd themes
$ git clone <repo_url_of_theme>
```
테마 설치 완료.<br>
그리고 테마에 대한 내용을 복붙하거나 테마 git README 파일에서 하라는 대로 하면 테마가 적용된다.

### Configuration

config.[toml|yaml|json]<br>
Hugo 프로젝트의 설정파일이다. 테마별로 빌드관련 설정이 다르므로 테마에서 제공하는 config.[toml|yaml|json] 파일을 가져온 후 아래와 같은 정보를 추가한다.

```
baseurl = "<domain>"
languageCode = "ko"
title = "title"
theme = "theme_name"

contentdir = "content"
layoutdir = "layouts"
staticdir = "static"
publishdir = "public"
```
여기에서 가장 중요한 것은 publishdir, baseurl, theme 정도.<br>
publishdir은 깃허브 호스팅을 위해 꼭 필요하므로 꼭 기입하기 바란다. 또한 baseurl의 경우 깃허브 호스팅을 사용하기 위함이라면 ```https://<username>.github.io/``` 로 입력하자.

### 로컬환경에서 사이트 확인

로컬환경에서 사이트를 볼 수 있다. site_name 폴더에서 시작한다. (C:\Hugo\site-name\)

```
$ hugo server
```

이제 <a href="http://localhost:1313>http://localhost:1313</a> 로 접속하여 확인 가능하다.

### 깃허브 호스팅으로 사이트 공유하기

1. 깃허브에서 <username>.github.io 레포를 만든다.
2. site_name 폴더에서 시작한다. (C:\Hugo\site-name\)

```
$ hugo
$ cd public
$ git init
$ git add .
$ git commit -m "initial"
$ git remote add origin https://github.com/username/username.github.io.git
$ git push origin master
```

### 포스트 추가

포스트 추가도 깃허브 호스팅에서와 같은 방법으로 하면 된다.
```
$ hugo
$ cd public
$ git init
$ git add .
$ git commit -m "initial"
$ git push origin master
```

### 마치면서

필자는 <a href="https://jekyllrb.com/">Jekyll</a>을 사용하지 않았는데 <a href="https://gohugo.io/">Hugo</a>에 굉장히 만족하고 있다.

오역이나 궁금한 점은 <a href="https://taehoon02.github.io/about">About</a>의 연락망으로 연락해주시면 친절히 답변해드립니다.<br>물론 영어가 딸려서 한국분만 해당됩니다^^
