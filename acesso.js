


function validateForm()
{
  var x =1;
  var nome = document.forms["login"]["fname"].value;
  //var email = document.forms["login"]["email"].value;
  var senha = document.forms["login"]["senha"].value;


if (nome == "Bia&Alex")  //&& (senha == "midway")
{

  //$("#entrar").html(" <button type='button' class='btn btn-lg btn-primary btn-block btn-outline-dark '> ola </button>").delay(1000).queue(function(next) { next(); });
  //<a class='' href=' alunos/matheus.html' > Bem vindo Matheus !  </a>
 
 location.replace("https://mgarcia1794.github.io/Professor-Garcia/alunos/alexANDbia/index.html");
 alert("Sejam bem vindos!");
   
 
}
else
{
  alert("Erro! Repita, por favor! ");
}


}

// mudanças feitas aqui no Git: while no login, font size na área de aluno; cor do sumário
