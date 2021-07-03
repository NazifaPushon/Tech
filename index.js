let form = document.getElementById('form')
let div = document.getElementById('maindiv')
form.addEventListener('submit',function(event){
  event.preventDefault();
  let output = false;
  let formData = {};
  let f = [];
  [...this.elements].forEach(element =>{
   if(element.type !== 'submit'){
    
      let anyNUM = parseInt(element.value)  
      formData[element.name] = anyNUM
      
 
      
      for(let i = anyNUM; i >= 1; i--) {
          
          for(let y = 1; y <= i; y++) {
              let sum =  i*i + y*y;
          
              // if (sum == anyNUM) {
              //     output = true;
              //     f[0]=i
              //     f[1]=y
                 
              // }
              if(sum == anyNUM){
                if(i!=0 || y!= 0){
                  output = true;
                  f[0]=i
                  f[1]=y
                }
              }
               
          }
        }
      if(output)  {
        let theNum = intr(anyNUM)        
        div.appendChild(theNum)
        let para1 =  paracreator(f[0])
        div.appendChild(para1)
        let sup1 = supCreator()
        div.appendChild(sup1)
        let plas = paracreator('+')
        div.appendChild(plas)
        let para2 = paracreator(f[1])
        div.appendChild(para2)
        let sup2 = supCreator()
        div.appendChild(sup2)
        let equal = paracreator('=')
        div.appendChild(equal)
        let answer = paracreator(anyNUM)
        div.appendChild(answer)
      }else{
        let isfalse = infr(anyNUM)
        div.appendChild(isfalse)
      }
   }
  })

  console.log(formData,output,f)
})
function intr(anyNUM){
        let istrue = document.createElement('p')
      istrue.innerHTML = `Your Number is ${anyNUM}. The number can be the sum of two square number`
      istrue.className = 'is-true'
      return istrue
}

function infr(anyNUM){
    let istrue = document.createElement('p')
  istrue.innerHTML = `Your Number is ${anyNUM}. The number can not be the sum of two square number`
  istrue.className = 'is-true'
  return istrue
}

function paracreator(innerHTML){
  let p1 = document.createElement('p')
  p1.innerHTML = innerHTML
  p1.className = 'created-p'
  return p1
}

function supCreator(){
  let sup = document.createElement('sup')
  sup.innerHTML = '2';
  sup.className = 'sup'
  return sup
}