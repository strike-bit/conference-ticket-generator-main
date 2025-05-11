
function generateTicket() {
    const form = document.getElementById("form");
    const nameInput = document.getElementById("name");
    const github = document.getElementById("Github");

    // Get the ticket section and elements
    const ticketGithub = document.getElementById("ticket-git-hub");
    const ticketName = document.getElementById("ticket-name");
    const ticketId = document.getElementById("side-digit");

    // When the form is submitted
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Stop the page from refreshing

        const name = nameInput.value;



        if (name.trim() === "") {
            alert("Please enter your name.");
            return;
        }

        // Show the name
        ticketName.textContent = name;
        ticketGithub.textContent = github.value

        // Create a random ticket ID
        const randomId = "TICKET-" + Math.floor(100000 + Math.random() * 900000);

        // Show the ticket ID
        ticketId.textContent = randomId;

        // Clear the input
        nameInput.value = "";
    });
}

// Call the function to set everything up
generateTicket();
