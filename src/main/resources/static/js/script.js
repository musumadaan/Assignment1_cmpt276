
function add_a_row(){
    var table = document.getElementById("Table");
    let row = document.createElement("tr")
      // Create cells
      let c1 = document.createElement("td")
      let c2 = document.createElement("td")
      let c3 = document.createElement("td")
      let c4 = document.createElement("td")
      var c5 = document.createElement("td")
      c5.setAttribute("class" , "percent")
      c5.setAttribute("type", "text")
      c1.setAttribute("id", "c1")
      c2.setAttribute("id", "c2")
      c3.setAttribute("id", "c3")
      c4.setAttribute("id", "c4")
      c5.setAttribute("id", "c5")
      
      // Insert data to cells
      c1.innerText = "Activity 3"
      c2.innerText = "A3"
      c3.innerHTML = '<input class = "weights" style = "width : 25px" type ="text" />'
      c4.innerHTML = '<input class = "numerator" style = "width : 25px" type ="text"/>/<input class = "denominator" style = "width : 25px" type ="text" />'
      c5.innerHTML = " "
      
      


      // Append cells to row
      row.appendChild(c1);
      row.appendChild(c2);
      row.appendChild(c3);
      row.appendChild(c4);
      row.appendChild(c5);
      
      // Append row to table body
      table.appendChild(row)
}
function isNumber(num){
    try{
   if (num == ''){
    throw "Empty.. Please ensure to put the values..";
   }
   else if (isNaN(num)){
     throw"Invalid Input.. It is not a number..";
   }
   else{
    return num;
   }
}
catch(e){
    alert(e);
}
}

function check_denom(denominator){
    try{

   if (denominator == 0){
    throw "Invalid Input. Denominator can't be zero..";
   }
   else{
    return denominator;
   }
}
catch(e){
   alert(e);
}
}
document.getElementById("Table").addEventListener('input',function calc_percent(event){
    let row = event.target.closest("tr");
    let numer = row.querySelector(".numerator").value;
    let denom = row.querySelector(".denominator").value;
    let per_cent = row.querySelector(".percent");
        check_denom(parseFloat(denom));
    let result = parseFloat((numer/denom).toPrecision(5)*100);
    result = result % 1 !== 0 ? result.toFixed(1) : result;
    
    per_cent.textContent = result + "%";
    });

function calc_weighted(){
    let numer = document.querySelectorAll(".numerator");
    let denom = document.querySelectorAll(".denominator");
    let weights = document.querySelectorAll(".weights");
        let result = 0;
        let total_weight = 0;
        let total = 0;
        for(let i = 0; i < weights.length; i++){
            total += parseFloat(weights[i].value*(numer[i].value/denom[i].value));
            total_weight += parseFloat(weights[i].value);
        }
        result = (parseFloat(total/total_weight));
        isNumber(result);
        document.getElementById("result").innerHTML = result*100 + "/100";
    }
function calc_mean(){
    let numer = document.querySelectorAll(".numerator");
    let denom = document.querySelectorAll(".denominator");
    let weights = document.querySelectorAll(".weights");
let mean = 0;
let total = 0;
let result = 0;
for(let i = 0; i < numer.length; i++){
   mean += parseFloat(numer[i].value/denom[i].value);
   total++;
}
result = (parseFloat(mean/total))*100;
    isNumber(result);
   document.getElementById("result").innerHTML = result + "/100";
}



   






   

