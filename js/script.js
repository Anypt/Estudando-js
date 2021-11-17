function coletordedados(){
    var nome = document.querySelector("#nome").value;
    var ano = document.querySelector("#fecha").value;
    var idade = 2021 - ano;
    
    console.log ("Olá, meu nome é " + nome + " e eu nasci em" + ano + " eu tenho " + idade + " de idade"); 
}

coletordedados(); 
