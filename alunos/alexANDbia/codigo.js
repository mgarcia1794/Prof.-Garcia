
function addRowTopicos(topico, subtopico, indice, imagem)
{

$("#sumario > .row").append("<div class='col-lg-12 col-md-12 col-sm-12 relativediv'><button id='" + ("t" + indice + "'") + "><h2>" + indice + " . " +  topico + " </h2></button><img src='" + ("Imagens/" + imagem + "'") + " alt='materia'><div class='subitem' id='" + ("s" + indice + "'") + " ><li >" + subtopico + "</li><hr class='hr1'></div><hr></div>");

$(document).ready(function(){
  $("#t" + indice).click(function(){
    $("#s" + indice).toggle(200);
  });
});
}

function addListaDeExercicios(materia, nomeDaLista, indice)
{

  var subtop = ("#s" + indice);
  var arquivo = (materia + "/" + nomeDaLista + ".pdf" );

  $(subtop).append(" <a class='' href='" + (materia + "/" + nomeDaLista + ".pdf'") + " > <button type='button' class='btn btn-light btn-lg'>  Lista de Exercícios  </button> </a>");
}


function addQuadro(materia, nome, indice, formato)
{

  var subtop = ("#s" + indice);
  var arquivo = (materia + "/" + nome + formato );

  $(subtop).append(" <a class='' href='" + arquivo + " > <button type='button' class='btn btn-light btn-lg'>  Quadro de Aula  </button> </a>");
}


function Lista (materia, nome, indice)
{
  this.materia = materia;
  this.nome = nome;
  this.indice = indice;

}

function Topico (titulo, subtopico, indice, imagem)
{
  this.titulo = titulo;
  this.subtopico = subtopico;
  this.indice = indice;
  this.imagem = imagem;
}

function Quadro (materia, nome, indice, formato)
{
  this.materia = materia;
  this.nome = nome;
  this.indice = indice;
  this.formato = formato;
}
//-----------------------------------------------

var check = "<i class='far fa-check-circle fa-2x' style='color: green;'></i>";
var open = "<i class='fas fa-exclamation fa-2x' style='color: yellow;'></i>";
var wait = "<i class='fas fa-ellipsis-h fa-2x' style='color: black;'></i>";


function addSchedule(data, assunto, status, pagamento, sala)
{

  $("#schedule > .table >  tbody").append(" <tr> <th scope='row'>" + data + " </th> <th scope='row'>" + assunto + " </th>  <th scope='row'> <a href = '" + sala + "'> " + status + " <a> </th> <th scope='row'>" + pagamento + " </th> </tr>");
}

//-----------------------------------------

function addCuriosidade(titulo, imagem, site)
{

  $("#interesses > h1").after("<a href='"+ site +"'><div class='noticias'><img src='Imagens/" + imagem + "' alt=''><h2>" + titulo + " </h2></div></a>");
}


//-------------------------------------
var energia = new Topico("Energia", "O aluno deve entender o princípio de conservação de energia, e o conceito de energia mecânica. Além disso, devemos entender o coceito de trabalho de uma força.", "1", "materia.png");
addRowTopicos(energia.titulo, energia.subtopico, energia.indice, energia.imagem);
//addRowTopicos("Funções Inorgânicas", "Estudo dos compostos inorgânicos e suas propriedades" + "</br>" + "O aluno deve entender as reações químicas.", "3", "acid.png");

var energiaLista = new Lista("Energia", "Lista 01", "1");
addListaDeExercicios(energiaLista.materia, energiaLista.nome, energiaLista.indice);



var mecanica = new Topico("Mecânica", "Continuando o estudo de energia, o aluno deve saber os diferentes tipos de energia, suas demonstrações matemáticas e sistemas envolvendo mais de uma energia. ", "2", "system.png");
addRowTopicos(mecanica.titulo, mecanica.subtopico, mecanica.indice, mecanica.imagem);
//addRowTopicos("Funções Inorgânicas", "Estudo dos compostos inorgânicos e suas propriedades" + "</br>" + "O aluno deve entender as reações químicas.", "3", "acid.png");

var termo = new Topico("Termologia", "A temperatura mede o grau de vibração das moléculas. Além disso, sabemos que ao aquecer uma substância, suas moléculas aumentam o grau de vibração, e, portanto, dilatam. Neste conteúdo devemos saber as unidades de medição de temperatura e a anomalia da água.", "3", "termo.png");
addRowTopicos(termo.titulo, termo.subtopico, termo.indice, termo.imagem);
//addRowTopicos("Funções Inorgânicas", "Estudo dos compostos inorgânicos e suas propriedades" + "</br>" + "O aluno deve entender as reações químicas.", "3", "acid.png");

