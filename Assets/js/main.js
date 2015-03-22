$(document).ready(function(){
    console.log('ready!!');

    $('#search-bar').keydown(function(event){
        if (event.keyCode === 13){
            var request = $(this).val();
            parseJson(request);
            alert('Send...');
        }
    });
});

function parseJson(req){
	var code_translate = '&lang=sp';
	$.ajax({
		url : 'http://api.openweathermap.org/data/2.5/weather?q='+req,
		method: 'POST',
		dataType: "json",
		data : {},
		success: function(result){
			$('#city').html(result.name);
			$('#details').html(result.weather[0].description);
			var temp = parseFloat(result.main.temp) - 272.15;
			temp = Math.round(temp * 1) / 1
			$('#temperature').html(temp+'ºC');
			$('#icon-weather').removeAttr('hidden');
		},
		error: function(result){
			alert('An error has ocurred... Try again');
		}
	});
}