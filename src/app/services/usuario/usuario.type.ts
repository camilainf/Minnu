
// Para verificar credenciales
export interface UserOut {
    email: string;
    pass: string;
}

export interface UserOutDTO {
    email: string;
    pass: string;
}

// Para usuario autorizado
export interface UserIn {
    nombre: string;
    email: string;
    pass: string;
    isAdmin: boolean;
}

export interface UserInDTO {
    nombre: string;
    email: string;
    pass: string;
    isadmin: boolean;
}

// Para registro de usuario
export interface UserRegister {
    nombre: string;
    email: string;
    pass: string;
}

export interface UserRegisterDTO {
    nombre: string;
    email: string;
    pass: string;
}