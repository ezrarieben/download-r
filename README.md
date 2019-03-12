# download-r
A jQuery Plugin that enables downloading a file directly from a link instead of opening it<br />
<br />
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
## Setting up download-r
1. Import the [jQuery library](https://www.google.com "jQuery's CDN Page")
2. Load the download-r script in your HTML after the body
```html
<script type="text/javascript" src="jquery.download-r.min.js"></script>
```
3. Use the following call to activate the plugin
```javascript
$(document).ready(function(){
  $(document).downloadr();
});
```
4. Add an [`<a>`](https://www.w3schools.com/tags/tag_a.asp "W3Schools A tag explenation") tag to your HTML
```html
<a class="download-r" href="foo/bar.pdf">
```
| Attribute       | Description                                       |
| --------------- | ------------------------------------------------- |
| `class`         | Used to identify the links that are downloadable  |
| `href`          | Link to file that is to be downloaded             |
## Changing defaults
1. Use JSON to change the options
    1. Example of changing the link selector class:
        ```javascript
        $(document).downloadr({
          elements: {
            selectors: {
              link: '.download-link',
            }
          }
        });
        ```
### Available options

| Option                     | Description                                                          | Default value |
| -------------------------- | -------------------------------------------------------------------- | ------------- |
| `elements.selectors.link`  | The selector used to identify the download links                     | `.download-r` |
---
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
