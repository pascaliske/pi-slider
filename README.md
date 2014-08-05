# pi-slider

The _pi-slider_ is a very simple image slider build with jQuery. See the steps below for the installation. There are also several options to customize slider. See also my [Demo](http://dev.pascal-iske.de/demos/pi-slider/) of the slider.


## Installation

- Download and unzip the [plugin](https://github.com/pascaliske/pi-slider/archive/master.zip)

- Include the latest version of jQuery (see [Google Developers](https://developers.google.com/speed/libraries/devguide#jquery) for cdn-version)

- Include the CSS-Stylesheet file  and the JavaScript file of the pi-slider in the header of your HTML-file:
```html
<link rel="stylesheet" type="text/css" href="pi-slider/pi-slider.min.css">
<script type="text/javascript" src="pi-slider/pi-slider.min.js"></script>
```

- Prepare a simple HTML element (such as a `div` tag) with an id `#sample`:
```html
<div id="slider">
	<img src="image1.png" title="Caption here (optional)" data-href="Link here (optional)" />
	<img src="image2.png" title="Caption here (optional)" data-href="Link here (optional)" />
	<img src="image3.png" title="Caption here (optional)" data-href="Link here (optional)" />
</div>
```
>The _pi-slider_ include itself in the prepared `div` element.
You also can chose other types of HTML tags such as `section`, `header`, etc and you can style this element with your own css.

- Include the following Javascript and replace **#slider** with the id of the element you've prepared in the previous step. (This calls the main function of the slider)
```javascript
$(document).ready(function() {
	$("#slider").piSlider({
		progressColor: '#f0f0f0'
	});
});
```
>Don't forget the `<style>` tag around the Javascript code! ;)

I recommend it to include this Javascript code at the bottom of the file just before the closing body tag because of performance reasons.

>When you're not sure if you made it all right look at my [Demo](http://dev.pascal-iske.de/demos/pi-slider/).

## Configuration

The _pi-slider_ has several options to change its appearance and behavior. This options are listed below with a short description. Between the `{braces}` are the possible values for the options
```javascript
// displays a loading graphic before the slider fades in {true, false}
loader: true, 
// start image {number_of_image}
startImage: 1,
// autoplay or manual slides with arrows {true, false}
autoplay: true,
// continuous play of slides {true, false}
loop: true,
// play direction {true, false}
backwards: false,
// which effect to blend content {fade, slide}
effect: 'fade',
// duration of  each slide {time_in_ms}
duration: '8000',
// pause on hover {true, false}
pauseOnHover: false,
// displays a shadow below the slider {true, false}
shadow: true,
// enables/disables fullsize view of the slider {true, false}
fullsize: false,
// sets progressbar color {color_word, hex_code}
progressColor: 'grey',
// shows/hides the progressbar {true, false}
progressBar: true,
// sets the position of the progressbar {top, bottom}
progressPosition: 'bottom',
// shows/hides control arrows {true, false}
arrows: true,
// shows/hides captions {true, false}
captions: true
```
You have to copy the options into the JavaScript code from the last step of the [Installation](#installation). For every option write a new line
```javascript
...
$("#slider").piSlider({
	option_name: value,
	option_name: value,
	option_name: value,
	...
});
...
```

## Contact
If you have questions, suggestions or feature requests you can write a pull request to this repo or you can contact me with this **Email**: [info@pascal-iske.de](mailto:info@pascal-iske.de).

## License
This jQuery plugin is made with lots of love and its free of charge so you can use it on your website. Please fork this repo for your own changes. In general I would like to see my name in the credits. Thank you!
