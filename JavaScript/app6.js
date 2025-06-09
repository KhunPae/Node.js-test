// let round = prompt("คุณต้องการเล่นกี่รอบ")
// for (var i=0; i<round; i++){
//     var answer = prompt("หัว  หรือ  ก้อย พิมพ์มาเลย !")
//     var random_answer = ""
//     if (Math.floor(Math.random() *10) <=4 ){
//         //หัว
//         random_answer = "หัว"
//     }
//     else{
//         //ก้อย
//         random_answer = "ก้อย"
//     }
//     if(answer == random_answer){
//         alert("ตอบถูกยินดีด้วย !")
//     }
//     else{
//         alert("ตอบผิด เสียใจด้วย !")
//     }
// }


while(prompt("ถ้าจะออกกด Exit") != "Exit"){
    document.getElementById("result").innerHTML += "ไม่ได้พิมพ์ Exit" + "<br>"
}