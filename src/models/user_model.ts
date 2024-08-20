abstract class User {

    id: number;
    names: string;
    surnames: string;
    user_name: string;
    email: string;
    password: string;

    constructor(id: number, names: string, surnames: string, user_name: string, email: string, password: string) {
        this.id = id;
        this.names = names;
        this.surnames = surnames;
        this.user_name = user_name;
        this.email = email;
        this.password = password;
    }
    setNames() {
        const nombreInput = document.getElementById('nombre') as HTMLInputElement
        
        if (this.isValidName(nombreInput.value)) {
            this.names = nombreInput.value
        }
        else {
            this.setNames()
        }
    }

    setSurnames() {
        const apellidoInput = document.getElementById('apellido') as HTMLInputElement
        
        if (this.isValidName(apellidoInput.value)) {
            this.names = apellidoInput.value
        }
        else {
            this.setSurnames()
        }
    }

    setUserName() {
        const userNameInput = document.getElementById('usuario') as HTMLInputElement
        
        if (this.isValidUserName(userNameInput.value)) {
            this.names = userNameInput.value
        }
        else {
            this.setUserName()
        }
    }

    setEmail() {
        const emailInput = document.getElementById('email') as HTMLInputElement
        
        if (this.isValidEmail(emailInput.value)) {
            this.names = emailInput.value
        }
        else {
            this.setEmail()
        }
    }

    setPassword() {
        const pswdInput = document.getElementById('contraseña') as HTMLInputElement
        
        if (this.isValidPswd(pswdInput.value)) {
            this.names = pswdInput.value
        }
        else {
            this.setPassword()
        }
    }

    private isValidName (name: string) {
        let regex = new RegExp(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3, 50}+$/)
        return regex.test(name)
    }

    private isValidUserName (user_name: string) {
        let regex = new RegExp(/^[a-zA-Z0-9\-_\.\,\!\?\(\)]+$/)
        return regex.test(user_name)
    }

     private isValidEmail (email: string) {
        let regex = new RegExp(/^[a-zA-Z0-9.!#$%&*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
        return regex.test(email)
    }

    private isValidPswd (pswd: string) {
        
        if (pswd.length < 8) {
            return false
        }
        else {
            let has_upper= false
            let has_lower = false
            let has_number = false
            let has_simbol = false

            for (const c of pswd) {
                if (/\d/.test(c)) {
                    has_number = true
                } else if (/[A-Z]/.test(c)) {
                    has_upper = true
                } else if (/[a-z]/.test(c)) {
                    has_lower = true
                } else {
                    has_simbol = true
                }
            }
        
            return has_upper && has_lower && has_number && has_simbol
        }
    }
}