
const you = document.getElementById('you')
const cmdBox = document.getElementById('cmd-box')

const commands = ["run", "sit",  "dance", "eat"]

let isGameActive = true
let isJump = false
let isJumping = false
let cmdInterval

// if (isGameActive) {
//     cmdInterval = setInterval(() => {
//         isJump = false
//         getRandomAction()
//         // cmdBox.textContent = "..."
//         let reactionTimeout = setTimeout(() => {
//             evalUserAction()
//         }, 1000)
//     }, 3000)
// }

document.addEventListener('keypress', (ev) => {
    // console.log(ev.code)
    // getRandomAction()

    you.classList.add('jumping')
    isJumping = true

    // evalUserAction()

    const jumpTimeout = setTimeout(() => {
        you.classList.remove('jumping')
        isJumping = false
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

function evalUserAction () {
    if (isJumping) {

        if (isJump) {
            console.log("ok")
        } else {
            console.log("not ok")
        }

    }
    else {
        if (isJump) {
            console.log("why not")
        } else {
            console.log("fine")
        }
        // console.log("no jump")
    }
}