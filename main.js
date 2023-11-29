let reselt = document.querySelector("#display");
let btn_result = document.querySelector(".btn_res")
let history = document.querySelector("#history");
let deleteN = document.querySelector(".delete");

let buttons = Array.from(document.querySelectorAll("button"));

buttons.map((button) => {
    button.addEventListener("click", (event) => {
        switch (event.target.innerHTML) {
            case "c":
                reselt.innerHTML = "0";
                break;
            case "=":
                try {
                    reselt.innerHTML = eval(reselt.innerHTML);
                }
                catch (e) {
                    reselt.innerHTML = "Error!";
                }
                break;
            case "+/-":
                reselt.innerHTML = "-";
                break;
            case "%": 
                let passedText = reselt.innerHTML + "/100";
                reselt.innerHTML = eval(passedText)
                break;
            default: 
                if (reselt.innerHTML === "0" && event.target.innerHTML !== ".") {
                    reselt.innerHTML = event.target.innerHTML;
                } 
                else {
                    reselt.innerHTML += event.target.innerHTML;
                }
       }

       deleteN.onclick = () => {
         reselt.innerHTML = reselt.innerHTML.slice(0, -1);
       }

       btn_result.innerHTML = reselt.innerHTML;

    });
});