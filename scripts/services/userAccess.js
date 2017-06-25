/**
 * Created by frt on 3/28/17.
 */

module.exports = function ($http, $rootScope, $timeout) {
    var Access = {

        OK: 200,


        FORBIDDEN: 403,


        isLogin: function () {
            if (localStorage.getItem('auth')) {
                return Access.OK;
            } else {
                return Access.FORBIDDEN;
            }
        }

    };

    return Access;
};