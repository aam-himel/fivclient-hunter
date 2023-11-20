document.addEventListener('DOMContentLoaded', function () {
    // Listen for messages from the content script
    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        if (message.reviews) {
            displayReviews(message.reviews);
        }
    });

    // Request data from the content script
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var currentTab = tabs[0];
        chrome.scripting.executeScript({
            target: { tabId: currentTab.id },
            function: scrapeReviews
        });
    });
});

function scrapeReviews() {
    console.log('scrapping the data')
    // Your scraping logic here
    // Example: Get all review elements
    // var reviews = document.querySelectorAll('.review-element');
    var reviews = ["herro", "htere"];

    // Process the reviews and send them to the extension popup
    var reviewsData = [];
    reviews.forEach(function (review) {
        reviewsData.push({
            text: review,
            // Add other relevant data as needed
        });
    });

    // Send the data to the extension popup
    chrome.runtime.sendMessage({ reviews: reviewsData });
}
