document.addEventListener("DOMContentLoaded", () => {
    const avatarUpload = document.getElementById("avatar-upload");
    const submitBtn = document.getElementById("submitBtn");

    let avatarDataURL = null;

    avatarUpload.addEventListener("change", function (e) {
        const file = e.target.files[0];
        if (!file) return;
        if (file.size > 500 * 1024) {
            alert("Image must be less than 500KB");
            return;
        }
        const reader = new FileReader();
        reader.onload = function (e) {
            avatarDataURL = e.target.result;
        };
        reader.readAsDataURL(file);
    });

    submitBtn.addEventListener("click", () => {
        const fullName = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const github = document.getElementById("github").value.trim();

        if (!fullName || !email || !github) {
            alert("Please fill in all fields.");
            return;
        }

        const ticketId = `#TKT${Math.floor(100000 + Math.random() * 900000)}`;

        const ticketData = {
            name: fullName,
            email,
            github,
            avatar: avatarDataURL,
            ticketId
        };

        localStorage.setItem("ticketData", JSON.stringify(ticketData));

        
        window.location.href = "ticket.html";
    });
});
