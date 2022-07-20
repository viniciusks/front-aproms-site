function handleScreen(){
    let screen = getParameter('screen');
    if(screen=='confirmation'){
        $(".boxCad").addClass('d-none')
        $(".boxPin").removeClass('d-none')
    }else{
        $(".boxPin").addClass('d-none')
        $(".boxCad").removeClass('d-none')
    }
}
handleScreen();
$(document).ready(function(){
    document.querySelector('#idFormCadTranspGrat').addEventListener('submit', e => {        
        e.preventDefault();
        var form = $('#idFormCadTranspGrat');
        var url = $('#idFormCadTranspGrat').attr('action');
        if((document.getElementById('idCnpj').value.trim() != '')&&
           (document.getElementById('idNomeRazao').value.trim() != '')&&
           (document.getElementById('idCelular').value.trim() != '')&&
           (document.getElementById('idContato').value.trim() != '')&&
           (document.getElementById('idRntrc').value.trim() != '')&&
           (document.getElementById('idEmail').value.trim() != ''))
        {
            $("#loaderLote").removeClass('d-none');
            $("#loaderLote").addClass('d-block');
            console.log(url);
            $.ajax({
                type: "POST",
                url: url,
                data: form.serialize(), // serializes the form's elements.
                success: function(resposta)
                {
                    console.log(resposta);
                    var resp = JSON.parse(resposta);                
                    if(resp.erro != 0){
                        document.querySelector('.text-erro').innerText = resp.mensagem;
                    }else{
                        window.location.href = '?screen=confirmation&transportadora='+soNumero(document.getElementById('idCnpj').value)
                    }
                    $("#loaderLote").addClass('d-none');
                    $("#loaderLote").removeClass('d-block');
                    // $("#modalPin").modal('show')
            
                            
                },erro:function(e){
                    $("#loaderLote").addClass('d-none');
                    $("#loaderLote").removeClass('d-block');        

                }
            });
        }else{
            document.querySelector('.text-erro').innerText = 'Os campos marcados com (*) são obrigatórios' ;

        }

        
    });
});

function confirmaPin(){
    let empresa = getParameter('transportadora');    

    if((document.getElementById('idPin').value.trim() != '')&&(empresa)){
        carregando()
        try {
            $.ajax({
                url: '/aproms/aproms.dll/cadastro-transportadora-gratuita?op=2&transportadora='+empresa+'&pin='+document.getElementById('idPin').value,
                dataType: 'text',
                success: function(resposta) {
                    var resp = JSON.parse(resposta);                
                    console.log(resp)
                    if(resp.erro){
                        document.querySelector('.text-erro-pin').innerText = resp.mensagem;                        
                    }else{
                        window.location.href = '/?open=login'
                    }
                    carregando()
                }
    
            });
        } catch (error) {            
            carregando()
        }
    }else{
        document.querySelector('.text-erro-pin').innerText = 'Os campos marcados com (*) são obrigatórios' ;
    }
}