import {Injectable} from "@angular/core";
import { UserIn, UserInDTO, UserOut, UserOutDTO, UserRegister, UserRegisterDTO } from "./usuario.type";


@Injectable({
  providedIn: 'root'
})

export class UserMapper {

  constructor() {  }

  mapDTOtoUser(userInDTO:UserInDTO):UserIn{
    const userIn = {} as UserIn;
    
    userIn.email = userInDTO.email;
    userIn.nombre = userInDTO.nombre;
    userIn.pass = userInDTO.pass;
    userIn.isAdmin = userInDTO.isadmin;

    return userIn;

  }

  // Credenciales para registrar en BD
  mapUserRegisterToDTO(user:UserRegister):UserRegisterDTO{
    const userDTO = {} as UserRegisterDTO;
    
    userDTO.email = user.email;
    userDTO.nombre = user.nombre;
    userDTO.pass = user.pass;

    return userDTO;

  }

  mapLoginToBody(mail: string , pass: string): UserOut {
    const user = {} as UserOut;
    user.email = mail;
    user.pass = pass;
    return user;
  }

  mapToUserInDTO(user: UserIn): UserInDTO {
    const userDTO = {} as UserInDTO;

    userDTO.email = user.email;
    userDTO.isadmin = user.isAdmin;
    userDTO.nombre = user.nombre;
    userDTO.pass = user.pass;

    return userDTO;
  }
}