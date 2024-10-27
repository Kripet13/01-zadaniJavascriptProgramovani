function ageControling() {
    console.log("AHOJ!");

    const age = parseInt(document.getElementById("ageIn").value);
    console.log("Váš věk je:" + age);
    const message= document.getElementById("message");
    
        if(age >= 18) {
            console.log("Věk splněn!Vítejte!");
            message.innerText="Splnili jste podmínku! Vítejte!";
            message.style.color="green";

                for (let i = 1; i < 11; i++) {
                    console.log(i);
                }
            document.getElementById("calcul").hidden = false;
            
        } 
        else {
            console.log("Nevyhovující věk!");
            message.innerText="Je nám líto. Nemáte povolení vstup.";
            message.style.color="red";

        }
    }

function suma(x, y, target) {
    target.value = parseInt(x) + parseInt(y);
    return x+y
    }
