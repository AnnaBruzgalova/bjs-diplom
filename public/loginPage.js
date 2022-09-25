'use strict';

//Формы авторизации, регистрации
const userFormObject = new UserForm();
userFormObject.loginFormCallback = (data) => {
    ApiConnector.login(data, (response) => {
        if (response.success) {
            location.reload();
        } else {
            userFormObject.setLoginErrorMessage(response.error);
        }
    })
};

userFormObject.registerFormCallback = (data) => {
    ApiConnector.register(data, (response) => {
        if (response.success) {
            location.reload();
        } else {
            userFormObject.setRegisterErrorMessage(response.error);
        }
    })
};