$('#balance_form').submit(function(event){

    $.ajax('/balance', {
       data: $('#balance_form').serialize(),

    }).done(function( data ) {
        console.log( data );
        addData('Balance',data, data.balance+' ETH');
    });;

    event.preventDefault();
});

$('#send_form').submit(function(event){

    $.ajax('/send', {
        method: 'POST',
        data: $('#send_form').serialize(),

    }).done(function( data ) {
        console.log( data );
        addData('Transfer',data, data.result );
    });;

    event.preventDefault();
});


function addData(method, data, result){

    $('#no_results').hide();

    var str = '<tr class="text-'+data.state+'">'+
        '<td>'+method+'</td><td>'+getFormattedTime(data.time)+'</td>'+
        '<td><a href="https://ropsten.etherscan.io/address/'+data.address+'"><span>'+data.address+'</a></td>'+
        '<td>'+(data.tx ? '<a class="address" href="https://ropsten.etherscan.io/tx/'+data.tx+'">'+data.tx+'</a>' : '-') + '</td>' +
        '<td>'+result+'</td></tr>';

    $('#results tbody').append(str);

}

function getFormattedTime(timestamp) {
    var date = new Date(timestamp);

    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;

    var str = hour + ":" + min + ":" + sec;

    return str;
}