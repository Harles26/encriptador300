document.getElementById('encryptButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value.trim();
    if (inputText === "") {
        showMessage("Ningún mensaje fue encontrado. Ingresa el texto que desees encriptar o desencriptar.");
    } else {
        const encryptedText = btoa(inputText);
        showOutput(encryptedText);
    }
});

document.getElementById('decryptButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value.trim();
    if (inputText === "") {
        showMessage("Ningún mensaje fue encontrado. Ingresa el texto que desees encriptar o desencriptar.");
    } else {
        try {
            const decryptedText = atob(inputText);
            showOutput(decryptedText);
        } catch (error) {
            showMessage("Error al desencriptar el texto.");
        }
    }
});

document.getElementById('copyButton').addEventListener('click', () => {
    const outputText = document.getElementById('outputText').innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('Texto copiado al portapapeles');
    });
});

function showMessage(message) {
    document.getElementById('outputText').innerText = message;
    document.getElementById('copyButton').style.display = "none";
    document.getElementById('mensaje').style.display = "block"; // Mostrar la imagen
}

function showOutput(output) {
    document.getElementById('outputText').innerText = output;
    document.getElementById('copyButton').style.display = "block";
    document.getElementById('mensaje').style.display = "none"; // Ocultar la imagen
}
