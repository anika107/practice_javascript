myObject = {
        "roles": [
            {
                "username": "admin",
                "password": "1234"
            },
            {
                "username": "user",
                "password": "1234"
            }
        ]
}

Object.keys(myObject.roles[0]).forEach(function(key) {
    var value = myObject[key];
    console.log(key)
});
var h = "hh_hh"
for(var i = 0;i < h.length; i ++){
    if(h[i] == '_'){
       console.log("yes")
    }
}