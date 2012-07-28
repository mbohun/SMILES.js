(function (glob) {

    function smiles_init() {
	glob.win.document.removeEventListener("DOMContentLoaded", smiles_init, false);
	// this is only a demo, the real thing should scan the whole document
	// for canvas elements, that have a 'data-smiles' attribute set
	// and generate the molecules for those.
	//
	var c = glob.win.document.getElementById("testcanvas");
	var s = c.getAttribute("data-smiles");
	// var s = c.dataset.smiles; // alternative

	render_canvas(s, c);
    }

    function render_canvas(smi, c) {
	console.log("[smi]" + smi);

	var tok = smiles_tokenize(smi);
	console.log("[tok]" + tok);

	// var mat_adj = smiles_matrix_adjacency(tok);
	smiles_render(c, tok);
    }

    var smiles_tokenize = (function () {
        "use strict";

        var table = [
            "(", ")", "=", "#", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "/", "\\",
	    "[", "]", "@", ".", "+", "-", "%", "*"

	].concat([
            "H",                                                                                                  "He",
	    "Li", "Be",                                                             "B",  "C",  "N",   "O", "F",  "Ne",
	    "Na", "Mg",                                                             "Al", "Si", "P",   "S", "Cl", "Ar",
	    "K",  "Ca", "Sc", "Ti", "V",  "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr",
	    "Rb", "Sr", "Y",  "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I",  "Xe",
            "Cs", "Ba", "Lu", "Hf", "Ta", "W",  "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn",
	    "Fr", "Ra", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn",
	                      "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb",
                              "Ac", "Th", "Pa", "U",  "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No"

        ].sort().reverse().concat(["c", "n", "o", "p", "s"])),

        match_symbol = function (smiles, offset, tokens) {
            var i, symbol;
            for (i = 0; i < table.length; i += 1) {
                symbol = table[i];
                if (symbol === smiles.substr(offset, symbol.length)) {
                    tokens.push(symbol);
                    return symbol.length;
                }
            }
            return 0;
        };

	console.log("table:" + table);

        return function (smiles) {
            var tok = [],
                i = 0,
                match = 0;

            while (i < smiles.length) {
                match = match_symbol(smiles, i, tok);
                if (match > 0) {
                    i = i + match;

                } else {
                    console.log("smiles_tokenize error: no match[" + i + "]:"
				+ smiles.substr(i, 1));
                    i = i + 1;
                }
            }
            return tok;
        };
    }());

    // TODO: only a demo
    function smiles_render(c, mat) {
	var ctx = c.getContext("2d");

	ctx.clearRect(0, 0, c.width, c.height);

	ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
	ctx.fillRect(0, 0, 320, 100);

	ctx.font = "10pt DejaVu";
	ctx.fillText(mat, 5, 20);
    }

    // TODO: proper check if we have window.document
    glob.win.document.addEventListener("DOMContentLoaded", smiles_init, false);
    glob.win["smiles_render_canvas"] = render_canvas;

    // return {
    // 	smiles_render_canvas: render_canvas
    // };

})({win:window});
