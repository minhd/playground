$(function(){
	searchFlickr('hero');
});

$(document).on('submit', '#search_form', function(e){
	e.preventDefault();
	searchFlickr($('#query').val());
});

function searchFlickr(search_term){
	$('#result').html('Loading...');
	$.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?', {
		tags: search_term,
		tagmode: 'any',
		format: 'json'
	}).done(function(data){
		console.log(data);
		$('#result').html('');
		var html = '';
		$.each(data.items, function(i,item){
			html +='<a href="'+changeToBig(item.media.m)+'"><img src="'+item.media.m+'"/></a>'
		});
		$('#result').html(html);
		$('#result a').colorbox({rel:'gal'});
	});
}

function changeToBig(imglink){
	//change the last m.jpg to b.jpg
	return imglink.replace("_m.jpg","_b.jpg");
}