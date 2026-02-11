console.log("Elegance Wraps Website Loaded Successfully!");

const form = document.getElementById("customForm");
const giftBox = document.getElementById("giftPreview");
const previewMessage = document.getElementById("previewMessage");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const color = document.getElementById("color").value;
    const ribbon = document.getElementById("ribbon").value;
    const message = document.getElementById("message").value;

    giftBox.style.backgroundColor = color;
    giftBox.style.border = `5px solid ${ribbon}`;
    previewMessage.textContent = message;
});
