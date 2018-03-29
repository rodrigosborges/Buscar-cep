function buscarEndereco(){
    var cep = $('#cep').val();

    $.ajax('http://api.postmon.com.br/v1/cep/' + cep)
    .done((resposta) => {
        console.log(resposta.bairro.toUpperCase())
        $("input[name='endereco[rua]']").val(resposta.logradouro);
        $("input[name='endereco[bairro]']").val(resposta.bairro);
        $("select[name='endereco[municipio]']").val(resposta.cidade);
        $("select[name='endereco[uf]']").val(resposta.estado);
        $("input[name='endereco[numero]'").val(null)
    })
    .fail((xhr, erro) => {
    })
}
function buscarEndereco2(){
    var cep = $('#cep2').val();

    $.ajax('http://api.postmon.com.br/v1/cep/' + cep)
    .done((resposta) => {
        $("input[name='endereco[rua]']").val(resposta.logradouro);
        $("input[name='endereco[bairro]']").val(resposta.bairro);
        $("select[name='endereco[municipio]']").val(resposta.cidade);
        $("select[name='endereco[uf]']").val(resposta.estado);
        $("input[name='endereco[numero]'").val(null)
    })
    .fail((xhr, erro) => {
    })
}

$('#cep').focusout(function(){
    buscarEndereco();
});

$('#cep2').focusout(function(){
    buscarEndereco2();
});

