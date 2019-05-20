

requirejs.config({
    baseUrl: 'lib',
    paths:{
        app:'../app'
    }
})

//start loadng the data
requirejs(['app/main.js', 'app/messages.js'], function(app, messages){
//Load any app-specific modules

    console.log(app);
    var h1 = document.getElementById('msg');
    h1.innerHTML = messages.getHello();

});