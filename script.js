const fontsFamily = [
        "Impact,Charcoal,sans-serif",
        "Brush Script MT, cursive",
        "Luminari, fantasy",
        "Comic Sans MS, cursive",
        "American Typewriter, serif",
        "Verdana, Geneva, Tahoma, sans-serif",
        "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"    
    ]

const fontWeight = [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "bold",
    "bolder",
    "lighter"
    ]


    const beautifyBtn = document.getElementById("beautify_btn")
    const nameDisplay = document.getElementById("name")
    const inputValue = document.getElementById("input-el")
    const inputBtn = document.getElementById("input-btn")


    beautifyBtn.addEventListener("click", function(){
        let randomFont = Math.ceil(Math.random() * fontsFamily.length) 
        nameDisplay.style.fontFamily = fontsFamily[randomFont]
    })


    beautifyBtn.addEventListener("click", function(){
        let randomFont = Math.ceil(Math.random() * fontWeight.length) 
        nameDisplay.style.fontWeight = fontWeight[randomFont]
    })


    beautifyBtn.addEventListener("click", function(){
        let hex = "#" + Math.floor(Math.random()*16777215).toString(16);
        nameDisplay.style.color = hex
        beautifyBtn.style.background = hex
        inputBtn.style.background = hex
    })


function updateValue() {
  let textUpdate = inputValue.value;
  document.getElementById("name").innerHTML = textUpdate;
}

    