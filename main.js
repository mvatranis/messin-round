$(function() {
    // Code here
    $('.button-primary').click(function() {
        $.getJSON( 'affirmation.json', function(json) {
            json.forEach(function(obj) { 
                let keys = Object.keys(obj);
                $('h2').text(obj[keys[keys.length * Math.random() << 0]]); 
            });
        });
    });
});
