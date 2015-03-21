$(document).ready(function() {
$(".number,.symbol").click(function(){
var v = $(this).val();
$('#answer').val($('#answer').val() + v);
});
$('#clear').click(function(){
    $('#answer').val('');
    $('#operation').val('');
    $('#operation').removeClass('activeAnswer');
    $('#equals').attr('onclick','');
});
    $('.equals').click(function(){
    var c =$('#answer').val();
    $('#answer').val(eval(c));
    });
});