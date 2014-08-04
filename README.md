# pi-slider

The pi-slider is a very simple image slider build with jQuery. It is easy to install. See the steps below for the installation. There are several options to customize slider.


## Installation

- Download and unzip the [plugin]() into the folder of the website
- Link the latest version of jQuery from [Google Developers](https://developers.google.com/speed/libraries/devguide#jquery)
- Link the CSS-Stylesheet file  and the JavaScript file in the header of your HTML-file:
```
<link rel="stylesheet" type="text/css" href="pi-slider/pi-slider.css">
<script type="text/javascript" src="pi-slider/pi-slider.js"></script>
```
- We prepare a simple HTML element with an id `#sample`:
```
<div id="sample">
	<img src="image1.png" title="Caption comes here (optional)" data-href="Link comes here (optional)" />
	<img src="image2.png" title="Caption comes here (optional)" data-href="Link comes here (optional)" />
	<img src="image3.png" title="Caption comes here (optional)" data-href="Link comes here (optional)" />
</div>
```
- Insert the following jQuery to the bottom of the same file and replace **#sample** with the id of the element you've prepared in the previous step.
```
<script type="text/javascript">
	$(document).ready(function() {
		$("#sample").piSlider({
			fullsize: true,
			progressColor: 'green',
			arrows: true,
			captions: false,
			autoplay: false
		});
	});
</script>
```

