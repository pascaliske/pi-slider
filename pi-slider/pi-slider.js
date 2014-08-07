(function ($, window, undefined) {
	$.fn.piSlider = function(settings) {
		// Global Vars
		var e = this;
		var settings = $.extend({}, $.fn.piSlider.defaults, settings);

		var loader = '<div class="loader"></div>';
		var images = $("img", this).wrapAll('<div class="images"></div>;');
		var shadow = '<div class="shadow"></div>';
		var controls = '<div class="controls" style="z-index:999"></div>';
		var arrows = { left: '<div class="arrow left"></div>', right: '<div class="arrow right"></div>'};
		var progressbar = '<div class="progressbar"></div>';
		var captionbar = '<div class="captionbar"></div>';

		var image_count = $(".images img").size();

		var first_image = 0;
		var last_image = image_count-1;
		var start_image = settings.startImage-1;
		var current_image = first_image;
		var next_image = current_image+1;
		var prev_image = current_image-1;

		// FadeIn Slider
		this.css({
			'width': '1000px',
			'height': '450px',
			'position': 'relative',
			'margin': '0 auto 150px'
		});

		// Set slider to fullscreen mode
		if(settings.fullsize) {
			settings.shadow = false;
			this.css({
				'width': '100%',
				'height': '100%',
				'margin': '0',
				'padding': '0'
			});
			$("body, html").css({
				'width': '100%',
				'height': '100%',
				'margin': '0',
				'padding': '0'
			});
		}

		if(settings.startImage) {
			current_image = start_image;
		}

		// FadeIn->Out loader
		if(settings.loader) {
			this.prepend(loader);
			$(".loader").fadeIn(800).delay(100).fadeOut(800, function() {
				// Start slider and fade all in
				startSlider(e);
			});
		} else {
			startSlider(e);
		}

		// pause on hover
		if(settings.pauseOnHover) {
			this.hover(function() {
				jQuery.queue($(".progressbar")[0], "fx", []);
				$(".progressbar").stop();
			}, function() {
				$(".progressbar").delay(200).animate({
					width: '100%'
				},8000, function() {
					$(".progressbar").delay(300).animate({
						height: '0'
					},200,function() {
						$(".progressbar").removeAttr('style');
						nextSlide();
					});
				});
				jQuery.queue($(".progressbar")[0], "fx", function() {
					jQuery.dequeue(this);
				});
			});
		}

		function startSlider(e) {
			// FadeIn first image
			if(settings.startImage) {
				$(".images, .images img:eq("+start_image+")").fadeIn('400');
			} else {
				$(".images, .images img:eq("+first_image+")").fadeIn('400');
			}

			// Append and fadeIn controls
			e.append(controls);
			
			$(".controls").fadeIn(300);
			// Display arrows
			if(settings.arrows) {
				$(".controls").prepend(arrows.left).append(arrows.right);
			}

			// Display progressbar and set position
			if(settings.progressBar) {
				$(".controls").append(progressbar);
				$(".progressbar").css('background-color', settings.progressColor);
				if(settings.progressPosition === 'top') {
					$(".progressbar").css({
						top: '0'
					});
				}
			}

			// Display captions
			if(settings.captions) {
				$(".controls").append(captionbar);
				if(settings.startImage) {
					$(".captionbar").append("<a href='"+getLink(start_image)+"'><span>"+getCaption(start_image)+"</span></a>");
				} else {
					$(".captionbar").append("<a href='"+getLink(current_image)+"'><span>"+getCaption(current_image)+"</span></a>");
				}
			}

			// Display shadow
			if(settings.shadow) {
				e.append(shadow);
				$(".shadow").delay(200).fadeIn(500);
			}

			if(settings.autoplay) {
				progressBar();
			} else {
				$(".captionbar").animate({
					height: '55px'
				}, 600, function() {
					$(".captionbar span").fadeIn(400, function() {
						$(".captionbar span").css({
							'display': 'block'
						});
					});
				});
			}
		}

		function progressBar() {
			$(".captionbar").animate({
				height: '55px'
			}, 600, function() {
				$(".captionbar span").fadeIn(400, function() {
					$(".captionbar span").css({
						'display': 'block'
					});
				});
			});
			if(settings.progressPosition === "top") {
				$(".progressbar").css({
					'top': '0'
				});
			}
			$(".progressbar").css({
				'background-color': settings.progressColor,
				'width': 0
			}).delay(200).animate({
				width: '100%'
			}, 8000, function() {
				if(settings.captions) {
					$(".captionbar span").fadeOut(400, function() {
						$(".captionbar").animate({
							height: '0'
						}, 600,function() {
							if(settings.backwards) {
								prevSlide();
							} else {
								nextSlide();
							}
						});
						$(".progressbar").animate({
							height: '0'
						}, 200, function() {
							$(".progressbar").removeAttr('style');
						});
					});
				} else {
					$(".progressbar").delay(300).animate({
						height: '0'
					}, 200, function() {
						$(".progressbar").removeAttr('style');
						if(settings.backwards) {
							prevSlide();
						} else {
							nextSlide();
						}
					});
				}
			});
			if(settings.pauseOnHover) {
				jQuery.queue($(".progressbar")[0], "fx", function() {
					jQuery.dequeue(this);
				});
			}
		}

		//get caption for current_image
		function getCaption(current_image) {
			return $(".images img:eq("+current_image+")").attr('title');
		}

		//get link for the current_image's caption
		function getLink(current_image) {
			if($(".images img:eq("+current_image+")").attr('data-href')) {
				return $(".images img:eq("+current_image+")").attr('data-href');
			} else {
				return '';
			}
		}

		//slider transition
		function transition(src, tar) {
			$(".progressbar").css({
				'background-color': settings.progressColor,
				'width': 0
			});
			if(settings.effect === "fade") {
				// simple fade effect
				$(".images img:eq("+src+")").fadeOut('800');
				$(".images img:eq("+tar+")").delay(200).fadeIn('1600');
			} else if(settings.effect === "slide") {
				// simple slide effect
				// get width of source image
				var width = $(".images img:eq("+src+")").width();
				// set all images to visible
				$(".images img").show();
				// set target image right of source image
				$(".images img:eq("+tar+")").css({
					left: width
				});
				// animate source and target image
				$(".images img:eq("+src+")").animate({
					left: '-'+width
				});
				$(".images img:eq("+tar+")").animate({
					left: '0'
				});
			}
			if(settings.autoplay) {
				progressBar();
			}
		}

		// triggers transition to next image
		function nextSlide() {
			$(".captionbar a span").remove();
			if(current_image === last_image) {
				next_image = first_image;
				transition(current_image, next_image);
				current_image = first_image;
				next_image = next_image+1;
				$(".captionbar a").append("<span>"+getCaption(current_image)+"</span>");
			} else {
				next_image = current_image+1;
				transition(current_image, next_image);
				current_image = current_image+1;
				next_image = next_image+1;
				$(".captionbar a").append("<span>"+getCaption(current_image)+"</span>");
			}
		}

		// triggers transition to previous image
		function prevSlide() {
			$(".captionbar a span").remove();
			if(current_image === 0) {
				prev_image = last_image;
				transition(current_image, prev_image);
				current_image = last_image;
				prev_image = prev_image-1;
				$(".captionbar a").append("<span>"+getCaption(current_image)+"</span>");
			} else {
				transition(current_image, prev_image);
				current_image = current_image-1;
				prev_image = prev_image-1;
				$(".captionbar a").append("<span>"+getCaption(current_image)+"</span>");
			}
		}

		// Control Click Events
		$(document).on('click', '.left', function() {
			$(".progressbar").stop();
			if(settings.captions) {
				$(".captionbar span").fadeOut(400, function() {
					$(".captionbar").animate({
						height: '0'
					}, 600,function() {
						prevSlide();
					});
					$(".progressbar").animate({
						height: '0'
					}, 200, function(){
						$(".progressbar").removeAttr('style').css({
							'background-color': settings.progressColor,
							'width': 0
						});
					});
				});
			} else {
				$(".progressbar").animate({
					height: '0'
				}, 200, function(){
					prevSlide();
					$(".progressbar").removeAttr('style').css({
						'background-color': settings.progressColor,
						'width': 0
					});
				});
			}
		});

		$(document).on('click', '.right', function() {
			$(".progressbar").stop();
			if(settings.captions) {
				$(".captionbar span").fadeOut(400, function() {
					$(".captionbar").animate({
						height: '0'
					}, 600,function() {
						nextSlide();
					});
					$(".progressbar").animate({
						height: '0'
					}, 200, function() {
						$(".progressbar").removeAttr('style').css({
							'background-color': settings.progressColor,
							'width': 0
						});
					});
				});
			} else {
				$(".progressbar").animate({
					height: '0'
				}, 200, function() {
					nextSlide();
					$(".progressbar").removeAttr('style').css({
						'background-color': settings.progressColor,
						'width': 0
					});
				});
			}
		});

		$(document).on('click', '.captionbar', function() {
			alert("Open link!");
			$(this).load();
		});

	};

	$.fn.piSlider.defaults = {
		//loader
		loader: true,
		//play on startup
		autoplay: true,
		//continious play
		loop: true,
		//play backwards,
		backwards: false,
		//which effect to blend content
		effect: 'fade',
		//duration of slides
		duration: '8000',
		//pause on hover
		pauseOnHover: false,
		//easing for animations of the slides
		shadow: true,
		//enable/disable fullsize
		fullsize: false,
		//progressbar color
		progressColor: 'grey',
		//show/hide progressbar
		progressBar: true,
		//progressbar on top or bottom
		progressPosition: 'bottom',
		//progressbar shadow
		progressShadow: false,
		//show/hide arrows
		arrows: true,
		//show/hide captions
		captions: true,
		//start image
		startImage: 1
	};
})(jQuery);