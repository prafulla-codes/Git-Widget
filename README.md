# Git Widget 
![NPM Downloads](https://img.shields.io/npm/dt/git-widget)
[![NPM Version](https://img.shields.io/npm/v/git-widget)](#npm)
[![Contributions](https://img.shields.io/badge/contributions-welcome-green)](#contributions)


 Showcase your projects on their official websites/blogs. 👨‍💻👩‍💻

 A Detailed timeline of contributions done on your project. 💖

 Codepen - https://codepen.io/Prafulla1998/pen/OJVNzxP

[![Screenshot of the Git Widget](https://res.cloudinary.com/prafulla98/image/upload/v1582651061/git-widget/git-widget-ss_rsyvpl.png)](#installation-and-usage)

# Installation & Usage

You can install git-widget using two ways.

## 1 - Using Script

```html
    <git-widget data-projectid="Pika1998/CYOMS"></git-widget>
    <!-- Place script tag before the end of the body tag -->
    <script src="https://unpkg.com/git-widget@1.0.0/dist/card.component.mjs" type="module"></script>
```

## 2 - As NPM Module

This can be used in React, Vue and almost any other frontend framework 
```sh
npm install --save git-widget
```

Inside your framework component
```js
import 'git-widget'
```

# Attributes 

| attributes    | description                   | default                  | 
|---------------|-------------------------------|--------------------------|
| data-projectid | < Your Github UserID > / < Project you want to showcase>         |                          |
| data-width    | Width of the card             | 400px                    |
| data-height   | Height of the card            | 500px

# Changelog

**[RELEASES](https://github.com/Pika1998/Git-Widget/releases)**

# Contribution

Feel free to contribute to git widget, checkout [CONTRIBUTING.md](CONTRIBUTING.md) 