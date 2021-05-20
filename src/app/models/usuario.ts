import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { UsuariosService } from "../services/usuarios.service";

export class Usuario {
    key: string = "";
    nombre: string = "";
    email: string = "";
    foto: string = "";
    password: string = "";

    async login(usuario: Usuario, router: Router, authSvc: AuthService, usuariosService: UsuariosService) {
        try {
            const user = await authSvc.login(usuario);
            if (user == null) {
                alert("email o password incorecto");
            } else {
                router.navigate(['/home']);
                authSvc.isLogged = true;
            }
        } catch (error) {
            alert(error);
        }
    }

    async register(usuario: Usuario, router: Router, authSvc: AuthService, usuariosService: UsuariosService) {
        try {
            const user = await authSvc.register(usuario).then(() => {
                router.navigate(['/home']);
                usuariosService.create({
                    "nombre": usuario.nombre,
                    "email": usuario.email,
                    "foto": usuario.foto
                }).then(() => {
                    console.log("mensaje enviado");

                });
            })
        } catch (error) {

        }
    }
    validarDatos(usuario: Usuario, validarRegistro: boolean): boolean {
        var respuesta: boolean = false;
        if (usuario.password != "" && usuario.email != "") {
            if (validarRegistro) {
                if (usuario.nombre != "") {
                    respuesta = true;
                }
                else {
                    alert("Por favor complete todos los campos");
                }
            }
            else {
                respuesta = true;
            }
        }
        else {
            alert("Por favor complete todos los campos");
        }
        return respuesta;
    }

    async actualizarUsuario(usuario: Usuario, authSvc: AuthService, usuariosService: UsuariosService) {
        try {
            const user = "";
            if (user == null) {
                alert("email o password incorecto");
            } else {
                authSvc.isLogged = true;
            }
        } catch (error) {
            alert(error);
        }
    }

}
