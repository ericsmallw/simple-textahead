$(document).ready(function() {
    $('#typeahead').on('input', function() {
        var $input = $(this);
        var $results = $('.typeahead-results');
        var state_string = $input.val();

        if (state_string.length < 1) {
            $results.empty();
            $results.hide();
            return;
        }

        // Fetch data
        $.getJSON(`http://localhost:3000/states?state_string=${encodeURIComponent(state_string)}`, function(states) {
            // Clear and hide the results list if empty
            if (states.length === 0) {
                $results.empty();
                $results.hide();
                return;
            }

            // Populate results
            $results.empty();
            $.each(states, function(i, state) {
                $('<li>').text(state)
                         .appendTo($results)
                         .on('click', function() {
                             $input.val($(this).text());
                             $results.empty();
                             $results.hide();
                         });
            });

            // Show results
            $results.show();
        });
    });

    // Add keyboard navigation
    var index = -1;
    $('#typeahead').on('keydown', function(e) {
        var $items = $('.typeahead-results li');
        var itemCount = $items.length;

        // Down arrow
        if (e.keyCode === 40) {
            index = (index + 1) % itemCount;
            $items.removeClass('selected').eq(index).addClass('selected');
            e.preventDefault(); // Prevent the cursor from moving
        }
        // Up arrow
        else if (e.keyCode === 38) {
            if (index < 0) index = itemCount; // Cycle through the start
            index = (index - 1 + itemCount) % itemCount;
            $items.removeClass('selected').eq(index).addClass('selected');
            e.preventDefault(); // Prevent the cursor from moving
        }
        // Enter key
        else if (e.keyCode === 13) {
            if (index > -1) {
                // Simulate a click on the selected item
                $items.eq(index).click();
                index = -1; // Reset index
            }
            e.preventDefault(); // Prevent form submission
        }
    });

    // Hide results when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.typeahead-container').length) {
            $('.typeahead-results').hide();
            index = -1; // Reset index
        }
    });
});