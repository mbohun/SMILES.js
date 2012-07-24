SMILES.js
=========

SMILES parser &amp; molecule renderering library

CONCEPT/IDEA example (of minimal) usage:

```html
<html>
   <head>
      <!-- 1. include the library -->	
      <script type="text/javascript" src="SMILES.js" />
   </head>
   <body>
      <!-- 2. use it -->
      <canvas data-smiles="COc1c(Cl)cc(Cl)cc1Cl" width="320" height="100"></canvas>
   </body>
</html>
```

<img src="https://github.com/mbohun/SMILES.js/blob/master/TCA-320x200.png" width=320 height=200></img>

1. Read the input [SMILES](http://en.wikipedia.org/wiki/SMILES), one can add other input formats later. 

2. Parse/interpret the input into some internal format/representation of the molecule/graph (for example adjacency matrix/list or incidence matrix, etc.).

3. From the internal format (adjacency matrix) calculate the coords for each node and edge ("model space"). Translate and render from "model space" into the viewport (in the above example/snippet set by the user in the canvas element attributes width and height).

NOTES/GOALS/IDEAS:
- minimalist
- modular/portable (modules should run in browser or server side)
- default config / global settings (canvas width, height)
- custom config (line thickness, colors, fonts, display of hydrogens)
- HTML5 canvas (2d, webgl), SVG
- pluggable molecule/graph layouts/styles
- optimization, caching (local storage, webworkers, etc.)
- 3rd party libs

I wanted a real/usable JavaScript/HTML5 project/experiment/playground/demo as I read:
- "JavaScript: The Good Parts" by Douglas Crockford
- "Supercharged JavaScript Graphics" by Raffaele Cecco
