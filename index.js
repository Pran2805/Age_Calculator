let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

let result = document.getElementById("result");


const calculateAge = () =>{
    let dob = new Date(userInput.value);
    let d1 = dob.getDate();
    let m1 = dob.getMonth()+1;
    let y1 = dob.getFullYear();

    let currentDate = new Date();
    let d2 = currentDate.getDate();
    let m2 = currentDate.getMonth()+1;
    let y2 = currentDate.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2-m1;
    }else{
        y3-=1;
        m3 = 12 + m2 - m1;
    }
    if(d2 >= d1){
        d3 = d2-d1;
    }else{
        m3-=1;
        d3 = getMonthInfo(y1, m1) + d2 -d1;
    }

    if(m3<0){
        m3 =11;
        y3-=1;
    }
    // console.log(y3, m3, d3)
    result.innerHTML = `You are ${y3} years ${m3} months and ${d3} days old`
}

function getMonthInfo(year, month){
    return new Date(year, month, 0).getDate();
}