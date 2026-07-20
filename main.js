
const you = document.getElementById('you')
const cmdBox = document.getElementById('cmd-box')

const commands = ["run", "sit",  "dance", "eat"]

document.addEventListener('keypress', (ev) => {
    // console.log(ev.code)
    getRandomAction()
})

function getRandomAction () {
    const isJump = Math.floor(Math.random() * 2) == 1 ? true : false

    if (isJump) {
        cmdBox.textContent = "Jump!"
    } else {
        let randomAction = commands[Math.floor(Math.random() * commands.length)]
        cmdBox.textContent = randomAction
    }
}