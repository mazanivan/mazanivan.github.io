---
title: "Challenge / Lab Name"
date: 2026-03-19
draft: false
hiddenInHomeList: true
---

## overview

Short description of the challenge or lab.

- **type:** web / linux / network / misc
- **source:** CTF / lab / own setup
- **goal:** what needed to be achieved


## initial analysis

**`[ observations ]`**

What you noticed first.

- open ports / services
- files / endpoints
- anything unusual


## enumeration

**`[ tools ]`**

- `nmap`
- `gobuster`

**`[ commands ]`**

```bash
nmap -sC -sV <target>
gobuster dir -u http://<target> -w <wordlist>
