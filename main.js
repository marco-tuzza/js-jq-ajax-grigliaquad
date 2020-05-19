var source   = $("#entry-template").html();

var template = Handlebars.compile(source);


for (var i = 0; i < 6; i++) {

    var html = template()

    $(".grid").append(html)
}


$(".square").click(

    function() {

        var currentSquare = $(this)
        var currentSpan = $(this).find("span")

        $.ajax({

            "url": "https://flynn.boolean.careers/exercises/api/random/int",

            "method": "get",

            "success": function(data) {

                var number = data.response

                console.log(number);

                console.log(currentSquare);

                if (number <= 5) {

                    currentSquare.addClass("yellow")

                    currentSpan.text(number)

                } else {

                    currentSquare.addClass("green")

                    currentSpan.text(number)

                }
            }

        });
    }
)
