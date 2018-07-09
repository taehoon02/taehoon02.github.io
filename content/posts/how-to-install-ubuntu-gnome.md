---
title: "Ubuntu Gnome 16.04 LTS 설치하기"
date: 2018-07-09T02:58:49+09:00
tags: ["LINUX"]
---

### 필자의 노트북
삼성 노트북 5 NT500R5L-Y54M

### 설치
<a href="https://b.chalk.pe/posts/setting-up-ubuntu-gnome-16-04/">https://b.chalk.pe/posts/setting-up-ubuntu-gnome-16-04/</a>

### 달리 해야할 점
1. java, mongodb, Freon 설치 X
2. 필수 패키지 설정 중 맨 아래 명령어 변경

```bash
sudo apt update
sudo apt install git fcitx fcitx-hangul nodejs yarn numix-icon-theme-circle
sudo apt upgrade && sudo apt autoremove
```

### 추가로 해야할 점
<a href="https://b.chalk.pe/posts/setting-up-oh-my-zsh/">https://b.chalk.pe/posts/setting-up-oh-my-zsh/</a>