function smiles_init() {
    document.removeEventListener("DOMContentLoaded", smiles_init, false);
    // this is only a demo, the real thing should scan the whole document
    // for canvas elements, take those that have 'data-smiles' attribute
    // and generate the molecules
    //
    var c = document.getElementById("testcanvas");
    var s = c.getAttribute("data-smiles");
    // var s = c.dataset.smiles; // alternative

    smiles_render_canvas(s, c);
}

function smiles_render_canvas(smi, c) {
    console.log("[smi]" + smi);

    var tok = smiles_tokenize(smi);
    var tok_dump = "";
    for each (t in tok) {
	tok_dump = tok_dump + t + ","; 
    }

    console.log("[tok]" + tok_dump);

    var mat_adj = smiles_matrix_adjacency(tok);

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

function smiles_matrix_adjacency(tok) {

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

(function() {
    document.addEventListener("DOMContentLoaded", smiles_init, false)
})();
