<script>
$( document ).ready(function() {
$("#id_cep").mask("00000-000");
$('#id_cnpj').mask('00.000.000/0000-00', {reverse: true});
$('#id_telefone').mask('(00) 0000-0000');
$("#id_cep").focusout(function(){
//Início do Comando AJAX
$.ajax({
//O campo URL diz o caminho de onde virá os dados
//É importante concatenar o valor digitado no CEP
url: 'https://viacep.com.br/ws/'+$(this).val().replace(".","").replace("-","")+'/json/unicode/',
//Aqui você deve preencher o tipo de dados que será lido,
//no caso, estamos lendo JSON.
dataType: 'json',
//SUCESS é referente a função que será executada caso
//ele consiga ler a fonte de dados com sucesso.
//O parâmetro dentro da função se refere ao nome da variável
//que você vai dar para ler esse objeto.
success: function(resposta){
//Agora basta definir os valores que você deseja preencher
//automaticamente nos campos acima.
if (resposta.erro) {
$("#id_cep").removeClass('valid');
$("#id_cep").addClass('invalid');
}
$("#id_logradouro").val(resposta.logradouro);
$("#id_bairro").val(resposta.bairro);
$("#id_cidade").val(resposta.localidade);
$("#id_estado").val(resposta.uf);

//Vamos incluir para que o Número seja focado automaticamente
//melhorando a experiência do usuário

$("#id_numero").focus();
}
});
});
});
</script>