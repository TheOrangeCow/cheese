const backendURL2 = "https://cheese-backend2.onrender.com/news";
const info = document.getElementById("newsletter-email");
//if (!info || info ) {
//    window.location.href = "personal_info.html";
//    return;
//}
const userData = {
    email: info.value, 
};
try {
    const res2 = await fetch(backendURL2, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
         body: JSON.stringify(userData)
    });

    const result = await res2.json();
    console.log("Added to news", result);
} catch (err) {
    console.error("Error saving user info:", err);
}