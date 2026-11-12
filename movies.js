function showTonight() {
    console.log("Tonight's lineup:");
}

showTonight();

function announceMovie() {
    console.log("up next: " + title);
}

announceMovie("Shrek");

announceMovie("Fast & furious");

announceMovie("transformers");

function getEndpoint(page) {
    if (page === "upcoming") {
        return "upcoming"
    }

    else if (page === "popular") {
        return "popular"
    }

    else if (page === "top-rated") {
        return "top_rated"
    }

}