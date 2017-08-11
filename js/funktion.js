String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

var app = angular.module("app", ["firebase"]);

$(function(){
    $('.fadein p:gt(0)').hide();
    setInterval(function(){$('.fadein > :first-child').fadeOut().next('p').fadeIn().end().appendTo('.fadein');}, 5000);
});


  var config = {
    apiKey: "AIzaSyCCH6xGL1ONYZaPuTS548t8x6UEJ785gOQ",
    authDomain: "oscaredmanhemsida.firebaseapp.com",
    databaseURL: "https://oscaredmanhemsida.firebaseio.com",
    projectId: "oscaredmanhemsida",
    storageBucket: "",
    messagingSenderId: "736638220433"
  };
  firebase.initializeApp(config);

  var app = angular.module("app", ["firebase"])

  app.factory("kommentarer", function($firebaseArray) {
var ref = firebase.database().ref().child("kommentarer");
return $firebaseArray(ref);

});
app.controller("KommentarCtrl", function($scope, kommentarer) {
	$scope.kommentarer = kommentarer;

	$scope.kommentar = {
		text: "",
		skribent: ""
	}

	$scope.addComment = function() {

		if ($scope.kommentar.skribent === "abc123def") {
			$scope.kommentar.skribent = "<Admin> Oscar";
		}
		else if ($scope.kommentar.skribent.toLowerCase().indexOf("<admin>") !== -1)
		{
			$scope.kommentar.skribent = "AdminWannaBe";
		}

	    // Här lägger vi till vår kommentar ($scope.kommentar) till listan med kommentarer.
	    // Det sparas automatiskt i Firebase-databasen.
	    $scope.kommentarer.$add($scope.kommentar);

	    // Tömmer texten i kommentarfältet
	    $scope.kommentar = {
	        text: "",
	        skribent: ""
	    };
	};

});
