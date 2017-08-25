$('#balance_form').submit(function(event){

    $.ajax('/balance', {
       data: $('#balance_form').serialize(),

    }).done(function( data ) {
        console.log( data );
        addData(data, data.balance+' ETH');
    });;

    event.preventDefault();
});

function addData(data, result){
    var date = new Date(data.time);
    $('#no_results').hide();
    $('#results tbody').append('<tr><td>Balance</td><td>'+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+'</td><td>'+
        '<a href="https://ropsten.etherscan.io/'+data.address+'">'+data.address+'</a></td><td>'+result+'</td></tr>')

}

