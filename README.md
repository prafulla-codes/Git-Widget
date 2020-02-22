# Meetup Widget 

Codepen - https://codepen.io/Prafulla1998/pen/OJVNzxP 

Unofficial Widget to showcase the events which you have organized on meetup.com 📅



[![Screenshot of the Meetup Widget](https://res.cloudinary.com/prafulla98/image/upload/v1582385089/Meetup-Widget/ss_2_mymjm6.png?style=center)](#installation-and-usage)

# Installation & Usage

You can install meetup-widget using two ways.

## 1 - Using Script

```html
    <meetup-widget data-groupurl="Mumbai-Flutter"></meetup-widget>
    <!-- Place script tag before the end of the body tag -->
    <script src="" type="module"></script>
```

## 2 - As NPM Module

This can be used in React, Vue and almost any other frontend framework 
```sh
npm install --save meetup-widget
```

Inside your framework component
```js
import 'meetup-widget'
```

# Attributes 

| attributes    | description                   | default                  | 
|---------------|-------------------------------|--------------------------|
| data-groupname | Your meetup.com Username          |                          |
| data-width    | Width of the card             | 350px                    |
| data-height   | Height of the card            | 500px
| data-mode     | Set this to **production** while deploying in a realtime environment             | 
