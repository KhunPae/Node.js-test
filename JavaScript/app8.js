function sayHello (userName, userLastname) //Parameter คือตัวแปรที่เกิดมาพร้อม Function ใช้งานใน Function
{
    return "Hello " + userName +" " +userLastname
}
function getAge()
{
    return 28
}
let userInput = prompt(" Input Your Name :")
alert(sayHello(userInput, "Junjare")) //Argument ข้อมูลที่ส่งให้ Function