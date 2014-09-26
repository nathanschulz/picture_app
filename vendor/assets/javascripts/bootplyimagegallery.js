$.getJSON('https://api.instagram.com/v1/tags/coding/media/recent?client_id=7f16584af46349ab8dfe312a14aded9e&callback=?', function(json) {
  $.each(json.data, function(i,d) {
    if($('.gallery img').eq(i).size()) {
      $('.gallery img').eq(i).prop('src', d.images.standard_resolution.url);
      $('.gallery .caption').eq(i).html(d.caption.text);
    }
  });
});
$('.gallery').find('.col-sm-4').popover({
  container: 'body',
  html: true,
  trigger: 'hover',
  content: function() {
    return $(this).find('.caption').html();
  },
  placement: "auto bottom"
});