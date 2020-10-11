let myGames = [
    "AS", "NFS", "Dota", "RS", "COD", 'CS'
    
]

myGames.push("OW")

myGames.pop()

let myNum = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
]

myNum = [...myGames]

myNum.push("BD")

myNumJson = JSON.stringify(myNum)

console.log(JSON.parse(myNumJson))

for(let i = 0; i<myNum.length; i++)

console.log(i)