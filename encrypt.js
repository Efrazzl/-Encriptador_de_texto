const textarea = document.querySelector(".inputText");
textarea.addEventListener("input", evento => 
{
    textarea.style.height = "auto";
    textarea.style.height = `${evento.target.scrollHeight}px`;
})

//Para encriptar

const encryptButton = document.querySelector(".encrypt");

encryptButton.addEventListener("click", () => {
    let inputText = textarea.value;
    const keys = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]

    let validartexto = /[^a-zñ\s]/g;
    
    if (inputText.length > 0)
    {
        if (validartexto.test(inputText))
        {
            alert("SOLO LETRAS MINUSCULAS Y SIN ACENTOS!!");
        }
        else
        {
            for (let i = 0; i < keys.length; i++)
            {
                if (inputText.includes(keys[i][0]))
                {
                    inputText = inputText.replaceAll(keys[i][0], keys[i][1]);
                }
            }

            let resultText = document.querySelector(".resultText");
            resultText.textContent = inputText;
        
            const showResult = document.querySelector("#resultContent");
            const munieco = document.querySelector("#munheco");
            const mensajes = document.querySelector("#hideMesagges");
            showResult.classList.remove("hideContent");
            munieco.classList.add("hideContent");
            mensajes.classList.add("hideContent");
            showResult.classList.add("showResult");
        }
    }
    else
    {
        alert("Por favor, ingrese el texto");
    }
})

//Para desencriptar

const decryptButton = document.querySelector(".decrypt");

decryptButton.addEventListener("click", () => {
    let inputText = textarea.value;
    const keys = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]

    let validartexto = /[^a-zñ\s]/g;
    
    if (inputText.length > 0)
    {
        if (validartexto.test(inputText))
        {
            alert("SOLO LETRAS MINUSCULAS Y SIN ACENTOS");
        }
        else
        {
            for (let i = 0; i < keys.length; i++)
            {
                if (inputText.includes(keys[i][1]))
                {
                    inputText = inputText.replaceAll(keys[i][1], keys[i][0]);
                }
            }

            let resultText = document.querySelector(".resultText");
            resultText.textContent = inputText;
        
            const showResult = document.querySelector("#resultContent");
            const munieco = document.querySelector("#munieco");
            const mensajes = document.querySelector("#hideMesagges");

            showResult.classList.remove("hideContent");
            munieco.classList.add("hideContent");
            mensajes.classList.add("hideContent");
            showResult.classList.add("showResult");
        }
    }
    else
    {
        alert("Por favor, no olvides ingresar el texto");
    }
})

//Copiar

const copyButton = document.querySelector(".copyButton");

copyButton.addEventListener("click", () =>
{
    const resultText = document.querySelector(".resultText");
    navigator.clipboard.writeText(resultText.textContent);
    alert("Copiado al portapapeles");
})
