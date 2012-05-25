SMILES.js
=========

SMILES javascript parser &amp; renderer (HTML5 canvas, SVG)

example:

<html>
   <head>
      <script type="text/javascript" src="SMILES.js" />
   </head>
   <body>
      <canvas id="2,4,6-Trichloroanisole"
              width="320"
              height="100"
              data-SMILES="COc1c(Cl)cc(Cl)cc1Cl">
      </canvas>
   </body>
</html>

input: "COc1c(Cl)cc(Cl)cc1Cl"
       - something with 2 letter element like 'Cl', 'Br'
       - some cycles
       - handle %10 - %99
       - aromatics
       - single, double, tripple bonds

    1: break the string into tokens:
       "C","O","c","1","c","(","Cl",")","c","c","(","Cl",")","c","c","1","Cl"

    2: interpret the tokens into some internal format/representation:
       - adjacency matrix
       - adjacency list
       - incidence matrix

    3: from the internal format (adjacency matrix) starting from first element
       at [0.0, 0.0] calculate coords for each element, this way we should get
       the width and height (minx, miny; maxx maxy)
       
    4: translate and render from "model space" into the viewport
       set by the user in the canvas element attributes, 320 x 100 in this case
       (this applies to any of the HTML5 canvas/SVG/webgl output)
