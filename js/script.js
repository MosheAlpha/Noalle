function submitForm() {
    const name = document.getElementById("contact_name").value;
    const email = document.getElementById("contact_email").value;
    const text = document.getElementById("contact_message").value;
    // debugger
    if (name === "" || email === "" || text === "") return
    fetch('http://localhost:4000/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, text }),
    })
        .then(response => response.text())
        .then(message => {
            console.log(message);
        })
        .catch(error => console.error('Error:', error));
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}