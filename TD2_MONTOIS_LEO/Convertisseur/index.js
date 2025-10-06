function convertirEuros(){
    const euro = parseFloat(document.getElementById("euro_input").value);

    const tauxUSD= 1.01;
    const tauxAUSD=1.47;

    if (!isNaN(euro)) {
        // Conversion
        document.getElementById('dollar_input').value = (euro * tauxUSD).toFixed(2);
        document.getElementById('au_input').value = (euro * tauxAUSD).toFixed(2);
    } else {
        // Si saisie invalide
        document.getElementById('dollar_input').value = '';
        document.getElementById('au_input').value = '';
        alert('Veuillez entrer un montant en euros valide.');
    }
}

document.getElementById('bouton_convertion').addEventListener('click', convertirEuros);
