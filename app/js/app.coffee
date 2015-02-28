myApp = angular.module('myApp', [])
myApp.controller 'UserController', ($scope) ->
  $scope.user = {}
  $scope.user.name = 'youqingkui'
  $scope.user.email = 'youqingkui@qq.com'

  $scope.user.subscribe = ->
    console.log $scope.user.name + ', 您的订阅将发送到：' + $scope.user.email

myApp.controller 'ShowController', ($scope) ->
  $scope.shows = [
    {name: '驯龙高手2', watch: true}
    {name: '狼图腾', watch: true}
    {name: '天将雄师', watch: false}
    {name: '超能陆战队', watch: false}
    {name: '喜洋洋', watch: false}
  ]