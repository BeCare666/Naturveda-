var usernamep = "naturveda"
var passwordp = "naturveda123++"
var tableauTotakeidd = []
function connect() {
    const username = document.getElementById('idusername').value;
    const password = document.getElementById('idpassword').value;
    document.getElementById('idusername').value= '';
        document.getElementById('idpassword').value = ''
    if (username === usernamep && password === passwordp) {
        //console.log('kodlsjfnsb,')
        setTimeout(() => {
            Swal.fire({
                icon: 'error', 
                text: `Naturveda s'est bien connecté`,
                allowOutsideClick: false,
                
                //footer: '<a href="">Why do I have this issue?</a>'
              })
           // alert("Naturveda s'est bien connecté")
            var codesecret = "YESDATA2023"
            tableauTotakeidd.push(codesecret)
            const lastk = tableauTotakeidd.slice(-1).pop();
            localStorage.setItem("storageName", lastk);
            window.location.replace("admin.html")
        }, 3000)
    } else {
        document.getElementById('login-page').style.display = "none"
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Mot de passe ou nom d'utilisateur incorrect !`,
            allowOutsideClick: false,
            //footer: '<a href="">Why do I have this issue?</a>'
          }).then((result) => {
            if (result.isConfirmed) {
             document.getElementById('login-page').style.display = "block"
             
            }
          })
    }

}
