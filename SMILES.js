function smiles_init() {
    var c = document.getElementById("2,4,6-Trichloroanisole");
    var smi = c.getAttribute("data-smiles"); // OR c.dataset.smiles;

    alert(smi);
}