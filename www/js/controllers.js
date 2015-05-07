angular.module('reader.controllers', ['ionic', 'ngCordova'])
    .controller('readerCtrl', function($scope, $cordovaBarcodeScanner) {
        $scope.leerCodigo = function() {

            alert('presiono');
            // body...
            $cordovaBarcodeScanner.scan().then(function(img) {
                // body...
                alert(img.text);

            }, function(err) {
                // body...
                alert('Error : ' + err);
            });
        }
    }).controller('panelCtrl', function($scope) {
        var people = [{
            username: 'oscarg798',
            password: '123456'

        }, {
            username: 'stalbeal',
            password: 'saba10'

        }];
        $scope.log = false;

        $scope.users = people;

        $scope.logIn = function(username, password) {
            // body...
            //alert('users ' + JSON.stringify($scope.users));
            if (!username){
                alert('Debe ingresar nombre de usuario');
                 return;
            }

            if(!password){
            	 alert('Debe ingresar una contraseña');
                 return;
            }

            $scope.users.forEach(function(user) {
                if (user.username == username && user.password == password) {
                    $scope.log = true;
                    return;
                }
            });

            if (!$scope.log)
                alert("Los datos ingresados no son correctos verifique por favor");

        }

        $scope.isLogged= function  (argument) {
        	// body...
        	return $scope.log;
        }

        $scope.sayHello = function(name) {
            // body...
            alert('Hola ' + name);
        }


    });