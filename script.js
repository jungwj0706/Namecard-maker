const form = document.getElementById("card_form");
const output = document.getElementById("output");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const job = document.getElementById("job").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    output.innerHTML = `
    <div class="card">
        <h2>${name}</h2>
        <p>${job}</p>
        <p>${email}</p>
        <p>${phone}</p>
    </div>`;

})

document.getElementById("downloadBtn").addEventListener("click", function() {
    const card = document.querySelector(".card");
    if (!card) {
        alert("명함을 먼저 생성해주세요!!");
        return;
    }

    html2canvas(card).then(canvas => {
        const link = document.createElement("a");
        link.download = "name_card.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    })
})
