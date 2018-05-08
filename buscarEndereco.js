function buscarEndereco(){
    var cep = $('#cep').val();

    $.ajax('http://api.postmon.com.br/v1/cep/' + cep).done((resposta) => {
        $("input[name='endereco[rua]']").val(resposta.logradouro);
        $("input[name='endereco[bairro]']").val(resposta.bairro);
        $("input[name='endereco[municipio]']").val(resposta.cidade);
        $("input[name='endereco[uf]']").val(resposta.estado);
        $("input[name='endereco[numero]'").val(null)
    })
    .fail((xhr, erro) => {})
}

$('#cep').focusout(function(){
    buscarEndereco();
});


