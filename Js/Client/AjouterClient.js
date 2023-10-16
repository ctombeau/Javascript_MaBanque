 document.getElementById("form").addEventListener("submit",AjouterClient);


function AjouterClient(e)
{
    e.preventDefault();
    
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password= document.getElementById("password").value;
    let phone = document.getElementById("phone").value;
    let devise = document.getElementById("devise").value;
    let type = document.getElementById("type").value;
    let solde = document.getElementById("solde").value;

    const xhr = new XMLHttpRequest();
    xhr.open("POST","http://localhost:5254/api/client/add",true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onload =()=>{
        if(this.readyState === XMLHttpRequest.DONE && this.status === 201)
        {
            document.getElementById("msg").innerHTML='<div>'+xhr.responseText+'</div>';
            
        }
        else
        {
            console.log("Erreur...");
        }
    }

    let mydata = {
        nom : nom,
        prenom: prenom,
        username: username,
        email: email,
        password: password,
        phone: phone,
        devise: devise,
        type: type,
        solde: solde
    }
    // console.log(mydata);
    
    const data = JSON.stringify(mydata);
    console.log(data);
    xhr.send(data);
}