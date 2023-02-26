const btnDatos = document.querySelector("[data-btn-datos]");
const form = document.querySelector("[data-form]");
const userAdmin = "Admin@correo.com";
const passwordAdmin = "admin2557*";

btnDatos.addEventListener("click", (e) => {
    const user = document.querySelector("[data-user]").value;
    const password = document.querySelector("[data-password]").value;
    if(!autenticacionAdmin(user, password)){
        e.preventDefault();
    }
});


const autenticacionAdmin = (user, pass)=>{
    if(user == userAdmin && pass == passwordAdmin){
        form.action = "menu-admin.html";
        return true;
    }else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Usuario o contraseña incorrecta",
        });
        const user = document.querySelector("[data-user]").value =  "";
        const password = document.querySelector("[data-password]").value = "";
        return false;
    }
}