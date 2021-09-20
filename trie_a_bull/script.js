//* La trie à Bull fait un tour de boucle et comparse chacun tellement a son voisin et si le voisin et plu petit il est interverti

function bublleSort(array)
{
    for (let i = 0; i < array.length; i++)
    {
        for (let j = 0; j < array.length; j++)
        {
            if (array[j] > array[j + 1]) //? je vérifie que le premier chiffre est supérieur aux secondes et se les
            {
                // console.log('valeur avant: ' + array[j]);    
                [array[j], array[j + 1]] = [array[j + 1], array[j]] //? j'intervertit les chiffres entre eux
                // console.log('valeur apres: ' + array[j]);
            }
        }
    }
    console.log(array);
    return array;
}
console.log(bublleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));

/*
?   version optimiser 
*function bublleSort(array)
*{
*    for (let i = 1; array.length -1; i++)
*    {
*        for (let j = 1; array.length -1 -1; j++)
*        {
*            if (array[j] > array[j + 1])
*            {
*                //? je vérifie que le premier chiffre est supérieur aux secondes et se les
*                [array[j], (array[j + 1] = array[j + 1]), array[j]]; //? j'intervertit les chiffres entre eux
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


