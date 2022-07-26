
export let name = 'RENZO';
export const age: number = 34;
export const isValid: boolean = true;

name = 'LOURDES';

export const templateString = ` Esto es un string
multilinea
que puede tener
" dobles
' simple
inyectar valores ${ name }
expresiones ${ 1 + 1 }
números: ${ age }
booleanos: ${ isValid }
`;

console.log( templateString );
