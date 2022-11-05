# Custom navigation for Astro pages

This component helps you create a navigation tree structure based on an array of JSON objects you provide. This gives you full control and flexibility over what the tree looks like.

## Work In Progress

While this component mostly works, it is still in beta and should not be considered "production ready". Future version might include breaking changes.

I'm honestly just working on a solution to fit my very specific needs and mistakenly used the `astro-component` keyword ... which got it listed in the Astro Integration pages and gave this more attention than it deserves right now. But now that it's here, it might actually be of some use to other people as well.

## Basic usage

First install the module:

```js
npm install @prosellen/astro-navigation
```

Then inside of an `.astro` page, import the module, create an array of navigation objects, and pass it to the component inside of the body:

```js
---
import Navigation from '@prosellen/astro-navigation'

// Create an array with (nested) navigation objects
const navigationItems = [
  { url: "/", text: "Home" },
  {
    url: "/about-us/",
    text: "About Us",
    children: [
      {
        url: "/about-us/team/",
        text: "Team",
      },
    ],
  },
  { url: "/contact/", text: "Contact" },
]
---

<nav>
  <Navigation navigationItems={navigationItems} />
</nav>
```

This will render to something like this:

```html
<ul class="navigation-level-1">
  <li class="">
    <a href="/" class="">Home</a>
  </li>
  <li class="">
    <a href="/about-us/" class="">About Us</a>
    <ul class="navigation-level-2">
      <li class="">
        <a href="/about-us/team/" class="">Team</a>
      </li>
    </ul>
  </li>
  <li class="">
    <a href="/contact/" class="">Contact</a>
  </li>
</ul>
```

## Usage options

### Navigation Item array

```js
const navigationItems = [
  {
    text: "Home", // The text to display inside the `a` tag
    url: "/about-us/", // A unique URL to the page to be used as the `href` attribute
    redirect: "/about-us/team/", // (Optional) If set, this is used for the `href` attribute instead of the URL
    children: [{ ... }], // (Optional) An array of navigation items for nested navigation
  },
  ...
]
```

### Component

```js
<Navigation
  navigationItems=(navigationItems) // The array of navigation items
  startLevel=1; // Begin rendering the navigation at this level ss
  maxLevel=4; // Do not render nesting deeper than this level
/>
```

See the [demo pages](./demo/src/pages/) in the repository for usage examples
