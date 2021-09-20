/* 
* on prend la dernière valeur et l'utilise comme valeur pivote
* on compare les chiffres à la valeur pivot et on classe le chiffre comparé dans 2 tableaux
* il y aurait un tableau pour les plus petits chiffres et un pour les plus gros
*/

function quickSort(array)
{
    if (array.length == 1)
    {
        return array;
    }

    const pivot = array[array.length - 1];      //todo      on crée une consté pivot (le tableau commence à zéro d'où le -1 pour récupérer le dernier chiffre du tableau)
    const miniNumber = [];                     //todo      on prépare le tableau de mini pour mettre les petits chiffres 
    const maxiNumber = [];                    //todo      on prépare le tableau de maxi pour mettre les gros chiffres

    for (i = 0; i < array.length - 1; i++)
    {
        array[i] < pivot ? miniNumber.push(array[i]) : maxiNumber.push(array[i]);  //? on utilise une méthode terre pour trier les chiffres entre les tableaux
    }
    if (miniNumber.length > 0 && maxiNumber.length > 0) { //todo    on dit que si jamais il y a quelque chose dans le tableau des mini et maxi alors on lance l'algo

        console.log(miniNumber + " / " + maxiNumber); //? oon fait une console log pour avoir une visuelle de l'opération

          return [...quickSort(miniNumber), pivot, ...quickSort(maxiNumber)]; //? on fait deux straight operators pour que tout ce presente dans un seul tableau
    }
        else if (miniNumber.length > 0)             //todo s'il y a quelque chose dans le mini tableau mais pas le maxi on lance cette version 
        {
            return [...quickSort(miniNumber), pivot]; //! on n'oublie pas le pivot
        }
        else                                        //todo s'il y a quelque chose dans le maxi tableau mais pas le mini on lance cette version 
        {
            return [pivot, ...quickSort(maxiNumber)];
        }

}

console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
