interface Usuario {
    nombre: string;
    contrasena: string; // Asegúrate de que el nombre coincida (pusiste contrasenia abajo)
    edad: number;
}

let usuarios: Usuario[] = [];

// Usamos llaves {} para el objeto y comas para separar propiedades
usuarios.push({
    nombre: "Juan",
    contrasena: "123",
    edad: 20
});

usuarios.push({
    nombre: "Mara",
    contrasena: "123",
    edad: 21
});

usuarios.push({
    nombre: "Lola",
    contrasena: "12",
    edad: 203
});

console.log(usuarios)