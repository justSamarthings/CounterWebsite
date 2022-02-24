let count = document.getElementById('count')
let button = document.querySelectorAll('button')

let screenValue = ''

for(item of button){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        if(buttonText=='-'){
            if(count.value>'0'){
                count.value=count.value-1;
            }
        }
        else if(buttonText=='+'){
            // count.value=
            count.value++;
        }
        else{
            count.value=0;
        }
    })
}