SMILES.js
=========

SMILES javascript parser &amp; renderer (HTML5 canvas, SVG)

example (of minimal) usage:

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

- default width height
- default config / global settings
- custom config (line thickness, colors, fonts, siplay of hydrogens)

- graph theory, graph layout
- HTML5 canvas, SVG, HTML5 canvas webgl
- 3rd party libs



    1: input "COc1c(Cl)cc(Cl)cc1Cl"
       - something with 2 letter element like 'Cl', 'Br'
       - some cycles
       - handle %10 - %99
       - aromatics
       - single, double, tripple bonds

    2: break the string into tokens:
       "C","O","c","1","c","(","Cl",")","c","c","(","Cl",")","c","c","1","Cl"

    3: interpret the tokens into some internal format/representation:
       - adjacency matrix
       - adjacency list
       - incidence matrix

    4: from the internal format (adjacency matrix) starting from first element
       at [0.0, 0.0] calculate coords for each element, this way we should get
       the width and height (minx, miny; maxx, maxy)
       
    5: translate and render from "model space" into the viewport
       set by the user in the canvas element attributes, 320 x 100 in this case
       (this applies to any of the HTML5 canvas/SVG/webgl output)
