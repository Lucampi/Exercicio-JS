let texto = ` <html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br>

</body>

</html>`;

let posSP = texto.indexOf("*São Paulo*"); // posicao 93

let posLV = texto.indexOf("*Las Vegas*"); // posicao 643

let posMSC = texto.indexOf("*Moscou*"); // posicao 1281
// Comando: alert(posSP + ", " + posLV + ", " + posMSC);



// 1) Nome das cidades

let nomeSP = texto.substring(94, 103); // São Paulo
let nomeLV = texto.substring(644, 653); // Las Vegas
let nomeMSC = texto.substring(1282, 1288); //Moscou
let nomeCidades = nomeSP + ", " + nomeLV + ", " + nomeMSC;
// comando: alert(nomeCidades);



// 2)Conteudo do Roteiro A de cada cidade

let roteiro = texto.split("#");
let roteiroASP = roteiro[1] // Avenida Paulista, MASP, Parque Trianon, Rua Augusta
let roteiroALV = roteiro[4] // Las Vegas Boulevard South, Fonte Bellagio, Principais Casinos, Madame Tussauds
let roteiroAMSC = roteiro[7] // Praça Vermelha, Museu Histórico do Estado, Catedral de São Basilico
let roteirosA = "Roteiro A de São Paulo: " + roteiroASP + " / " + "Roteiro A de Las Vegas: " + roteiroALV + " / " + "Roteiro A de Moscou: " + roteiroAMSC;
// comenado: alert(roteirosA);



// 3) Numero de locais citados no roteiro A das cidades: São Paulo
let posSPINIC = roteiroASP.search("MASP"); // posicao 40
let posSPFIM = roteiroASP.search("Augusta"); // posicao inicial 66, posicao final 73
let rASP = roteiroASP.substring(40, 73);
let splitSP = rASP.split(";");
let numlocalSP = splitSP.length; // 3 locais
// comando: alert(numlocalSP);

//Las Vegas
let posLVINIC = roteiroALV.search("Fonte"); // posicao 49
let posLVFIM = roteiroALV.search("Tussauds"); // posicao inicial 96, posicao final 104
let rALV = roteiroALV.substring(49, 104);
let splitLV = rALV.split(";");
let numlocalLV = splitLV.length; // 3 locais
// comando: alert(numlocalLV);

//Moscou
let posMSCINIC = roteiroAMSC.search("Museu"); // posicao 38
let posMSCFIM = roteiroAMSC.search("Lênin"); // posicao inicial 103, posicao final 108
let rAMSC = roteiroAMSC.substring(38, 108);
let splitMSC = rAMSC.split(";");
let numlocalMSC = splitMSC.length; // 3 locais
// comando: alert(numlocalMSC);

let nlocaisA = numlocalSP + " locais A citados em São Paulo" + ", "  + numlocalLV + " locais A citados em Las Vegas" + ", " + numlocalMSC + " locais A citados em Moscou";
// comando: alert(nlocaisA);



// 4) Nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo
let roteiroBsp = roteiro[2];
let posBINICSP = roteiroBSP.search("Catedral"); // posicao 30
let posBFIMSP = roteiroBSP.search("Augusta"); // posicao inicial 66, posicao final 75
let locaisBSP = "Os pontos turísticos localizados no Centro de São Paulo são: " + roteiroBSP.substring(30, 75);
// alert(locaisBSP);



// 5) Nome dos pontos turísticos localizados no bairro Downtown da cidade de Las Vegas
let roteiroBLV = roteiro[5];
let posBINICLV = roteiroBLV.search("Fremont"); // posicao 34
let posBFIMLV = roteiroBLV.search("Organizado"); // posicao inicial 89, posicao final 99
let locaisBLV = "Os pontos turísticos localizados em Downtown de Las Vegas são: " + roteiroBLV.substring(34, 99);
// alert(locaisBLV);

let valorFuncao = parseInt(prompt(`Escolha um numero:
1 - O nome das cidades avaliadas
2 - O conteúdo do roteiro A de cada cidade avaliada
3 - Quantos locais são citados no roteiro A de cada cidade
4 - O nome dos pontos turisticos localizados no bairro Centro da cidade de São Paulo
5 - O nome dos pontos turísticos localizados no bairro Downtown na cidade de Las Vegas`));

if (valorFuncao == 1){
    alert(nomeCidades);
}else if(valorFuncao == 2){
    alert(roteirosA);
}else if(valorFuncao == 3){
    alert(nlocaisA);
}else if(valorFuncao == 4){
    alert(locaisBSP);
}else if(valorFuncao == 5){
    alert(locaisBLV);
}else{
    alert("Valor não encontrado, Digite um valor de 1 à 5.")
}