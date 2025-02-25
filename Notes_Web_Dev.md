# Web Development DM-UY 2193

**Andrew Zhang (jz5476)**

## Week 5

### In class

1. git and github
2. intro to html and markdown

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

1. links
2. css

### Homework

- [x] Web Docs Box Model Challenge
- [ ] Github server page

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
