/**
*Definimos el controlador que se encargara de leer el codigo de 
*barras 
*/
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
        /***
        *Definimos un controlador para el login  de usuarios 
        */
    }).controller('panelCtrl', function($scope) {
        var people = [{
            username: 'oscarg798',
            password: '123456'

        }, {
            username: 'stalbeal',
            password: 'saba10'

        }, {
        	username:'invitado',
        	password:'invitado'
        }];

        //Esta variable indica si el usuario se logeo o no 
        $scope.log = false;

        //Arreglo de usuarios
        $scope.users = people;

        //Funcion de login 
        $scope.logIn = function(username, password) {
            // body...
            //Verificamos si se ingreso usuario
            if (!username){
                alert('Debe ingresar nombre de usuario');
                 return;
            }

            //Verificamos si se ingreso contraseña
            if(!password){
            	 alert('Debe ingresar una contraseña');
                 return;
            }

            //Verificamos si los datos coindicen
            $scope.users.forEach(function(user) {
                if (user.username == username && user.password == password) {
                    $scope.log = true;
                    return;
                }
            });

            //Si no se tuvo exito error de credenciales
            if (!$scope.log)
                alert("Los datos ingresados no son correctos verifique por favor");

        }

        //Esta funcion devuelve la variable log
        $scope.isLogged= function  (argument) {
        	// body...
        	return $scope.log;
        }

        $scope.sayHello = function(name) {
            // body...
            alert('Hola ' + name);
        }


    });