// Set up the slider namespace--no need for routing here, really
var slider = angular.module('slider', []);

// Set up our slider as a standalone custom directive, so it's reusable
// (Note the camel cased "mySlider" vs., in index.html, <my-slider>: intentional)
slider.directive('customSlider', function() {
    return {
        restrict: 'E', // So we can invoke it as a standalone element
        templateUrl: 'sliderView.html',
        controller: 'sliderController'
    };
});