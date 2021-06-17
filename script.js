const h2 = document.createElement('h2');
h2.textContent = "This is added by JS";
document.querySelector('body').appendChild(h2);


const buttonElement = document.getElementById('btn');
buttonElement.addEventListener('click', function() {
    alert ('Moose was adopted from Franciss Friends Inc in Astoria');
});

