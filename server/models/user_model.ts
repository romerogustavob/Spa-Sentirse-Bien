/*export abstract class User {

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
            alert("Nombre inválido. Inténtalo de nuevo.");
            //this.setNames()
        }
    }

    setSurnames() {
        const apellidoInput = document.getElementById('apellido') as HTMLInputElement
        
        if (this.isValidName(apellidoInput.value)) {
            this.surnames = apellidoInput.value
        }
        else {
            alert("Apellido inválido. Inténtalo de nuevo.");
            //this.setSurnames()
        }
    }

    setUserName() {
        const userNameInput = document.getElementById('usuario') as HTMLInputElement
        
        if (this.isValidUserName(userNameInput.value)) {
            this.names = userNameInput.value
        }
        else {
            alert("Nombre de usuario inválido. Inténtalo de nuevo.");
            //this.setUserName()
        }
    }

    setEmail() {
        const emailInput = document.getElementById('email') as HTMLInputElement
        
        if (this.isValidEmail(emailInput.value)) {
            this.names = emailInput.value
        }
        else {
            alert("Correo electrónico inválido. Inténtalo de nuevo.");
            //this.setEmail()
        }
    }

    setPassword() {
        const pswdInput = document.getElementById('contraseña') as HTMLInputElement
        
        if (this.isValidPswd(pswdInput.value)) {
            this.names = pswdInput.value
        }
        else {
            alert("Contraseña inválida. Inténtalo de nuevo.");
            //this.setPassword()
        }
    }

    private isValidName (name: string) {
        const regex = new RegExp(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,50}$/)
        return regex.test(name)
    }

    private isValidUserName (user_name: string) {
        const regex = new RegExp(/^[a-zA-Z0-9- .,!?()]+$/)
        return regex.test(user_name)
    }

    private isValidEmail (email: string) {
        const regex = new RegExp(/^[a-zA-Z0-9.!#$%&*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
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

export class empleado extends User{
    
    constructor(id: number, names: string, surnames: string, user_name: string, email: string, password: string) {
        super(id, names,surnames,user_name, email, password)
    }

    public static cargarServicio(){

    }
    

}

export class cliente extends User{
    constructor(id: number, names: string, surnames: string, user_name: string, email: string, password: string) {
        super(id, names,surnames,user_name, email, password)
    }

    public static GanerarComentario() {
        
    }
}*/
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    names: {
        type: String,
    },
    surnames: {
        type: String,
    },
    sex: {
        type: Boolean,
    },
    isAdmin: {
        type: Boolean,
    }

},    {
    timestamps: true
})

export default mongoose.model('User', userSchema)