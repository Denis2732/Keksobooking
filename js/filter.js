//В работе...

var a = document.querySelector('#housing-type');

function filterType(data){
        var e = a.value;
        if(e === 'any'){
          console.log(0);
        }
        if(e === 'flat'){
         console.log(1);
        }
        if(e === 'house'){
          console.log(2);
        }
        if(e === 'bungalo'){
          console.log(3);
        }
      } 

 a.addEventListener('change', filterType);
 