tyrelSite.controller('sliderController',
    ['$scope', '$timeout',
    function ($scope, $timeout) {
        // If this were true MVC, we'd put the slider text in a model; since it's a simple demo, we'll just supply the data here
        $scope.slides = [
            {
                testimonial: 'Tyrel&rsquo;s a hacker. I&rsquo;ve been lucky enough to work with him on multiple types of marketing projects, and he&rsquo;s come at them all from the same angle: maximize revenue, scalability, and reusability; minimize repeated effort and wasted time. That mindset makes him super efficient&mdash;<strong>he gets things done, and the things he does make money</strong>.<br><br>Tyrel&rsquo;s also a serious advocate for quality. He&rsquo;ll find and correct HTML bugs even when they render correctly, just because he likes doing things well. He&rsquo;ll aggressively solicit feedback on his marketing copy, because he knows that criticism is the fastest way to improve. All of this means extra effort on his part, but it&rsquo;s worth it, because <strong>Tyrel&rsquo;s work is never less than awesome</strong>. ',
                signature: 'Marketing Communications Editor at Logos'
            },
            {
                testimonial: '[Tyrel] strategically assesses how every project he works on fits into the big picture, and then he drills down to the tiniest detail to ensure both quality and alignment with the core objective. This doesn’t slow him down in execution, however. <strong>He’ll find a way to take a project from idea to reality in efficient ways</strong>—always looking for even higher ROI. He also will buckle down and do work he may not enjoy if he sees that it benefits his team.',
                signature: 'Targeted Marketing Lead at Logos'
            },
            {
                testimonial: 'Tyrel is the epitome of a lifelong learner. He constantly seeks growth and knowledge&mdash;inside and outside his job.&nbsp;.&nbsp;.&nbsp;.&nbsp;Of anyone I&rsquo;ve ever worked with, <strong>Tyrel is among the best at asking the right questions</strong> and seeking feedback, not to mention taking feedback in the most gracious manner. He identifies areas in which he wants to grow and constantly seeks tangible opportunities to do so. Working with him is fun and easy, and I would highly recommend it if you get the chance.',
                signature: 'Marketing Communications Editor at Logos'
            },
            {
                testimonial: 'Tyrel is a valuable asset to any team he&rsquo;s a part of. His ability to go outside the box, and search for new ways to optimize and create value, has opened up doors for new ideas.<br><br><strong>His ideas are full scope</strong>&mdash;from conception to execution&mdash;and he&rsquo;s always look for ways to make things run smoother. He&rsquo;s a marketing-metrics whiz, and he&rsquo;s constantly look for possibly learning opportunities.',
                signature: 'Promotions Specialist at Logos'
            },
            
            {
                testimonial: 'After working with Tyrel on countless projects over the past two years, I can say with confidence that he is an effective leader. <strong>He is versatile as both a creative and analytical thinker</strong>, where he continuously provides new and relevant perspectives. Specializing in productivity, he contributes work that exceeds expectations. Tyrel is a valuable asset to any team.',
                signature: 'Student at Western Washington University'
            }
        ];
        // The placeholder that holds the other slides' space open
        // (Optional: solves slides of differing height bouncing the screen up and down)
        $scope.placeholder = {
            h2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, omnis, temporibus, asperiores animi provident dicta explicabo modi vitae fugiat fuga ipsa id nam voluptas repudiandae optio cum ex vero ipsum nemo voluptatum minima a obcaecati eum consectetur dolorem! Aliquid, voluptatem, laboriosam, blanditiis, modi fugit quo molestiae unde dolore consequatur consequuntur impedit sequi autem aut neque ab et iste. Doloribus, optio, recusandae, nesciunt minima maxime aliquid dolorum repudiandae commodi consectetur quam odio iure itaque in! Voluptatem modi iste excepturi adipisci recusandae.',
            p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, ex voluptatum sequi quae ab reiciendis!'
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
        // Whenver the timer hits 15, fire next()
        $scope.$watch('timer', function() {
            if ($scope.timer > 14) {
                $scope.next();
            }
        });
    }
]);