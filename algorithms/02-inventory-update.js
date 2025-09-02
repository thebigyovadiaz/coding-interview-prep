const updateInventory = (arr1, arr2) => {
    let arrSet = []
    let itL = 0

    if (arr1.length > 0) {
        itL = arr1.length
    }

    if (arr2.length > 0) {
        itL = arr2.length
    }

    for (let i = 0; i < itL; i++) {
        if (arr1.length > 0) {
            let [quantity, name] = Object.values(arr1[i])

            if (arr2.length > 0) {
                let find = arr2.find(item => Object.values(item)[1] === name)
                if (find) {
                    let newQty = quantity + find[0]
                    arrSet.push([newQty, name])
                } else {
                    arrSet.push([quantity, name])
                }
            } else {
                arrSet.push([quantity, name])
            }
        }

        if (arr2.length > 0) {
            let [quantity2, name2] = Object.values(arr2[i])

            if (arr1.length > 0) {
                let findII = arr1.find(item => Object.values(item)[1] === name2)
                if (!findII) {
                    arrSet.push([quantity2, name2])
                }
            } else {
                arrSet.push([quantity2, name2])
            }
        }
    }

    let result = arrSet.sort((a, b) => compareToSort(a[1], b[1]))
    console.log(result)
    return result
}

const compareToSort = (a, b) => {
    if ( a < b ){
        return -1;
    }

    if ( a > b ){
        return 1;
    }

    return 0;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

//updateInventory(curInv, newInv);

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])

//updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])

//updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [])

//updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])

//updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]])
