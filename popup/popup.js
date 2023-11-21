console.log("scrapping popup js");
console.log('hello')
let profilePic, clientUserName;
let extractBtn = document.getElementById('extract');

extractBtn.addEventListener('click', () => {
    extractBtn.textContent = 'New Button added!'

})


document.getElementById('manipulateDOM').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'DOMManipulation' });
    });
});


