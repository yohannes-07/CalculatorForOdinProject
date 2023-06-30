document.addEventListener("DOMContentLoaded", function(event) {
    let body = document.querySelector('body');
    let result = document.querySelector('#result');
    
    let dark_mode_btn = document.querySelector('.dark_mode_btn');
    let clear = document.querySelector('#clear');
    let history = document.querySelector('#history');
    let equalTo = document.querySelector('#equalTo');
    let delete_single_num = document.querySelector('#delete_single_num');
    
    let Normal_btn = document.querySelectorAll('#Normal_btn');

  
    let initial_value = "";

    function isDigit(char) {
        return /^\d$/.test(char);
      } 

    function isOperator(operator) {
        return ["+", "-", "*", "/", "%"].includes(operator);
      }
      
   
    Normal_btn.forEach((Normal_btn, index) => {
      Normal_btn.addEventListener('click', function() {
        let text = this.innerHTML;

        if (isDigit(text)){
            console.log(initial_value[initial_value.length - 1])
            if(isOperator(initial_value[initial_value.length - 1]) === true){
                initial_value = initial_value + ' ' + text;
               
            }else{
                initial_value += text;
            }
            result.innerHTML = initial_value;

        }else if (isOperator(text)){
            if (initial_value === '' || isOperator[initial_value[-1]]){
                return;
            }else{
                initial_value = initial_value + ' ' + text;
                result.innerHTML = initial_value;
            }

        }else if (text === '.'){
            if (isOperator[initial_value[-1]]){
                initial_value = initial_value + ' ' + '0' + text;
                
            }else if (initial_value === ''){
                initial_value = initial_value  + '0' + text;
              
            }else{
                initial_value += text;
            }

            result.innerHTML = initial_value;
        }

      });
    });
    
    /*equal to button action*/
    equalTo.addEventListener('click', function() {
      if (result.innerHTML !== "") {
        history.innerHTML = result.innerHTML;
        result.innerHTML = eval(result.innerHTML);
        initial_value = eval(result.innerHTML);
      } else {
        alert('please enter any Number');
      }
    });
    
    /*dark_mode*/
    let dark_mode_status = false;
    dark_mode_btn.addEventListener('click', function() {
      body.classList.toggle('dark_mode_active');

      if (dark_mode_status === false) {
        this.innerHTML = '<i class="fa fa-lightbulb-o" aria-hidden="true"></i>';
        dark_mode_status = true;

      } else {
        this.innerHTML = '<i class="fa fa-moon-o" aria-hidden="true"></i>';
        dark_mode_status = false;
      }
    });
    
    /*clear all number*/
    clear.addEventListener('click', function() {
      result.innerHTML = "";
      initial_value = "";
    });
    
    /*delete single number*/
    delete_single_num.addEventListener('click', function() {
      result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 1);
      initial_value = result.innerHTML;
      
      if(initial_value[-1] === " "){
        result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 1);
        initial_value = result.innerHTML;
      }

    });
  });
  