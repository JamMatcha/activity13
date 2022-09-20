//3. declare 3 global variables

let username, password, role;

//4. create login function
function loginFunction(uname, pass,urole){
	if(uname != ""){
		return uname;
	}else{
		alert("input must not be empty.");
	}


	if(pass != ""){
		return pass;
	}else{
		alert("input must not be empty.");
	}

	if(urole != ""){
		return urole;
	}else{
		alert("input must not be empty.");
	}


}
username = loginFunction(prompt("Enter your username: "));
console.log("username is: " + username);
password = loginFunction(prompt("Enter your password: "));
console.log("password is: " + password);
role = loginFunction(prompt("Enter your role:  ").toLowerCase());
console.log("role is: " + role);

//5. check user's rile
switch(role){
	case 'admin':
		alert("Welcome back to the class portal, admin!");
		break;
	case 'teacher':
		alert("Thank you for loggin in, teacher!");
		break;
	case 'student':
		alert("Welcome to the class portal, student!");
		break;

	default: 
		alert("Role out of range.");
		break;

}



//6. Create a function
let result = 0;
function getAverage(num1, num2, num3, num4){
	result = (num1 + num2 + num3 + num4)/4;
	return result;

}
let num1 = parseInt(prompt("Enter num1: "));
console.log("num1: " + num1);
let num2 = parseInt(prompt("Enter num2: "));
console.log("num2: " + num2);
let num3 = parseInt(prompt("Enter num3: "));
console.log("num3: " + num3);
let num4 = parseInt(prompt("Enter num4: "));
console.log("num4: " + num4);

let average = getAverage(num1, num2, num3, num4);
console.log("average is: " + average);
console.log("average is (rounded off): " + Math.round(average));


//7. if  (avg<=74)
if(average<=74){
	console.log("Hello, student, your average is " + average + ". The letter equivalent is F");
}
//8. else if (avg >= 75 && avg <= 79)
	else if(average >=75 && average <=79){
	console.log("Hello, student, your average is " + average + ". The letter equivalent is D");
	}
//9. else if (avg >=80 && avg <=84)
	else if(average >=80 && average <=84){
	console.log("Hello, student, your average is " + average + ". The letter equivalent is C");
	}
//10. else if (avg >= 85 && <= 89)
	else if(average >=85 && average <=89){
	console.log("Hello, student, your average is " + average + ". The letter equivalent is B");
	}
//11. else if (avg >= 90 && avg <= 95)
	else if(average >=90 && average <=95){
	console.log("Hello, student, your average is " + average + ". The letter equivalent is A");
	}
//12. else if (avg > 96)
	else if(average > 96){
	console.log("Hello, student, your average is " + average + ". The letter equivalent is A+");
	}
