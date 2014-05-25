slider.controller('sliderController',
    ['$scope', '$timeout',
    function ($scope, $timeout) {
        // If this were true MVC, we'd put the slider text in a model; since it's a simple demo, we'll just supply the data here
        $scope.slides = [
            {
                name: 'First slide',
                content: 'Dicta, autem, architecto laboriosam expedita quisquam alias pariatur aperiam perferendis recusandae consequatur tenetur dolore quasi aut obcaecati perspiciatis sunt impedit fugiat et ipsam necessitatibus unde assumenda quibusdam quis magnam debitis. Ipsa, sequi, modi earum inventore reiciendis nesciunt impedit quae neque quibusdam dolor?'
            },
            {
                name: 'Second slide',
                content: 'Aut, nulla, odio, facilis minima ab repellendus sint quaerat vero vel deleniti consequuntur at soluta totam assumenda voluptas vitae ratione enim autem iusto omnis dolorum explicabo ex dicta quae veritatis sit veniam sapiente reiciendis commodi quidem deserunt eveniet rem labore nesciunt voluptatum.'
            },
            {
                name: 'Third slide',
                content: 'Qui, provident, aperiam, voluptas eveniet temporibus nostrum quisquam error nisi cum odit aut laudantium officiis quas suscipit debitis voluptatibus sit iusto odio? Voluptatum voluptas alias maxime sint. Exercitationem, provident officiis enim maiores reprehenderit nobis doloremque rerum iure qui nihil odio iste consectetur.'
            },
            {
                name: 'Fourth slide',
                content: 'Officiis, eos, repudiandae, dolor, perferendis consequatur debitis iusto minus numquam aliquid voluptatem quisquam voluptas ipsam molestiae unde quibusdam quam quia nihil eius saepe eveniet! Consequuntur, et, velit esse tenetur ducimus aspernatur ea ullam vero consectetur officiis quas hic nesciunt saepe quaerat dolor.'
            },
            {
                name: 'Fifth slide',
                content: 'Nam deleniti animi voluptates quaerat tempora veritatis est pariatur necessitatibus quas illo! Facilis, officiis, pariatur, reprehenderit veritatis odit impedit consequuntur beatae possimus cumque modi quaerat provident obcaecati error labore dolorem cupiditate blanditiis reiciendis voluptatem debitis quas dolore mollitia unde at qui doloribus!'
            }
        ];
        // The placeholder that holds the other slides' space open
        // (Optional: solves slides of differing height bouncing the screen up and down)
        $scope.placeholder = {
            h2: 'Placeholder',
            p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, ratione, iusto quas soluta facilis repellat impedit accusamus perferendis vitae saepe atque vero laboriosam hic adipisci ab ad eveniet. Libero, officia, amet ea temporibus saepe dolore ad reprehenderit repellat deserunt perferendis nostrum voluptatem animi facere illo dolorem minus sint suscipit rerum.'
        };
        $scope.index = 0;
        $scope.timer = 0;
        // Build a simple one-second counter
        $scope.counter = function() {
            $scope.timer ++;
            $timeout($scope.counter, 1000);
        };
        // Start it
        $scope.counter();
        // Build functions to increment the index forward...
        $scope.next = function() {
            if ($scope.index == $scope.slides.length - 1) {
                $scope.index = 0;
                $scope.timer = 0;
            }
            else {
                $scope.index ++;
                $scope.timer = 0;
            }
        };
        // ...and backward
        $scope.previous = function() {
            if ($scope.index === 0) {
                $scope.index = $scope.slides.length - 1;
                $scope.timer = 0;
            }
            else {
                $scope.index --;
                $scope.timer = 0;
            }
        };
        // Change $scope.index when someone clicks a nav dot
        $scope.activate = function(dotIndex) {
            $scope.index = dotIndex;
            $scope.timer = 0;
        };
        // Whenever $scope.index changes, hide all slides and reveal only the current slide
        $scope.$watch('index', function() {
            $scope.slides.forEach(function(item) {
                item.visible = false;
            });
            $scope.slides[$scope.index].visible = true;
        });
        // Whenver the timer hits 10, fire next()
        $scope.$watch('timer', function() {
            if ($scope.timer > 9) {
                $scope.next();
            }
        });
    }
]);