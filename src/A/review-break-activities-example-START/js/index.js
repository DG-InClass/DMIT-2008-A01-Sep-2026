/*
Enter JS here

HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/
console.log('index.js has loaded');

const handleSubmit = function(evt) {
    // client-side only
    evt.preventDefault(); // stop the POST to the webserver

    const targetForm = evt.target; // should be the <form> element
    const textInput = targetForm.elements['new-topic']; // <input />
    console.log(textInput.value);

    if(textInput.value.trim() !== '') {
        // Good, I have text... 🚀
        const list = document.querySelector('ul');
        // v1 - just "quick-n-dirty" approach 🐞
        list.innerHTML += `<li>${textInput.value.trim()}</li>`;

        textInput.value = ''; // clear the input
        textInput.classList.remove('is-invalid');
    } else {
        // Bad input 😢
        textInput.classList.add('is-invalid');
    }
    textInput.focus(); // drive keyboard focus to the input
}

const myForm = document.querySelector('form');
myForm.addEventListener('submit', handleSubmit);
