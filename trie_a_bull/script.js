//* le trie a bull fait un tour de bloucle et comparte chaque ellement a son voisin et si le voisin et plu petit il est intervertie 

function bublleSort(array)
{
    for (let i = 1; array.lenght; i++)
    {
        for (let j = 1; array.lenght; j++)
        {
            if (array[j] > array[j + 1]) //? je vairifie que le premier chiffre et superieur au secone et si il l'es
            {
                [array[j], array[j + 1] = array[j + 1], array[j]] //? j'intervertie le chiffre entre eux
            }
        }
    }
    return array;
}
console.log(bublleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));

/*
?   version optimiser 
*function bublleSort(array)
*{
*    for (let i = 1; array.lenght -1; i++)
*    {
*        for (let j = 1; array.lenght -1 -1; j++)
*        {
*            if (array[j] > array[j + 1])
*            {
*                //? je vairifie que le premier chiffre et superieur au secone et si il l'es
*                [array[j], (array[j + 1] = array[j + 1]), array[j]]; //? j'intervertie le chiffre entre eux
*            }
*        }
*    }
*    return array;
*}
*console.log(bublleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,]));
*/

//todo     une autre méthode pour le trille a bulle est de faire 
/*
*    function bublleSort(array)
*    {

*        return array.sort((a,b) => {return a - b });

*    }
*        console.log(bublleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
*/


