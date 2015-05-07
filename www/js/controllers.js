angular.module('reader.controllers', ['ionic','ngCordova'])
.controller('readerCtrl', function($scope, $cordovaBarcodeScanner) {
	$scope.leerCodigo=  function() {

		alert('presiono');
		// body...
		$cordovaBarcodeScanner.scan().then(function (img) {
			// body...
				alert(img.text);

		}, function (err) {
			// body...
			alert('Error : ' +err);
		});
	}
});