var calor = new Topico("Calorimetria", "Calor: Uma energia em transferência. Devemos saber as transformações físicas e químicas que ocorrem em um corpo ao submetê-lo a uma fonte de calor. <ol type = 'a'> <li>Temperatura</li> <li>Dilatação</li> <li>Condutividade</li> <li>Transferência de Calor: Calor Sensível e Calor Latente</li> <li>Condução, Convecção e Radiação</li> </ol>", "4", "oven.png");
addRowTopicos(calor.titulo, calor.subtopico, calor.indice, calor.imagem);
//addRowTopicos("Funções Inorgânicas", "Estudo dos compostos inorgânicos e suas propriedades" + "</br>" + "O aluno deve entender as reações químicas.", "3", "acid.png");

var calorLista = new Lista("Calorimetria", "Lista", "4");
addListaDeExercicios(calorLista.materia, calorLista.nome, calorLista.indice);


var termo = new Topico("Termodinâmica ", "Estudaremos os fenômenos que envolvem os gases, e a forma como eles trocam calor e trabalho com o meio. No tópico Interessante! é mostrado um resumo do TodaMatéria. <ol> <li>Conceito de Gases</li> <li>Equação dos Gases Ideais</li> <li>Transformações Gasosas</li> <li>Primeira Lei da Termodinâmica: Q = W + dU</li> <li>Segunda Lei da Termodinâmica: Calor flui de corpos quentes para corpos frios</li>   <li>Entropia</li> <li>Máquinas Térmicas: Trabalho e Rendimento</li> <li>Ciclo de Carnot</li> </ol>", "5", "engine.png");
addRowTopicos(termo.titulo, termo.subtopico, termo.indice, termo.imagem);

var tdl = new Lista("Termod", "Lista", "5");
addListaDeExercicios(tdl.materia, tdl.nome, tdl.indice);


var opt = new Topico("Óptica" , "Estudo da LUZ, 'à luz' da Física Clássica. Vimos os fenômenos de Reflexão e Refração, e como podemos aplicar tais fenômenos ao dia a dia. <ol> <li>Conceito</li> <li>Leis da Refração</li> <li>Ângulo máximo de refração</li> <li>Dioptro Plano</li> <li>Espelhos</li>   <li>Lentes</li> <li>Olho humano</li> </ol>", "6", "optic.png");
addRowTopicos(opt.titulo, opt.subtopico, opt.indice, opt.imagem);


var listopt = new Lista("Optica", "Lista", "6");
addListaDeExercicios(listopt.materia, listopt.nome, listopt.indice);

var ondas = new Topico("Ondulatória","Estudo das ondas sonoras e eletromagnéticas. Vimos o comportamento ondulatório, e que toda onda possui: Comprimento de onda, velocidade, frequência e período.<ol>  <li>Conceitos</li>  <li>Intensidade (dB)</li>  <li>Interferência</li>  <li>Difração (Experimento de Young)</li>  <li>Cordas e Tubos</li>  <li>Efeito Doppler</li></ol>" , "7", "waves.png");
addRowTopicos(ondas.titulo, ondas.subtopico, ondas.indice, ondas.imagem);


var mag = new Topico("Magnetismo", "Sempre foi conhecido que os imãs naturais são corpos que seus dipolos estruturais são alinhados naturalmente, e, por isso, possuem campo magnético e exercem força magnética. Não por acidente, descobriu-se também que cargas em movimento alteram e criam campo magnético ao seu redor.<ol>  <li>Conceitos</li>  <li>Fórmulas</li>  <li>Campo Magnético em espiras</li>  <li>Indução eletromagnética</li>  <li>Corrente elétrica gerada pela variação do campo magnético</li></ol>", "8", "magnet.png");
addRowTopicos(mag.titulo, mag.subtopico, mag.indice, mag.imagem);

var listaMag = new Lista("Moderna", "Lista01", "8");
addListaDeExercicios(listaMag.materia, listaMag.nome, listaMag.indice);

//----



//---------------------------------------------

addSchedule("24/09 - 20 hrs", "Energia- Correção de Exercícios", "Entar !", check, "https://meet.google.com/hbj-kkzv-ghd");

addSchedule("25/09 - 18 hrs", "Mecânica- Conteúdo", "Entrar ! ", check, "https://meet.google.com/nds-udqs-zht");


addSchedule("01/10 - 19:45 hrs", "Calorimetria", "Entrar !", check, "https://meet.google.com/nds-udqs-zht");

addSchedule("02/10 - 18 hrs", "Termologia", "Entrar !", check, "https://meet.google.com/nds-udqs-zht");


addSchedule("06/10 - 19:45 hrs", "Calorimetria - Exercícios", "Entrar !", check, "https://meet.google.com/nds-udqs-zht");

addSchedule("08/10 - 19:45 hrs", "Termologia - Exercícios", "Entrar !", check, "https://meet.google.com/nds-udqs-zht");


addSchedule("15/10 - 19:45 hrs", "Termodinâmica I", "Entrar !", check, "https://meet.google.com/nds-udqs-zht");
addSchedule("16/10 - 18 hrs", "Termodinâmica II", "Entrar !", check, "https://meet.google.com/nds-udqs-zht");



