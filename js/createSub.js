var map = new Map();
function createSub() {
	map = new Map();
	var sub1 = document.getElementById("sub1").value;
	var sub2 = document.getElementById("sub2").value;
	var sub3 = document.getElementById("sub3").value;
	var x = 0; 
	var y = 0;
	var result;
				var subject;
				var i = 0;
				var subjectResult = "";
				for(i=0;i<sub1;i++) {
					x = random(2,9); 
					y = '(     )';
					result = random2(10,81);
					subject = createSubject1(x,y,result) + '<p>';
					subjectResult += subject;
				}
				for(i=0;i<sub2;i++) {
					x = random(10,99); 
					y = random(10,99); 
					subject = createSubject2(x,y) + '<p>';
					subjectResult += subject;
				}
				for(i=0;i<sub3;i++) {
					x = random(10,99); 
					y = random(2,9); 
					subject = createSubject3(x,y) + '<p>';
					subjectResult += subject;
				}
				document.getElementById("result").innerHTML = subjectResult;
			}

			function createSubject2(x,y) {
				return '' + x + ' × ' + y + ' = ';
			}

			function createSubject3(x,y) {
				return '' + x + ' ÷ ' + y + ' = ';

			}

			function createSubject1(x,y,result) {
				if(x%2 == 0) {
					if(x*9 < result) {
						return '' + x + ' × ' + y + " > " + result;
					} else {
						result = random2(10,81);
						return createSubject1(x,y,result);
					}
				} else {
					if(x*9 < result) {
						return '' + y + ' × ' + x + " < " + result;
					} else {
						result = random2(10,81);
						return createSubject1(x,y,result);
					}
				}
			}
			function random(lower, upper) {
				var result = Math.floor(Math.random() * (upper - lower)) + lower;
				return result;
			}

			function random2(lower, upper) {
				var result = Math.floor(Math.random() * (upper - lower)) + lower;
				var v = map.get(result);
				if(typeof(v) == "undefined") {
					map.set(result,result);
					return result;
				} else {
					return random2(lower, upper);
				}
				
			}
