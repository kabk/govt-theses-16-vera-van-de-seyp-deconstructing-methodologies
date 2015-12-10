function invertPage() {
	var clickPoint = $('.align-right');
	var white = true;
	clickPoint.on('click', function() {
		if( white ) {
			$('body').css({
				"background-color" : "black",
			});
			$('*').css({
				"color" : "white",
			});

			white = false;
		} else {
			$('body').css({
				"background-color" : "white",
			});
			$('*').css({
				"color" : "black",
			});
			white = true;
		}
	});
}

document.addEventListener('keydown', function (event) {
  var esc = event.which == 27,
      nl = event.which == 13,
      el = event.target,
      input = el.nodeName != 'INPUT' && el.nodeName != 'TEXTAREA',
      data = {};

  if (input) {
    if (esc) {
      // restore state
      document.execCommand('undo');
      el.blur();
    } else if (nl) {
      // save
      data[el.getAttribute('data-name')] = el.innerHTML;
      log(JSON.stringify(data));

      el.blur();
      event.preventDefault();
    }
  }
}, true);

function log(s) {
  console.log(s);
}

$(document).ready( function() {
	invertPage();
});