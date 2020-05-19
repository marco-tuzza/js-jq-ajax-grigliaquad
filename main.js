// Ad ogni click su un quadratino, parte una richiesta ajax per recuperare un numero random tra 1 e 9.
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
// BONUS: generare la griglia in jQuery utilizzando handlebars
