---
layout: default
title: Web Dev Notes
Description: Class Notes
---

# Web Development DM-UY 2193

**Andrew Zhang (jz5476)**

## Week 5

### In class

1. Git and GitHub
2. Intro to HTML and Markdown

### Homework

- [x] add repo link to class sheet
- [x] README.md recipe page
- [x] index.html recipe page
- [x] Look through the Information Architecture File **and** watch the [What is Information Architecture? (UX Design Guide)](https://www.youtube.com/watch?v=OJLfjgVlwDo) video
- [x] notes about information architecture

### Information Architecture

_The structuring and organization of information in a digital space_

**Three elements:**

1. user
2. content
3. context

#### User

Determine target users -> different people looking for different kinds of information in different way

**mental model** - expectation of users

#### Content

Content should be relevant to users but not overwhelming

**cognitive load** - the brain power required to process information

display only relevant content -> limiting information

1. filters
2. sorting options
3. save options
4. comparison options

**content audit** - an inventory of all the information on a website or app
**visual hierarchy** - the structure of information
**gestalt principles** - how users organize information and build groups of patterns

#### Context

_how people find the information_
**SEO (Search Engine Optimization)** - affect the ranking of search results

## Week 6

### In class

1. Links
2. CSS
3. DebugTogether Challenge
4. Navigation Bars

### Homework

- [x] Github server page
- [x] Artwork reflection
- [x] MDN WEb Docs Box Model Challenge
- [x] Site updates

### CSS

Cascading Style Sheets

```css
<!-- Selector + Property + Value -->
<style>
    p {
        color: red;
        text-align: center;
    }
</style>
```

#### CSS Selector

##### id selector

```css
<style>
    #para1 {
    text-align: center;
    color: red;
    }
</style>

<p id="para1">Hello World!</p>
```

##### class selector

```css
<style>
    .center {
    text-align: center;
    color: red;
    }
</style>

<h1 class="center">Red and center-aligned heading</h1>
```

You can also specify that only specific HTML elements should be affected by a class.
HTML elements can also refer to more than one class.

```css
<style>
    p.center {
    text-align: center;
    color: red;
    }

    p.large {
    font-size: 300%;
    }
</style>

<h1 class="center">This heading will not be affected</h1>
<p class="center">This paragraph will be red and center-aligned.</p>
<p class="center large">
    This paragraph will be red, center-aligned, and in a large font-size.
</p>
```

#### How to Add CSS

1. External CSS
2. Internal CSS
3. Inline

```html
<!-- external css (which is preferred)-->
<head>
  <link rel="stylesheet" href="mystyle.css" />
</head>
```

### Navigation Bar

To remove the bullets in the unordered list, we need to modify the css:

```css
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
```

To make the list horizontal:

```css
/* approach 1 */
li {
  display: inline;
}

/* approach 2 */
li {
  float: left;
}
a {
  display: block;
  padding: 3px;
  background-color: pink;
}
```

#### Hover

```css
/* Change the link color to black on hover */
li a:hover {
  background-color: black;
}
```

#### Active/Current Navigation Link

```css
.active {
  background-color: #04aa6d;
}
```

#### Border Dividers

```css
/* Add a gray right border to all list items, except the last item (last-child) */
li {
  border-right: 1px solid gray;
}

li:last-child {
  border-right: none;
}
```

#### Fixed Navigation Bar Position

```css
ul {
  position: fixed;
  top: 0;
  width: 100%;
}
```

## Week 7

### In Class

1. Encode Me!
2. `<div>`
3. Gallery styling
4. Midterm Proposal
5. Image Styling

### Homework

- [x] Midterm project proposal
- [x] MDN Web Docs Challenge: Fundamental CSS comprehension

### `<div>`

The `<div>` elements is used as a container for other HTML elements.
For example, if we want to group sections for styling:

```css
div {
  width: 300px;
  margin: auto;
}
```

```html
<div>
  <h2>London</h2>
  <p>London is the capital city of England.</p>
</div>
```

#### Float

The CSS `float` property is used for positioning and formatting content and allows elements to be positioned horizontally, rather than vertically.

```css
.mycontainer {
  width: 100%;
  overflow: auto;
}
.mycontainer div {
  width: 33%;
  float: left;
}
```

#### Flex

Use for flexible responsive layout structure without using float or positioning

#### Grid

The Grid Layout Module offers a grid-based layout system, with rows and columns.

```css
.grid-container {
  display: grid;
  grid-template-columns: 33% 33% 33%;
}
```

### Image Styling

To avoid overflowing, we can set `max-width` to `100%`
The height will change as the size of the window changes

```css
img {
  max-width: 100%;
  height: auto;
}
```

Using `object-fit` allows the image to fill up the box, there are multiple attributes of it

```css
/* maintain the ratio of the image, but crop some parts */
.cover {
  object-fit: cover;
}

/* scale the image so that it fits the box, ratio might be changed */
.contain {
  object-fit: contain;
}
```

To create rounded images, use `border-radius` property
To make the opacity of image, use `opacity` property

```css
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
  opacity: 0.5; /* value from 0.0 to 1.0*/
}
```

#### Transforms / Transitions

##### CSS 2D Transforms

CSS transforms allow you to move, rotate, scale, and skew elements.

| Function       | Description                                                               |
| -------------- | ------------------------------------------------------------------------- |
| `matrix()`     | Defines a 2D transformation, using a matrix of six values                 |
| `translate()`  | Defines a 2D translation, moving the element along the X- and the Y-axis  |
| `translateX()` | Defines a 2D translation, moving the element along the X-axis             |
| `translateY()` | Defines a 2D translation, moving the element along the Y-axis             |
| `scale()`      | Defines a 2D scale transformation, scaling the element's width and height |
| `scaleX()`     | Defines a 2D scale transformation, scaling the element's width            |
| `scaleY()`     | Defines a 2D scale transformation, scaling the element's height           |
| `rotate()`     | Defines a 2D rotation, the angle is specified in the parameter            |
| `skew()`       | Defines a 2D skew transformation along the X- and the Y-axis              |
| `skewX()`      | Defines a 2D skew transformation along the X-axis                         |
| `skewY()`      | Defines a 2D skew transformation along the Y-axis                         |

##### CSS 3D Transforms

With the CSS `transform` property you can use the following 3D transformation functions:

| Function    | Description                                            |
| ----------- | ------------------------------------------------------ |
| `rotateX()` | Rotates an element around its X-axis at a given degree |
| `rotateY()` | Rotates an element around its Y-axis at a given degree |
| `rotateZ()` | Rotates an element around its Z-axis at a given degree |

##### CSS Transitions

CSS transitions allows you to change property values smoothly, over a given duration.

| Property                     | Description                                                                            |
| ---------------------------- | -------------------------------------------------------------------------------------- |
| `transition`                 | A shorthand property for setting the four transition properties into a single property |
| `transition-delay`           | Specifies a delay (in seconds) for the transition effect                               |
| `transition-duration`        | Specifies how many seconds or milliseconds a transition effect takes to complete       |
| `transition-property`        | Specifies the name of the CSS property the transition effect is for                    |
| `transition-timing-function` | Specifies the speed curve of the transition effect                                     |

## Week 8

### In Class

1. CSS Media Types
2. Flexbox
3. Responsive Website
4. [Flexbox Froggy](https://flexboxfroggy.com/)
5. Javascript

### Homework

- [x] No homework! Work on our midterm project!

### CSS Media Types

Different style rules for different media type
We can link to different stylesheets for different media or different window widths:

```css
<link rel="stylesheet" media="print" href="print.css" />
<link rel="stylesheet" media="screen" href="screen.css" />
<link
  rel="stylesheet"
  media="screen and (min-width: 480px)"
  href="example1.css"
/>
<link
  rel="stylesheet"
  media="screen and (min-width: 701px) and (max-width: 900px)"
  href="example2.css"
/>
```

### Flexbox

To use CSS Flexbox, we need to define a flex container

```html
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

```css
.flex-container {
  display: flex;
}
```

The properties we use for the flex container are:

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

#### CSS Responsive Flexbox

Use Flexbox to create different layout for different screen sizes and media types. For example, we can create a two-column layout for most of the screen and one-column layout for smaller screen sizes:

```css
.flex-container {
  display: flex;
  flex-direction: row;
}

/* Responsive layout - makes a one column layout instead of a two-column layout */
@media (max-width: 800px) {
  .flex-container {
    flex-direction: column;
  }
}
```

## Week 10

### In Class

- JS

### Homework

- [x] JS fundamentals

### Javascript

#### Output

`.innerHTML` – change the text between the opening and closing tags of an HTML element of our choosing.

> Use `innerHTML` when you want to change an HTML element.
> Use `innerText` when you only want to change the plain text.

```js
document.getElementById("output").innerHTML =
  "I just changed the content of this div using JavaScript";
```

`alert();` – displays a pop up window with the data we pass in to the ()

```js
alert(“Hello World!”);
```

`console.log();` – logs data to the javascript console (we can access this with Google Developer Tools or Firebug)

```js
console.log(“this is my first console log!”);
```

**Function** - statements to be executed together

```js
function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello Dolly!";
  document.getElementById("demo2").innerHTML = "How are you?";
}
```

#### Variables

- `var` - function-scoped, can be redeclared, updated
- `let` - block-scoped, can be updated, but not redeclared
- `const` - block-scoped, cannot be updated or redeclared, constant value

## Week 11

### In Class

- JS cont.

### Homework

- [x] MDN web docs Array Challenge
- [x] Grocery List
- [x] MDN Loop

### JS Objects

Initialization

```js
var myVar = {
  key: value,
  key: value,
};
```

Access properties using dot notation

```js
console.log(myVar.key);
```

### JS Loop

#### Basic Loops

`for` loop

```js
for (let i = 0; i < 100; i++) {
  console.log(i);
}
```

The three arguments in the `for` loop are:

1. **initializer**: initialize a counter variable
2. **condition**: when does the loop break
3. **final** expression: evaluate after each time the loop has gone through

`while` loop

```js
let i = 0;
while (i < 100) {
  console.log(i);
  i++;
}
```

`while` loop ends when the condition is met. Notice that it check the condition before each iteration.

`do...while` loop

```js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

let i = 0;

do {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
} while (i < cats.length);

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."
```

It is basically the same as a `while` loop, except the iteration will run once first, then the condition is checked. So the loop will be run at least one time.

#### Looping through collections

In JS, we can loop through collections, such as `array`, `set`, or `map` data structure

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

`map()` can do something to each item in a collection and create a new collection containing the changed items
noticed that the function is applied to each item each time, not the whole collection.

```js
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

`filter()` can test each item in a collection, and create a new collection containing only items that match

```js
function lCat(cat) {
  return cat.startsWith("L") || cat.startsWith("l");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]
```

#### Useful statements

To exit a loop, we will use a `break` statement

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
// Output: 0 1 2 3 4
```

To skip the current iteration, we use `continue` statement

```js
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}
// Output: 0 2 4 6 8
```

## Week 12

### In Class

- JSON
-

### Homework

### JSON

JSON (JavaScript Object Notation) is a lightweight text format for storing and sharing data.

```json
{
  "name": "Jane Doe",
  "age": 30,
  "isStudent": false
}
```

Parse JSON string -> JS object

```js
const jsonString = '{"name": "Jane"}';
const obj = JSON.parse(jsonString);
console.log(obj.name); // "Jane"
```

JS object -> JSON string

```js
const obj = { name: "Jane" };
const jsonString = JSON.stringify(obj);
```

JSON can represent:

- Objects
- Arrays
- Strings, numbers, booleans, and null
