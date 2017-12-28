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
}

function getRecords() {
    $.ajax({
        type: 'GET',
        url: '/records',
    }).done(function(response){
        var recordsCollection = response;
        appendToDom(recordsCollection);
    })
}

function appendToDom(records) {
    for(var i = 0; i < recorda.length; i += 1) {
        // append to DOM
        var record = records[i];
        var tr = $('<tr></tr>');
        $tr.append('<td>' + record.name + '</td>');
        $tr.append('<td>' + record.year + '</td>');
        $tr.append('<td>' + record.cost + '</td>');
        $('#recordTable').append($tr);
    }
}