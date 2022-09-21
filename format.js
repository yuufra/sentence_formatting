const input = document.getElementById("input")
const output = document.getElementById("output")
const button = document.getElementById("button")

input.addEventListener('keyup',()=>{
    // const str = "ac-\ncess\nto the Internet\n\nSection 2:";
    const str = input.value;
    const replaced = str.replace(/\-\n/g, '').replace(/\n([^\n])/g, ' $1').replace(/\n[^\n]/g, '<br><br>')
    // console.log(replaced)
    output.innerHTML = replaced
})

button.addEventListener('click',()=>{
    navigator.clipboard.writeText(output.innerHTML)
})
