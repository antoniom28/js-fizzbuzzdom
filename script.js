const container = document.getElementById('contenitore');

for(let i = 1; i<101; i++){
    if(i %3 == 0 && i %5 == 0){
        console.log('FizzBuzz');
        container.innerHTML += '<div class=fizzbuzz style="background-color: rgb(98, 116, 219);">'+'FizzBuzz'+'<div class="fizzbuzz">'+i+'</div>'+'</div>';
    } else if(i %3 == 0){
        console.log('Fizz');
        container.innerHTML += '<div class=fizz style="background-color: rgb(202, 15, 40);">'+'Fizz'+'<div class=fizz>'+i+'</div>'+'</div>';
    } else if(i %5 == 0){
            console.log('Buzz');
            container.innerHTML += '<div class=buzz style="background-color: rgb(74, 202, 15);">'+'Buzz'+'<div class=buzz>'+i+'</div>'+'</div>';
        } else{
            console.log(i);
            container.innerHTML += '<div>' + i;
        }
}