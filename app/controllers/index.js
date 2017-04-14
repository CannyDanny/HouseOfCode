function doClick(e) {
    alert($.label.text);
}
   var fb = require('facebook');
    fb.permissions = ['public_profile', 'email'];
    fb.initialize();
    var loginButton = fb.createLoginButton({
       
    });
 function APIcall (){
fb.requestWithGraphPath('me', {fields: 'id, first_name, last_name, name, picture, age_range, email, link'}, 'GET', function(e) {
    if (e.success) {
        alert(e.result);
    } else if (e.error) {
        alert(e.error);
    } else {
        alert('Unknown response');
    }
});

}
 $.Window.fbProxy = fb.createActivityWorker({lifecycleContainer: $.Window});
 
$.Window.open();
