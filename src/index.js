const sakiReciepe = {
    dal: 2,
    rice: 1,
    oil: 1
}

const sakiNewReceipe = {
    ...sakiReciepe,
    cook: "oven",
    oil: 1,
}

console.log(sakiReciepe)
console.log(sakiNewReceipe)
