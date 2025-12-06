function sommeIterative(n) {
    let somme = 0;
    for (let i = 1; i <= n; i++) {
        somme += i; 
    }
    return somme;
}
function sommeRecursive(n) {
    if (n === 0) {
        return 0; 
    } else {
        return n + sommeRecursive(n - 1);
    }
}
let n = Number(prompt("Entrez un nombre :"));

console.log("Somme avec boucle : " + sommeIterative(n));
console.log("Somme avec récursion : " + sommeRecursive(n));
