// import { addBlock, removeBlock } from "./js/inventory.js";

const game = document.querySelector('#game');

const blocksObj = {
    0: "none",
    1: "cloud",
    2: "grass",
    3: "dirt",
    4: "stone",
    5: "wood",
    6: "leaves",
    7: "cobblestone"
}

export let blockMatrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0,],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,],
    [0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0,],
    [0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 0, 0, 0, 0,],
    [0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0,],
    [0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0,],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,],
]
let inventory = document.querySelector('.content');
let tool = document.querySelectorAll('#tool');





export function draw() {
    for (let i = 0; i < blockMatrix.length; i++) {
        for (let j = 0; j < blockMatrix[i].length; j++) {
            const block = document.createElement('div');
            block.classList.add(blocksObj[blockMatrix[i][j]]);
            block.addEventListener('click', (e) => {
                if (blockMatrix[i][j] > 1 || blockMatrix[i][j] === "") {
                    if (blockMatrix[i][j] === 2) {
                        inventory.classList.add("dirt");
                        block.className = "";
                    } else if (blockMatrix[i][j] === 4) {
                        inventory.classList.add("cobblestone")
                        block.className = "";
                    } else {
                        inventory.classList.add(e.target.className);
                        block.className = "";
                    }
                }

            })
            game.appendChild(block);
        }
    }
}

export function buildMode() {
    inventory.addEventListener('click', () => {
        if (inventory !== "") {
            const game = document.querySelector('#game');
            inventory.classList.toggle("active");
            game.querySelectorAll('div').forEach(block => {
                block.addEventListener('click', () => {
                    if (inventory.classList === 'active'){
                        if (["", "none", "cloud"].includes(block.classList)) {
                            block.classList.add([...(inventory.classList)].find(className => {
                                if(['active', 'content'].includes(className)) {
                                    return false;                                    
                                }
                                return true;
                            }));
                        }

                    }
                })
            })
            // for (let i = 0; i < blockMatrix.length; i++) {
            //     for (let j = 0; j < blockMatrix[i].length; j++) {
            //         const block = blockMatrix[i][j];
                    
            //     }
            //     console.log(e.target.className);
            // }
        }
    })
}

// export function tools() {
//     tool.addEventListener('click', () => {
//         tool.classList.toggle("active");
//     })
// }