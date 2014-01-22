---
layout: post
title:  "ECMA 5 new features"
description: "ECMA 5 new features"
categories: frontend
tags: [js]

develop: true
---

# Object

## `Object.create`

``` js
function Cat(name) {
    this.name = name;
    this.paws = 4;
    this.hungry = false;
    this.eaten = [];
}
Cat.prototype = {
    constructor: Cat,
    play: function () {
        this.hungry = true;
        return 'playing!';
    },
    feed: function (food) {
        this.eaten.push(food);
        this.hungry = false;
    },
    speak: function () {
        return 'Meow';
    }
};
```
``` js
var Dog = {
    name: 'dog',
    paws: 4,
    hungry: false,
    eaten: null,
    play: function () {
        this.hungry = true;
        return 'playing!';
    },
    speak: function () {
        return 'Woof!';
    }
};

var dog = Object.create(Dog);
```

``` js
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}
```

## `Object.defineProperty`

## `Object.defineProperties`

## `Object.getOwnPropertyDescriptor`

## `Object.keys`

``` js
var horse = { name : 'Ed', age : 4, job : 'jumping', owner : 'Jim' };
var horseKeys = Object.keys(horse); // ['name', 'age', 'job', 'owner'];
```

## `Object.getOwnPropertyNames`

## `Object.preventExtensions / Object.isExtensible`

## `Object.seal / Object.isSealed`

## `Object.freeze / Object.isFrozen`

## `Object.getPrototypeOf`

----------

# Array

## `Array.isArray`

``` js
var names = ['Collis', 'Cyan'];
Array.isArray(names); // true
```

## `Array.prototype.indexOf`

## `Array.prototype.lastIndexOf`

## `Array.prototype.every`

## `Array.prototype.some`

## `Array.prototype.forEach`

## `Array.prototype.map`

## `Array.prototype.filter`

## `Array.prototype.reduce`

## `Array.prototype.reduceRight`

----------

# Date

## `Date.prototype.toJSON`

``` js
new Date().toJSON(); // "2010-12-06T16:25:40.040Z" 
```

## `Date.now()`

等同于new Date().getTime() or +new Date

----------

# Function

## `Function.prototype.bind`

``` js
var arr1 = ['1', '2', '3'],
arr2 = ['4', '5', '6'];
// 等同于arr1.push(arr2);
Array.prototype.push.apply(arr1, arr2);
alert(arr1);
```

``` js
var tooltip = { text: 'Click here to . . . ' },
overlay = { text: 'Please enter the number of attendees' };
function showText () {
    // really, do something more useful here
    alert(this.text);
}
tooltip.show = showText.bind(tooltip);
tooltip.show();
overlay.show = showText.bind(overlay);
overlay.show();
```

----------

# String

## `String.prototype.trim`

