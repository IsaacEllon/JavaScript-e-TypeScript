let varA = 'A';  // varA deve apontar para o valor de varB
let varB = 'B';  // varB deve apontar para o valor de varC
let varC = 'C';  // varC deve apontar para o valor de varA

// const varATemp = varA
// varA = varB;
// varB = varC;
// varC = varATemp;

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)
