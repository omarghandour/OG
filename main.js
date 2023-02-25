let dollar = document.getElementById('Dollar');
let pound = document.getElementById('Pound');

dollar.onkeyup = function(){
    pound.value = dollar.value * 32;
}

pound.onkeyup = function(){
    dollar.value = pound.value / 32;
}

let container = document.getElementById('container');

container.style.display = ('grid');
dollar.style.width = ('35%');
pound.style.width = ('35%'); 
dollar.style.height = ('100%');
pound.style.height = ('100%');