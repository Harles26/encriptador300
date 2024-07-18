document.getElementById('inputText').addEventListener('input', () => {
    normalizeInput();
});

document.getElementById('encryptButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    if (inputText.trim() === "") {
        document.getElementById('outputText').innerText = "Ningún mensaje fue encontrado. Ingresa el texto que desees encriptar o desencriptar.";
        document.getElementById('copyButton').style.display = "none";
        document.getElementById('mensaje').style.display = "block";
    } else {
        const encryptedText = btoa(inputText); 
        document.getElementById('outputText').innerText = encryptedText;
        document.getElementById('copyButton').style.display = "block";
        document.getElementById('mensaje').style.display = "none";
    }
});

document.getElementById('decryptButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    if (inputText.trim() === "") {
        document.getElementById('outputText').innerText = "Ningún mensaje fue encontrado. Ingresa el texto que desees encriptar o desencriptar.";
        document.getElementById('copyButton').style.display = "none";
        document.getElementById('mensaje').style.display = "block";
    } else {
        try {
            const decryptedText = atob(inputText);
            document.getElementById('outputText').innerText = decryptedText;
            document.getElementById('copyButton').style.display = "block";
            document.getElementById('mensaje').style.display = "none";
        } catch (error) {
            document.getElementById('outputText').innerText = "Error al desencriptar el texto.";
            document.getElementById('copyButton').style.display = "none";
            document.getElementById('mensaje').style.display = "block";
        }
    }
});

document.getElementById('copyButton').addEventListener('click', () => {
    const outputText = document.getElementById('outputText').innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('Texto copiado al portapapeles');
    });
});

function normalizeInput() {
    const inputText = document.getElementById('inputText');
    inputText.value = inputText.value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}