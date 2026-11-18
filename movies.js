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

const imageUrl = "https://static.wikia.nocookie.net/fastandfurious/images/0/04/The_Fast_and_the_Furious_%28DVD_Cover%29.jpeg/revision/latest?cb=20150501043627";

function makePosterUrl(posterPath) {
    return imageUrl + posterPath;

}

console.log(makePosterUrl("/poster.jpg"))