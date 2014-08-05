# pi-slider

The _pi-slider_ is a very simple image slider build with jQuery. It is easy to install. See the steps below for the installation. There are several options to customize slider.


## Installation

- First we download and unzip the [plugin](https://github.com/pascaliske/pi-slider/archive/master.zip)

- We include the latest version of jQuery (see [Google Developers](https://developers.google.com/speed/libraries/devguide#jquery) for cdn-version)

- Include the CSS-Stylesheet file  and the JavaScript file of the pi-slider in the header of your HTML-file:
```html
<link rel="stylesheet" type="text/css" href="pi-slider/pi-slider.min.css">
<script type="text/javascript" src="pi-slider/pi-slider.min.js"></script>
```

- We prepare a simple HTML element (such as a `div` tag) with an id `#sample`:
```html
<div id="slider">
	<img src="image1.png" title="Caption here (optional)" data-href="Link here (optional)" />
	<img src="image2.png" title="Caption here (optional)" data-href="Link here (optional)" />
	<img src="image3.png" title="Caption here (optional)" data-href="Link here (optional)" />
</div>
```
>The _pi-slider_ include itself in the prepared `div` element. You also can style this element with your own css.

- Include the following Javascript and replace **#slider** with the id of the element you've prepared in the previous step. (This calls the main function of the slider)
```javascript
$(document).ready(function() {
	$("#slider").piSlider({
		progressColor: '#f0f0f0'
	});
});
```
I recommend it to include this Javascript code at the bottom of the file just before the closing body tag because of performance reasons.
>Don't forget the `<style>` tag around the Javascript code! ;)

## Configuration

The _pi-slider_ has several options to change its appearance and behavior. This options are listed below with a short description.
```javascript
// displays a loading graphic before the slider fades in
loader: true,
// start image
startImage: 1,
// autoplay or manual slides with arrows
autoplay: true,
// continuous play of slides
loop: true,
// play direction
backwards: false,
// which effect to blend content
effect: 'fade',
// duration of  each slide
duration: '8000',
// pause on hover
pauseOnHover: false,
// displays a shadow below the slider
shadow: true,
// enables/disables fullsize view of the slider
fullsize: false,
// sets progressbar color (word or hex code)
progressColor: 'grey',
// shows/hides the progressbar
progressBar: true,
// sets the position of the progressbar (top or bottom)
progressPosition: 'bottom',
// shows/hides control arrows
arrows: true,
// shows/hides captions
captions: true
```

## Contact
If you have questions, suggestions or feature requests you can write a pull request or you can contact me with this **Email**: [info@pascal-iske.de](mailto:info@pascal-iske.de).

## License
This jQuery plugin is made with lots of love and its free of charge so you can use it on your website. Please fork this repo for your own changes. In general I would like to see my name in the credits. Thank you!
