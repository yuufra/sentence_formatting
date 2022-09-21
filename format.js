const input = document.getElementById("input")
const output = document.getElementById("output")
const button = document.getElementById("button")
const copied = document.getElementById("copied")

input.addEventListener('keyup',()=>{
    // const str = "ac-\ncess\nto the Internet\n\nSection 2:";
    const str = input.value;
    const replaced = str.replace(/\-\n/g, '').replace(/\n([^\n])/g, ' $1').replace(/\n[^\n]/g, '<br><br>')
    // console.log(replaced)
    output.innerHTML = replaced
})

button.addEventListener('mousedown',()=>{
    // https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Animations/Tips#Run_an_animation_again
    copied.className = ""
    window.requestAnimationFrame((time)=>{
        window.requestAnimationFrame((time)=>{
            copied.className = "show"
        })
    })
    res = output.innerHTML.replace(/<br>/g, '\n')
    navigator.clipboard.writeText(res)
})
