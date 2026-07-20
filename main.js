
const you = document.getElementById('you')
const cmdBox = document.getElementById('cmd-box')

const commands = ["run", "sit",  "dance", "eat"]

let isGameActive = true
let isJump = false
let cmdInterval

// if (isGameActive) {
//     cmdInterval = setInterval(() => {
//         getRandomAction()
//     }, 5000)
// }

document.addEventListener('keypress', (ev) => {
    // console.log(ev.code)
    // getRandomAction()

    you.classList.add('jumping')
    const jumpTimeout = setTimeout(() => {
        you.classList.remove('jumping')
        // console.log("now")
    },1000)
})

function getRandomAction () {
    const isJumpGenerated = Math.floor(Math.random() * 2) == 1 ? true : false

    if (isJumpGenerated) {
        isJump = true
        cmdBox.textContent = "Jump!"
        console.log("jump")
    } else {
        isJump = false
        let randomAction = commands[Math.floor(Math.random() * commands.length)]
        cmdBox.textContent = randomAction
        console.log(randomAction)
    }

}

