SMILES.js (work in progress)
=========

##concept
example (of minimal) usage:

```html
<html>
   <head>
      <!-- 1. include the library -->	
      <script type="text/javascript" src="SMILES.js" />
   </head>
   <body>
      <!-- 2. use it -->
      <canvas data-smiles="COc1c(Cl)cc(Cl)cc1Cl" width="320" height="200"></canvas>
   </body>
</html>
```
That should produce/render an image (of 2,4,6-trichloroanisole molecule) looking something like: 
![Alt text](https://github.com/mbohun/SMILES.js/raw/master/TCA-320x200.png "COc1c(Cl)cc(Cl)cc1Cl")

(This one was made/generated from the above SMILES in [BKChem](http://bkchem.zirael.org) and edited with [GIMP](http://www.gimp.org))

##design & impl
1.  Read the input [SMILES](http://en.wikipedia.org/wiki/SMILES) (one can add other input formats later).
2.  Parse/interpret the input into some internal format/representation of the molecule/graph (for example adjacency matrix/list or incidence matrix, etc.).
3.  From the internal format (adjacency matrix) calculate the coords for each node and edge ("model space"). Translate and render from "model space" into the viewport (in the above example/snippet set by the user in the canvas element attributes width and height).

##notes
- minimalist
- modular (modules can be used in client AND on server, i.e. they do not make any assumption/restriction about the environment they run within), platform specific features are clearly separated from the 'generic' ones
- default config / global settings (canvas width, height)
- custom config (line thickness, colors, fonts, display of hydrogens), HTML5 canvas (2d, webgl), SVG
- engine config - configuration does not have to be restricted to visualization only, but for example we can let the user to chose 'single-threaded' OR 'multi-threaded' mode ([Web Workers](http://www.whatwg.org/specs/web-apps/current-work/multipage/workers.html)); 'multi-threaded' mode is suitable for processing large amount of (complex) input 
- pluggable molecule/graph layouts/styles
- optimization, caching (local storage, webworkers, etc.)
- 3rd party libs

##misc
I wanted a real/usable JavaScript/HTML5 project/experiment/playground/demo as I read:
* "JavaScript: The Good Parts" by Douglas Crockford
* "Supercharged JavaScript Graphics" by Raffaele Cecco

