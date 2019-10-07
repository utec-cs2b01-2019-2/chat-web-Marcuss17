function sendMessage(){
    alert("heeeeey");
}

function get_all_users(){
    console.log("Voy a traer todos los usuarios");

    $.getJSON("/users", function(data){
    var i =0;
    $.each(data, function(){
        user_to = data[i]['id'];
        e = '<li class="contact"><p>'+data[i]['username']+'</p></li>';
        i = i+1;
        $("<div/>",{html:e}).appendTo("#users");
        });
    });
}

