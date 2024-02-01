const myGame = {
    1: "NFS",
    2: "GTA I",
    3: "GTA II",
    4: "GTA V",
    5: "GTA VI"
}


for (const key in myGame) {
   console.log(`Key - ${key} for : ${myGame[key]}`);
}