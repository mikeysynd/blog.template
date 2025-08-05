
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetbBtn = document.getElementById("resetBtn");

let count = 0;

increaseBtn.addEventListener('click', ()=>{
    count+= 1;
    document.getElementById("value").innerText = count;
});

decreaseBtn.addEventListener('click', ()=>{
    if(count > 0) {
        count -=1;
        document.getElementById("value").innerText = count;

    }else{
        count = 0;
    }
    
});

resetbBtn.addEventListener('click', ()=>{
    count = 0;
    document.getElementById("value").innerText = count;
});