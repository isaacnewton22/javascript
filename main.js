function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // L'élément à insérer dans la partie triée
        let j = i - 1;

        // Déplacer les éléments de arr[0..i-1] qui sont plus grands que key
        // d'une position vers la droite
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        // Placer key à la bonne position
        arr[j + 1] = key;
    }
    return arr;
}

// Exemple d'utilisation:
const arr = [12, 11, 13, 5, 6];
console.log("Original array: ", arr);
const sortedArray = insertionSort(arr);
console.log("Sorted array: ", sortedArray);