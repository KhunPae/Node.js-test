//Function callback

function calculate(x,y,callback){
    console.log("กำลังคำนวณ...")
    setTimeout(()=>{ 
        const sum = x+y
        callback(sum)
    },3000)
}

function display (result){
    console.log(`ผลบวก = ${result}`)
}

calculate(100,50,display)
