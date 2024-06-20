# This repository has been migrated to the self-hosted ari-web Forgejo instance: <https://git.ari.lt/ari/slides.js>
# Slides.js

> A simple and small library for making slides on web front-end

# Features

-   Controllable
-   Configurable
-   Small, lightweight and fast
-   FOSS library and FOSS licensing (GPLv3)

# Setup

1. Include the slides.js library found in [src/index.js](/src/index.js)

```html
<head>
    <script src="/path/to/slides.js/index.js"></script>
</head>
```

2. Create a place for slides

```html
<!-- You can also use any element, including just the body -->
<div id="slides">
    <!-- ... -->
</div>
```

3. Add content, any HTML

```html
<!-- You can also use any element, including body -->
<div id="slides">
    <div>
        <h1>Slide 1</h1>
        <div>Content content content</div>
    </div>
</div>
```

One element is one slide

4. At the end of your body or whatever, initialise slides

```html
<script>
    init_slides("#slides"); // Pick an element with an ID "slides"
    display_slide(); // Display the first slide
</script>
```

5. Add the buttons

```html
<button onclick="display_slide();">Redisplay slide</button>
<button onclick="display_next_slide();">Display next slide</button>
<button onclick="display_prev_slide();">Display previous slide</button>
```

`onclick` triggers some JavaScript if a button is clicked

## Notes

You can choose when to display the slide with `display_slide()`,
you can do any initial and post-init preparation

## Minimal example

See [tests/index.html](/tests/index.html)

# Configuration

Slides.js is configured though one global object -- `SLIDEJS_CFG`,
it has these keys:

-   `err_style` -- The error styling
-   `slide_idx` -- Current slide index in the `SLIDEJS_SLIDES` array
-   `current_slide` -- The current slide element

# Documentation

This project is built with JSDoc standard documentation
