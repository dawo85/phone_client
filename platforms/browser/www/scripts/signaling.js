angular.module('phonertcdemo')
  .factory('signaling', function (socketFactory) {
    var socket = io.connect('http://192.168.1.43:3000/');
    
    var socketFactory = socketFactory({
      ioSocket: socket
    });

    return socketFactory;
  });