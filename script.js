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
const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
});
