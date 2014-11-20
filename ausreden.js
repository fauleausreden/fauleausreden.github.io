$(function() {
	$.getJSON("ausreden.json", function(data) {
		var max = Object.keys(data).length;
		var rand = Math.floor(Math.random() * max);
		var ausrede = data[rand];
		$('#ausrede').html(ausrede);
		$('.share.twitter').attr("href", "https://twitter.com/intent/tweet?text="+encodeURIComponent(ausrede)+"%20http%3A%2F%2Fwww.fauleausreden.de");
	});
});