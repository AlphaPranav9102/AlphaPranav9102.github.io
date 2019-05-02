submit.onclick = function(){
	var first_name = document.getElementById("First_Name").value;
	var last_name = document.getElementById("Last_Name").value;
  var email_address = document.getElementById("Email_Address").value;
	var memo = document.getElementById(memo").value;
  
  const fs = require('fs') 
  
  let data = first_name, last_name, email_name, memo;
 
  fs.writeFile('Message.txt', data, (err) => { 
      
  // In case of a error throw err. 
  if (err) throw err; 
  })
}
