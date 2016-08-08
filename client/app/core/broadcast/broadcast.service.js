angular
    .module('core.broadcast')
        .factory('BroadcastService', ['$rootScope',
            function($rootScope) {
                return {
                    broadcast: function(msg, data) {
                        $rootScope.$broadcast(msg, data);
                    }
                }
            }])