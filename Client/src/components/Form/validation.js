

const validator = (data) => {
    let errors = {}

    if(!data.email.includes("@")){
        errors.e1="Invalid email"
    }
    if(!data.email){
        errors.e2='Email is required'
    }
    if(data.email.length > 35 ){
        errors.e3 ='Debe tener menos de 36 caracteres'
    }
    if(!/\d/.test(data.password)) {
        errors.p1= 'al menos un numero'
        }
    if(data.password.length < 6 || data.password.length > 10 ) {
        errors.p2='debe ser mayor a 6 y menor o igual que 10 digitos';
        }
    return errors;
}

export default validator;