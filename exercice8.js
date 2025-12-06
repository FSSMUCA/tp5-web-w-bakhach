function totalAvecRemise(total, remise) {
    let totalFinal = total - (total * remise / 100);
    return totalFinal;
}
let totalHT = Number(prompt("Entrez le total HT :"));
let remise = Number(prompt("Entrez la remise en % :"));

let totalFinal = totalAvecRemise(totalHT, remise);
console.log("Total final après remise : " + totalFinal);
