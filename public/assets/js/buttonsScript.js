$(() => {
    $("#devour-btn").on("click", (event) => {
        var id = $("devour-btn").data("id");
        var newState = $("devour-btn").data("newState");

        var newDevouredState = {
            devoured: newState
        };
        console.log(newState)

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            () => {
                location.reload();
            }
        )
    });

    $(".new-burger").on("submit", (event) => {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newBurgerName").val().trim(),
            devoured: false
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            () => {
                location.reload();
            }
        )
    });

})