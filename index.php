<!DOCTYPE html>
<html lang="en">
<head>
	<title>pi-slider</title>
    <meta charset="utf-8">
	<meta name="author" content="Pascal Iske" />
	<meta name="generator" content="Sublime Text 2" />
	<meta name="description" content="" />
	<link rel="stylesheet" type="text/css" href="default.min.css">

	<script src="scripts/jquery.min.js"></script>

	<!-- pi-Slider Resources -->
	<link rel="stylesheet" type="text/css" href="pi-slider/pi-slider.min.css">
	<script type="text/javascript" src="pi-slider/pi-slider.min.js"></script>

</head>
<body>
	<div id="wrapper">
		<div id="slider">
			<img src="images/bild1.gif" title="test image 1 (link to google)" data-href="http://www.google.de" />
			<img src="images/bild2.gif" title="test image 2 (link to bing)" data-href="http://bing.de" />
			<img src="images/bild3.gif" title="test image 3 (no link)" />
			<img src="images/bild4.gif" title="test image 4 (no link)" />
		</div>
	</div>
	<div id="footer">
		&copy; <?php echo date("Y"); ?> <a href="http://pascal-iske.de/?lang=de">Pascal Iske</a> | <a href="mailto:info@pascal-iske.de">info@pascal-iske.de</a>
	</div>
	<script type="text/javascript">
		$(document).ready(function() {
			$("#slider").piSlider({
				progressColor: 'red'
			});
		});
	</script>
</body>
</html>