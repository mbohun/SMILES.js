function smiles_init() {
    // this is only a demo, the real thing should scan the whole document
    // for canvas elements, take those that have 'data-smiles' attribute
    // and generate the molecules
    //
    var c = document.getElementById("2,4,6-Trichloroanisole");
    var smi = c.getAttribute("data-smiles");
    // var smi = c.dataset.smiles; // alternative

    console.log("[smi]" + smi);

    var tok = smiles_tokenize(smi);
    var tok_dump = "";
    for each (t in tok) {
	tok_dump = tok_dump + t + ","; 
    }

    console.log("[tok]" + tok_dump);

    var mat_adj = smiles_matrix_adjacency(tok);

    smiles_render_canvas(c, mat_adj);
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
function smiles_render_canvas(c, mat) {
    ctx = c.getContext("2d");
    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(0, 0, 320, 100);

    ctx.font = "16pt Arial";
    ctx.fillText(c.getAttribute("data-smiles"), 5, 20);
} 