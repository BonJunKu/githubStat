# Initialization

## Getting Started with Vanilla JS

### Directory Structure

```
src\
    js\
        index.js
    styles\
        style.css
index.html
```

### Configure index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>App</title>
  </head>
  <body></body>
</html>
```

1. On VS Code, you can configure a skeleton code of `index.html` with `!` + `Enter`.
2. `meta` tag should be inside of `<head>` tag.
3. The meta viewport tag, which is not a standard tag, is used to support Apple browsers, and it refers to the area that is actually visible to users, regardless of the size of the content in the browser.
4. The default size of the viewport is 980px.
5. The device width of the viewport is the resolution/density.

### Link a CSS file

```html
<!-- index.html -->
<head>
  <link rel="stylesheet" href="./src/styles/style.css" />
</head>
```

1. Do not use `@import`.

### Link a JavaScript file

```html
<!-- index.html -->
<body>
  <script src="src/index.js" type="module" />
</body>
```

1. Locate script tag at the end of `<body/>` tag.

## Reference

1. <a href = "https://ui.toast.com/fe-guide/ko_HTMLCSS">TOAST UI - HTML, CSS Guideline</a>
