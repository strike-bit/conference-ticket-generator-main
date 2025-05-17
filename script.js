
// function generateTicket() {
//     const form = document.getElementById("form");
//     const nameInput = document.getElementById("name");
//     const github = document.getElementById("Github");
    
//     // Get the ticket section and elements
//     const ticketGithub = document.getElementById("ticket-git-hub");
//     const ticketName = document.getElementById("ticket-name");
//     const ticketId = document.getElementById("side-digit");

//     // When the form is submitted
//     form.addEventListener("submit", function (e) {
//         e.preventDefault(); // Stop the page from refreshing

//         const name = nameInput.value;
//          const Github = github.value;


//         if (name.trim() === "") {
//             alert("Please enter your name.");
//             return;
//         }

//         // Show the name
//         ticketName.textContent = name;
//         ticketGithub.textContent = Github;

//         // Create a random ticket ID
//         const randomId =   Math.floor(10000 + Math.random() * 900000);

//         // Show the ticket ID
//         ticketId.textContent = randomId;

//         // Clear the input
//         nameInput.value = "";
//     });
// }

// Call the function to set everything up
// generateTicket();
function generateTicket() {
    const form = document.getElementById("form");
    const nameInput = document.getElementById("name");
    const github = document.getElementById("GitHub");
     const emailInput = document.getElementById("email")

    const ticketGithub = document.getElementById("ticket-git-hub");
    const ticketName = document.getElementById("ticket-name");
    const spanName = document.getElementById("spaning");
    const spanEmail = document.getElementById("emails");
    const ticketId = document.getElementById("side-digit");
    // const ticketEmail = document.getElementById("ticket-email"); 

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = nameInput.value;
        const gitUser = github.value;
        // const userEmail = email.value;

        if (name.trim() === "") {
            alert("Please enter your name.");
            return ;
        }
        spanName.textContent = nameInput.value
        spanEmail.textContent = emailInput.value;
        ticketName.textContent = name;
        ticketGithub.textContent = gitUser;
        
        ticketId.textContent = Math.floor(1000 + Math.random() * 9000);
        // if (ticketEmail) ticketEmail.textContent = userEmail;

        document.getElementById("ticket").style.display = "block";

        // Optional: Clear inputs
        nameInput.value = "";
        github.value = "";
         emailInput.value = "";
    });
}

generateTicket();
