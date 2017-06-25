/**
 * Created by frt on 3/28/17.
 */

module.exports = function ($http, $rootScope, $timeout, $state) {
    var loginUser = {

        OK: 200,


        FORBIDDEN: 403,


        loginn: function (user, callback) {

            if(user.name == 'admin' && user.password =='admin'){
                localStorage.setItem("auth", "admin");
                $state.transitionTo("home.dashboard");
            }
            else {
                callback('User name or Password didn"t match');
            }
        },
        logout: function(){
            localStorage.removeItem("auth");
            $state.transitionTo("login");
        }

    };

    return loginUser;
};