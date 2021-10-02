(function () {
    var module = angular.module("myapp");
    module.service("ContactsService", function ($http) {
        //this.getContacts starts here
        this.getContacts = function () {
            var promise1 = $http.get("https://my-json-server.typicode.com/harishkumar809/myjson/db");
            var promise2 = promise1.then(function (res) {
                console.log("res1 : ",res);
                console.log("res2 : ", res.data.contacts);
                return res.data.contacts;
            });
            return promise2;
        }


        this.saveModifyedUserData = function (selectedUser) {
            return $http.put("https://my-json-server.typicode.com/harishkumar809/myjson/db/" + selectedUser.id, selectedUser);
        }

        // add new user 
        this.AddNewUserDataToServer = function (selectedUser) {
            return $http.post("https://my-json-server.typicode.com/harishkumar809/myjson/db/", selectedUser);
        }
        // add new user ends here 
        this.deleteUserDataInServer = function (selectedUser) {
            return $http.delete("https://my-json-server.typicode.com/harishkumar809/myjson/db/" + selectedUser);
        } 

    });
})();