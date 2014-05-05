
function controller($scope) {
    //Inicializamos la lista con dos elementos
    $scope.lista=["Manzanas","Pepinillos"];

    $scope.submit = function(message) {
        //Anyadimos el elemento a la lista.
        $scope.lista.push(message)
        //Vaciamos el campo de texto
        $scope.message="";
    }
}
