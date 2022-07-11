var a = 10
var b = 20
var c = null

document.write("a = " + a + "<br>")
document.write("b = " + b + "<br>")
document.write("c = " + c + "<br><br><br>")

c = a
a = b
b = c
c = null

document.write("a = " + a + "<br>")
document.write("b = " + b + "<br>")
document.write("c = " + c + "<br><br><br>")