/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = angular.module("myApp", ["ngRoute"]);
app.controller("personController", ['$routeParams', function ($routeParams) {
        var persons = this;
        persons.all = [
            {id: 1, name: "Jens", age: 18}
            , {id: 2, name: "Peter", age: 23}
            , {id: 3, name: "Hanne", age: 23}
        ];
        persons.id = $routeParams;


        persons.fun = function createPerson(person) {
            console.log(person);
            persons.all.push({
                id: persons.all.length+1,
                name: person.newName,
                age: person.newAge
            });
            console.log(persons.all);
        }

    }]);
app.config(function ($routeProvider) {
    $routeProvider
            .when("/newPerson", {
                templateUrl: 'newPerson.html',
                controller: "personController as personCtrl"
            })
            .when("/allPerson", {
                templateUrl: "allPerson.html",
                controller: "personController as personCtrl"

            })
            .when("/person/:id", {
                templateUrl: "details.html",
                controller: "personController as personCtrl"
            });
});




