# Git Widget 


### Showcase your projects on their official websites/blogs.

### A Detailed timeline of contributions done on your project. 



[![Screenshot of the Meetup Widget](https://res.cloudinary.com/prafulla98/image/upload/v1582385089/Meetup-Widget/ss_2_mymjm6.png?style=center)](#installation-and-usage)

# Installation & Usage

You can install git-widget using two ways.

## 1 - Using Script

```html
    <git-widget data-projectid="Pika1998/CYOMS"></git-widget>
    <!-- Place script tag before the end of the body tag -->
    <script src="" type="module"></script>
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

