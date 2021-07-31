import { AbstractControl } from "@angular/forms";

//função para validar o campo cpf
export function cpfValidator(control: AbstractControl) {

    var cpfInvalid = false;

    if(control.value == '' || control.value == null || control.value == undefined){
        return { cpfInvalid }; //erro
    }

    var soma;
    var resto;
    soma = 0;

    if (control.value == "00000000000") { cpfInvalid = true };
    if (control.value == "11111111111") { cpfInvalid = true };

    for (var i = 1; i <= 9; i++) soma = soma + parseInt(control.value.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(control.value.substring(9, 10))) { cpfInvalid = true };

    soma = 0;
    for (i = 1; i <= 10; i++) soma = soma + parseInt(control.value.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(control.value.substring(10, 11))) { cpfInvalid = true };

    if(cpfInvalid){
        return { cpfInvalid }; //erro
    }

    return null; //sucesso!
}