// Generated by CoffeeScript 1.8.0
(function() {
  var myApp;

  myApp = angular.module('myApp', []);

  myApp.controller('UserController', function($scope) {
    $scope.user = {};
    $scope.user.name = 'youqingkui';
    $scope.user.email = 'youqingkui@qq.com';
    return $scope.user.subscribe = function() {
      return console.log($scope.user.name + ', 您的订阅将发送到：' + $scope.user.email);
    };
  });

  myApp.controller('ShowController', function($scope) {
    return $scope.shows = [
      {
        name: '驯龙高手2',
        watch: true
      }, {
        name: '狼图腾',
        watch: true
      }, {
        name: '天将雄师',
        watch: false
      }, {
        name: '超能陆战队',
        watch: false
      }, {
        name: '喜洋洋',
        watch: false
      }
    ];
  });

}).call(this);

//# sourceMappingURL=app.js.map