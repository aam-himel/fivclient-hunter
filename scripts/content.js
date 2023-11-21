chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
});

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.action === 'DOMManipulation') {
//         let profilePic = document.querySelector(
//             ".review-list .user-profile-image img[src]"
//         ).src;
//         let clientUserName = document.querySelector(
//             ".review-list .reviewer-details .username"
//         ).innerText;

//         console.log({ clientUserName: clientUserName, profilePic: profilePic });
//     }
// });

chrome.scripting.executeScript({
    function: function () {
        let profilePic = document.querySelector(
            ".review-list .user-profile-image img[src]"
        ).src;
        let clientUserName = document.querySelector(
            ".review-list .reviewer-details .username"
        ).innerText;

        console.log({ clientUserName: clientUserName, profilePic: profilePic });
        console.log('Content script executed!');
    },
});
