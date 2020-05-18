$(() => {
    $(".devour-btn").on("click", (event) => {
        var id = $(this).data("id");
        var newState = $(this).data("newState");

        var newDevouredState = {
            devoured: newState
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
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

    $(".devour-btn").on("click", (event) => {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            () => {
                location.reload();
            }
        )
    })
})