$(document).ready(start);

function start() {
    console.log('jquery sourced');
    $('#recordForm').on('submit', submitForm);
}

function submitForm(event) {
    event.preventDefault();
    console.log('Record Name', $('#recordName').val());
    var recordForSale = {
        name: $('#recordName').val(),
        year: $('#recordYear').val(),
        cost: $('#recordCost').val()
    }
    console.log('Record', recordForSale);
    $.ajax({
        type: 'POST',
        url: '/records', //Must match route on server
        data: recordForSale
    }).done(function(response){
        console.log(response);
    }).fail(function(message){
        console.log('Error', message);
        
    })
    
    
};