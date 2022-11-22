// >>>>> Conditional >>>>>

// >>>>> IF, Else <<<<<

// let thereSmoke = true

// if (thereSmoke) {
//     window.alert("Corre pessoal!")
// }

// let age = Math.abs(Number(prompt("Digite sua idade:")))
// if (String(age).length >= 3 ) {
//     console.log("Sua idade está correta?")

// } 
// if (age >= 18) {
//     console.log("Maior de idade!")
//     if (cartão) {

//     } else {
//       if(dinheiro)
//     }
// } else {
//     console.log("Menor de idade!")
// }
// console.log(age)
// if (age >= 16) {
//     if ( age >=18 && age <=70) {
//     console.log("Voto Obrigatório!")
//     } else {
//     console.log("Voto facultativo!")
//     } 
// } else {
//     console.log("Não Pode votar!")


// if (weekDay == 1) {
//     console.log("Domingo")
// } else {
//     if (weekDay == 2) {
//         console.log("Segunda")
//     } else {
//         if (weekDay == 3) {
//             console.log("Terça")
//         }
//     }
// }

//     console.log("Pode votar!")
// } else {
//     console.log("Não pode votar!")
// }

let weekDay = 1 // 1 - 7
let day

    switch (weekDay) {
        case 1:
            day = "Domingo"
        break;
        case 2:
            day = "Segunda"
        break;
        case 3:
            day = "Terça"
        break;
        case 4: 
             day = "Quarta"
        break;
        case 5:
            day = "Quinta"
        break;
        case 6:
             day = "Sexta"
        break;
        case 7: 
              day = "Sábado"

        default:
            // console.log("Dia não encontrado!")
            day = "Dia não encontrado!"
        break;
    }
    
    console.log(day)






