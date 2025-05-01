const form = document.getElementById("card_form");
const output = document.getElementById("output");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const job = document.getElementById("job").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    output.innerHTML = `
    <div class="card">
        <h2>${name}</h2>
        <p><${job}</p>
        <p>${email}</p>
        <p>${phone}</p>
    </div>`;

})
