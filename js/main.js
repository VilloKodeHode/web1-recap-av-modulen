// let ord1 = "hello"

// const ord2 = "World!"


// console.log(ord1 + " " + ord2)

// console.log(`${ord1} ${ord2}`)


// ord1 = "goodbye"

// console.log(`${ord1} ${ord2}`)


// let setning = `${ord1} ${ord2}`

// console.log(setning)

// let lengereSetning = `${setning} pluss noe annet`

// console.log(lengereSetning)

// let num1 = 1
// const num2 = 2.1

// console.log("num1 er: ", num1)
// console.log("num2 er: ", num2)

// const arrExample = ["banan", "appelsin", "mango"]

// console.log(arrExample)
// console.log("arrExample uten å endre på den: ", arrExample)

// arrExample.push("eple")
// console.log("arrExample, lagt til eple på slutten: ", arrExample)

// arrExample.pop()
// console.log("arrExample, fjernet eple: ", arrExample)
// console.log(arrExample.length)

// function getLastArrayElement(arr) {
//     return arr[arr.length-1]
// }
// console.log(getLastArrayElement(arrExample))



// const objExample = {
//     name: "Joakim",
//     lastName: "Villo",
// }

// console.log("objExample uten å endre på den: ", objExample)

// let newNum = 5;
// console.log(newNum)
// newNum++;
// console.log(newNum)
// newNum--;
// console.log(newNum)
// newNum*=newNum
// console.log(newNum)
// newNum/=newNum
// console.log(newNum)


let conNum = {}; // skriv inn et tall

const numCheck = () => {
    if (conNum === 10) {
        console.log(conNum, "er 10")
    } else if (conNum < 10) {
        console.log(conNum, "er mindre enn 10")
    } else if (conNum > 10) {
        console.log(conNum, "er større enn 10")
    } else {
        console.log(conNum, "er ikke et tall! Skriv inn et tall istedet")
    }
}

numCheck()


const betterNumCheck = () => {
    let result;
    if (conNum === 10) {
        return result = `er 10`
    } else if (conNum < 10) {
return result = "er mindre enn 10"
    } else if (conNum > 10) {
return result = "er større enn 10"
    } else {
return result = "er ikke et tall! Skriv inn et tall istedet"
    }
}

console.log(betterNumCheck())

if (betterNumCheck() === "er ikke et tall! Skriv inn et tall istedet") {
    console.log("failure!")
}

conNum = 10001

console.log(conNum % 2)

if (conNum % 2 === 0) {
    console.log("even")
} else if (conNum % 2 !== 0) {
    console.log("odd")
}
