$(document).ready(function(){
	"use strict";
	/*
	* parentEl      : Main container selector
	* targetElement : Slides Container selector
	* elementItem   : Slide selector
	* speed         : Slider speed
	*<div id="parentEl">
	*   <div id="targetElement">
	*      <div class="elementItem"></div>
	*   </div>
	*</div>
	*/
	var animateMe = function(parentEl,targetElement,elementItem, speed){
		var slidesWidth = 0;
		$(elementItem).each(function(){
			slidesWidth+= $(this).outerWidth();
			$(this).css({"width":$(this).width()});
		});

	$(targetElement).css({"width":slidesWidth,"right":"-"+$(parentEl).width()+"px"});
    $(targetElement).animate(
        {
        'right': slidesWidth
        },
        {
        duration: speed,
        complete: function(){
            animateMe(parentEl,this,elementItem, speed);
            }
        }
    );
	};
	animateMe('#sides-slider-wrapper','#slide-items','.side-slide-item',40000);
});