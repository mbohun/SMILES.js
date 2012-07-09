(function (glob) {

    var dummy = 42,
	x = 666;

    function smiles_init() {
	document.removeEventListener("DOMContentLoaded", smiles_init, false);
	// this is only a demo, the real thing should scan the whole document
	// for canvas elements, take those that have 'data-smiles' attribute
	// and generate the molecules
	//
	var c = glob.win.document.getElementById("testcanvas");
	var s = c.getAttribute("data-smiles");
	// var s = c.dataset.smiles; // alternative

	render_canvas(s, c);
    }

    function render_canvas(smi, c) {
	console.log("[smi]" + smi);

	var tok = smiles_tokenize(smi);
	var tok_dump = "";
	for (var i = 0; i < tok.length; i++) {
	    tok_dump = tok_dump + tok[i] + ","; 
	}

	console.log("[tok]" + tok_dump);

	// var mat_adj = smiles_matrix_adjacency(tok);

	smiles_render(c, smi);
	//alert(smi);
    }

    // TODO: not the real thing yet!
    function smiles_tokenize(smi) {
	var tok = [];
	for (var i = 0; i < smi.length; i++) {
	    tok.push(String(smi.charAt(i)));
	}

	return tok;
    }

    // TODO: only a demo
    function smiles_render(c, mat) {
	ctx = c.getContext("2d");

	ctx.clearRect(0, 0, c.width, c.height);

	ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
	ctx.fillRect(0, 0, 320, 100);

	ctx.font = "16pt DejaVu";
	ctx.fillText(mat, 5, 20);
    }

    // TODO: proper check if we have window.document
    glob.win.document.addEventListener("DOMContentLoaded", smiles_init, false);
    glob.win["smiles_render_canvas"] = render_canvas;

    // return {
    // 	smiles_render_canvas: render_canvas
    // };

})({win:window});
