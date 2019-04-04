//shortcut of document ready function
$(function(){ //anonymous function with no name
    var $myorders = $("#order"); //unorder list with no contents with id=order
    var $name =  $("#name"); //td
    var $drink1 = $("#drink1"); //td
    var $drink2 = $("#drink2"); //td
    var $drcolor = $("#select_color"); //td, list of 1 iotions
    var $id = $("#idul");


    $("#add-order").click(function(){
        var order = { //create order object that will be posted to the api website
            "name": $name.val(),
            "drink": {  "drink1": $drink1.val(),
                        "drink2": $drink2.val()},
            "dcolor": $drcolor.val()
        };

        $.ajax({
            type: "post",
            url: "http://rest.learncode.academy/api/rgw32/cis3360drinks",
            data: order,
            success: function(newOrder){ //what happens on success
                alert("Item added.");},
            error: function(errorOrder){
                alert("Error at post method")
            }
        });
    });

    $("#get-order").click(function(){



        $.ajax({
            type: "get",
            url: "http://rest.learncode.academy/api/rgw32/cis3360drinks",
            success: function(orderList){ //what happens on success
                $.each(orderList, function(i, item)
                {$myorders.append("<li> Name:" + item.name + ", Drink1: " + item.drink.drink1 + ", Drink2: "
                    + item.drink.drink2 + ", Id: " + item.id + "</li>")})},
            error: function(errorOrder){
                alert("Error at post method")
            }
        });
    });

    $("#put-order").click(function(){

        var order = { //create order object that will be posted to the api website
            "name": $name.val(),
            "drink": {  "drink1": $drink1.val(),
                "drink2": $drink2.val()},
            "dcolor": $drcolor.val(),
            "orderID": $id.val()
        };

        $.ajax({
            type: "put",
            url: "http://rest.learncode.academy/api/rgw32/cis3360drinks/" + order.orderID,
            data: order,
            success: function(orderList){ //what happens on success
                $.each(orderList, function(i, item)
                {$myorders.append("<li> Name:" + item.name + ", Drink1: " + item.drink.drink1 + ", Drink2: "
                    + item.drink.drink2 + ", Id: " + item.id + "</li>")})},
            error: function(errorOrder){
                alert("Error at post method")
            }
        });
    });

    $("#delete-order").click(function(){

        var order = { //create order object that will be posted to the api website
            "name": $name.val(),
            "drink": {  "drink1": $drink1.val(),
                "drink2": $drink2.val()},
            "dcolor": $drcolor.val(),
            "orderID": $id.val()
        };

        $.ajax({
            type: "delete",
            url: "http://rest.learncode.academy/api/rgw32/cis3360drinks/" + order.orderID,
            data: order,
            success: function(orderList){ //what happens on success
                $.each(orderList, function(i, item)
                {$myorders.append("<li> Name:" + item.name + ", Drink1: " + item.drink.drink1 + ", Drink2: "
                    + item.drink.drink2 + ", Id: " + item.id + "</li>")})},
            error: function(errorOrder){
                alert("Error at post method")
            }
        });
    });
});