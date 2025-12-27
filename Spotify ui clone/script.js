
    // Input Focus Animation
    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
        input.addEventListener("focus", () => {
            input.style.transform = "scale(1.02)";
            input.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        });
        input.addEventListener("blur", () => {
            input.style.transform = "scale(1)";
            input.style.boxShadow = "none";
        });
    });

    // Button Hover Animation
    const button = document.querySelector("button");
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.05)";
        button.style.transition = "transform 0.2s ease-in-out";
    });
    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
    });

    // Form Submission Animation
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevents the form from reloading the page
        form.style.transform = "scale(0.8)";
        form.style.opacity = "0";
        form.style.transition = "all 0.5s ease";
        setTimeout(() => {
            form.innerHTML = "<h3 style='text-align: center;'>Message Sent! 🎉</h3>";
            form.style.transform = "scale(1)";
            form.style.opacity = "1";
        }, 500);
    });

document.querySelector("#footer").addEventListener("click",function(){
    document.querySelector.innerHTML
})
