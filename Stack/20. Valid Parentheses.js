/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    if(s.length <=1 ) return false
  
    let stack = [];
  
    let item = {
      "(": ")",
      "{": "}",
      "[":"]"
    }
  
    for(let char of s){
      console.log(char, 'in loop')
     if(item[char]){
       stack.push(char)
       console.log(char, 'in condition')
       console.log(stack)
     }else{         
       let top = stack.pop(char)     
       console.log(top, 'top')
  
       console.log(char, ' and ', item[top])
       if(char !== item[top]){
         return false 
       }
     }
    }
  
    return stack.length > 0 ? false: true
  
  
  
      
  };