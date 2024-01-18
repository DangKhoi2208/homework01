let n = parseInt(prompt("Nhap so n"))
let x = Math.floor((Math.random() * n) + 1);

console.log(x)
let number = Math.floor(Math.log2(n))

while (true) {
    let anwer = prompt("Dap an cua ban ");
    if (number == 0) {
        alert("Tro choi ket thuc")
        break;
    }


    if (number > 0) {

        if (anwer == x) {
            alert("Cau tra loi dung")
            break;
        } else if (anwer < x) {
            alert("Cau tra loi dung phai lon hon")
            number--

        } else if (anwer > x) {
            alert("Cau tra loi phai be hon")
            number--

        }
    }

}

