let lotto_number = prompt("พิมพ์เลขที่ต้องการ : ")
let random_number = Math.floor(Math.random()*1000 )
document.getElementById("random").innerHTML = random_number
if(lotto_number == random_number){
document.getElementById("result").innerHTML = "ยินดีด้วยคุณถูกรางวัล"
}
else{
    document.getElementById("result").innerHTML = "เสียใจด้วยด้วยคุณไม่ถูกรางวัล"
}