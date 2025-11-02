async function news() {
    const backendURL2 = "https://cheese-backend2.onrender.com/news";
    const info = document.getElementById("newsletter-email");

    const userData = {
        email: info.value.trim(),
    };

    try {
        const res2 = await fetch(backendURL2, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });

        const result = await res2.json();
        console.log("Added to news", result);

        // Show confirmation message
        document.getElementById('newsletter-message').style.display = 'block';
    } catch (err) {
        console.error("Error saving user info:", err);
    }
}

const form = document.getElementById('newsletter-form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await news();
    form.reset();
});

function ping2(){
    const backendUrl = "https://cheese-backend2.onrender.com/ping";
    window.addEventListener("load", async () => {
        try {
            await fetch(`${backendUrl}`);
            console.log("Backend ping successful — service is awake.");
        } catch (err) {
            console.warn("Backend ping failed. Service may be asleep or unreachable.");
        }
    });
}