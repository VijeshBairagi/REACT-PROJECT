const root = document.getElementById('root');


function createReactElement(elementObject , parentNode){
  const { type , proto , innerText} = elementObject ;
  const element = document.createElement(type) ;
  for(const key in proto){
    element[key] = proto[key] ;
  }
  element.innerText = innerText ;
  parentNode.appendChild(element) ;
}




const createElement = {
  type : "a",
  proto :{
    href : "https://www.google.com",
    target : "_blank",
  },
  innerText : "Visit Google.com"
}

createReactElement(createElement , root) ;