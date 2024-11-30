let firstSelect = document.getElementById('left');
let secondSelect = document.getElementById('right')
let input1 = document.getElementById('input')
let input2 = document.getElementById('res');
let btn = document.querySelector('button');
fetch('https://api.frankfurter.app/currencies')
.then(res=>(res.json()).then(msg=>dropDown(msg)))

function dropDown(res){
    let result = Object.entries(res)
    for(let i=0;i<result.length;i++){
          firstSelect.innerHTML +=  `<option value="${result[i][0]}">${result[i][0]}</option>`
          secondSelect.innerHTML += `<option value="${result[i][0]}">${result[i][0]}</option>`
    }
}
btn.addEventListener('click',()=>{
     let selectFirstVal = firstSelect.value;
     let selectSecondVal = secondSelect.value;
     let inputVal = input1.value;
     if(selectFirstVal === selectSecondVal){
        alert('enter different values ')
     }else{
      convert(selectFirstVal,selectSecondVal,inputVal);
     }
})
function convert(selectFirstVal,selectSecondVal,inputVal){
      fetch(`https://api.frankfurter.dev/v1/latest?base=${selectFirstVal}&symbols=${selectSecondVal}`)
        .then((resp) => resp.json())
        .then((data) => {
            let dat = Object.values(data.rates)[0]
            input2.value = dat;
        });
      
}


