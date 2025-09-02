const sym = (...args) => {
  const vb = Math.round(args.length / 2)

  switch (args.length) {
    case 1:
      return args[0]
    case 2:
      return symmetricDiff(args[0], args[1])
    case 3:
      return symmetricDiffT(3, args)
    case 4:
      let firstArrF = args.slice(0,vb)
      let secondArrF = args.slice(vb)
      let resultAI = symmetricDiff(firstArrF[0], firstArrF[1])
      let resultBI = symmetricDiff(secondArrF[0], secondArrF[1])
      let result = symmetricDiff(resultAI, resultBI)
      return result
    case 6:
      let firstArrS = args.slice(0, (args.length / 2))
      let secondArrS = args.slice((args.length / 2))

      let resultFS;
      if (firstArrS.length === 3) {
        resultFS = symmetricDiffT(3, firstArrS)
      }

      let resultSS;
      if (secondArrS.length === 3) {
        resultSS = symmetricDiffT(3, secondArrS)
      }

      let resultS = symmetricDiff(resultFS, resultSS)
      console.log(resultS)
      return resultS
  }
}

const symmetricDiffT = (vb, args) => {
  let firstArr = args.slice(0,vb-1)
  let secondArr = args.slice(vb-1)
  let resultA = symmetricDiff(firstArr[0], firstArr[1])
  let resultB = symmetricDiff(secondArr[0], resultA)
  return resultB
}

const symmetricDiff = (arrA, arrB) => {
  let arrResult = []
  let setArrA = [...new Set(arrA)].sort()
  let setArrB = [...new Set(arrB)].sort()

  setArrA.forEach(item => {
    const findI = setArrB.includes(item)
    if (!findI) {
      arrResult.push(item)
    }
  })

  setArrB.forEach(item => {
    const findI = setArrA.includes(item)
    if (!findI) {
      arrResult.push(item)
    }
  })

  return [...new Set(arrResult)].sort()
}

//sym([1, 2, 3, 3], [5, 2, 1, 4]);
//sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])
//sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])
//sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])