addSchedule("22/10 - 19:45 hrs", "Exercícios ", "Entrar !", check, "https://meet.google.com/nds-udqs-zht");
addSchedule("23/10 - 18 hrs", "Óptica I", "Entrar !", check, "https://meet.google.com/nds-udqs-zht");


addSchedule("29/10 - 19:45 hrs", "Óptica II ", "Entrar !", check, "https://meet.google.com/nds-udqs-zht");
addSchedule("04/11 - 18 hrs", "Óptica III ", "Entrar !", check, "https://meet.google.com/nds-udqs-zht");


addSchedule("05/11 - 19:45 hrs", "Óptica IV ", "Entrar !", check , "https://meet.google.com/nds-udqs-zht");
addSchedule("06/11 - 18 hrs", "Óptica V ", "Entrar !", check, "https://meet.google.com/nds-udqs-zht");

addSchedule("11/11 - 18 hrs", "Exercícios ", "Entrar !", check, "https://meet.google.com/nds-udqs-zht");
addSchedule("12/11 - 19:45 hrs", "Ondulatória I ", "Entrar !", check, "https://meet.google.com/nds-udqs-zht");

addSchedule("24/11 - 19 hrs", "Ondulatória II ", "Entrar !", check, "https://meet.google.com/nds-udqs-zht");

addSchedule("25/11 - 18 hrs", "Ondulatória III ", "Entrar !", check, "https://meet.google.com/nds-udqs-zht");
addSchedule("26/11 - 18 a 20 hrs", "Magnetismo I", "Entrar !", check, "https://meet.google.com/nds-udqs-zht");
addSchedule("27/11 - 18 hrs", "Magnetismo II ", "Entrar !", check, "https://meet.google.com/nds-udqs-zht");

addSchedule("03/12 - 19 - 20:30 hrs", "Magnetismo III ", "Entrar !", check, "https://meet.google.com/nds-udqs-zht");

//addSchedule("09/12 - 18 hrs", "Exercícios ", "Entrar !", wait, "https://meet.google.com/nds-udqs-zht");
addSchedule("10/12 - 18:30 a 20 hrs", "Exercícios ", "Entrar !", check, "https://meet.google.com/nds-udqs-zht");

addSchedule("15/12 - 18:30 a 20:00 hrs", "Hidrostática ", "Entrar !", check, "https://meet.google.com/nds-udqs-zht");
addSchedule("16/12 - 18 hrs", "Revisão! ", "Entrar !", check, "https://meet.google.com/nds-udqs-zht");


//addSchedule("17/12 - 19:45 hrs", "Física Moderna ", "Entrar !", wait, "https://meet.google.com/nds-udqs-zht");

addSchedule("20/01/21 - 15 hrs", "Revisão!! ", "Entrar !", check, "https://meet.google.com/nds-udqs-zht");
addSchedule("21/01/21 - 18 hrs", "Revisão!! ", "Entrar !", wait, "https://meet.google.com/nds-udqs-zht");


addSchedule("24/01/21 - Tarde", "PROVA DO ENEM!", "", "", "");




//--------------------------------



addCuriosidade("O poder da Energia Hidrelétrica", "dam.jpg", "https://mundoeducacao.uol.com.br/geografia/hidreletrica.htm" );

addCuriosidade("A Energia Solar", "solar.jpg", "https://brasilescola.uol.com.br/geografia/energia-solar.htm");
addCuriosidade("A Energia Termoelétrica", "fire.jpg", "https://brasilescola.uol.com.br/geografia/energia-termoeletrica.htm");
addCuriosidade("Transformações de Energia", "energia.jpg", "https://www.epe.gov.br/pt/abcdenergia/formas-de-energia");
$("#interesses > h1").after("<hr>");

addCuriosidade("Termologia", "termometro.jpg", "https://brasilescola.uol.com.br/fisica/termologia.htm#:~:text=Termologia%20%C3%A9%20o%20estudo%20cient%C3%ADfico,mudan%C3%A7as%20de%20estado%20f%C3%ADsico%2C%20etc.");
addCuriosidade("Calorimetria", "heat.jpg", "https://brasilescola.uol.com.br/fisica/calorimetria-i.htm");

addCuriosidade("O calor dos planetas", "universo.jpg", "https://jornal.usp.br/atualidades/jupiter-e-saturno-de-onde-vem-o-calor-interno-dos-planetas-gigantes/");

$("#interesses > h1").after("<hr>");

addCuriosidade("Como o Ar Condicionado Funciona ? ", "arC.jpg", "https://super.abril.com.br/mundo-estranho/como-funciona-o-ar-condicionado/");

addCuriosidade("Resumo de Termodinâmica, by TodaMateria", "engine.png", "https://www.todamateria.com.br/termodinamica/");
