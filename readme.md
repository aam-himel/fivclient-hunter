# Fiverr Client Hunter

<p ><strong>Fiverr Client Hunting</strong> analyzes the fiverr reviews and find client names and profile pictures</p>
<br/>

## Todos

Initialization :

- [x] menifest json
- [x] icons
- [x] popup html
- [x] popup js
- [x] content js

Functional:

- [ ] acive tab html info
- [ ] extracting the reviews
- [ ] extracting the client info
- [ ] passing data using sentMessage
- [ ] shwoing parsed data to ui
- [ ] styling

Features and updates:

- [ ] copy functionality
- [ ] saving to database
- [ ] extra
- [ ] collecting query params
- [ ] collecting other info for further use

## Sequence

1. Popup js is for event like click button etc
2. Content js is for dom manupulation
3. Backround js is for injecting script dynamically

## DOM

```js
let profilePic = document.querySelector(
  ".review-list .user-profile-image img[src]"
).src;

let clientUserName = document.querySelector(
  ".review-list .reviewer-details .username"
).innerText;
```
