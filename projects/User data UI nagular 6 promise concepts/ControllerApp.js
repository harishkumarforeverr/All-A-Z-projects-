(function () {
    var module = angular.module("myapp");
    module.controller("myCtr", myCtrFunction);
    function myCtrFunction(ContactsService) {
        var self = this;
        this.toogle_sh = false;
        this.saveUserTogger = false;
        ContactsService.getContacts().then(function (contacts) {
            self.users = contacts; 
        });
        this.userIsCliked = function (index) {
            this.selectedUser = this.users[index];
            self.e_message = undefined;
            self.s_message = undefined;
        }
        this.toogle_sh_function = function () {
            this.toogle_sh = !this.toogle_sh;
        }
        this.editUserData = function () {
            this.toogle_sh_function();
        }
        this.saveUserData = function () {
            if (!this.selectedUser.name || !this.selectedUser.id) {
                self.w_message = "please fill that data ";
            }
            else if (this.saveUserTogger) {
                ContactsService.AddNewUserDataToServer(this.selectedUser).then(function () {
                    window.location.reload(true);
                });
                this.toogle_sh = false;
                this.saveUserTogger = false;
            }
            else {
                this.toogle_sh_function();
                ContactsService.saveModifyedUserData(this.selectedUser).then(function () {
                    self.s_message = "Data Upated sucessfull ";
                }, function () {
                    self.e_message = "Error,try again ";
                });
            }
        }
        this.AddNewUserData = function () {
            this.selectedUser = {
                "id": new Date().toTimeString()
            };
            this.toogle_sh = true;
            this.saveUserTogger = true;
        }
        this.deleteUserData = function (index) {
            ContactsService.deleteUserDataInServer(index).then(function () {
                window.location.reload(true);
            });
        }
    }
})();