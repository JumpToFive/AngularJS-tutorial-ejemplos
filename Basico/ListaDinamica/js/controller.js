
function controller($scope) {
    //Initialize the elements in the list
    $scope.list=["Apples","Pepinillos"];

    $scope.submit = function(message) {
        //Add the element to the list
        $scope.list.push(message)
        //Empty the input text
        $scope.message="";
    }
}
