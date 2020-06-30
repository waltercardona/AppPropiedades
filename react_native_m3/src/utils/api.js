import Axios from 'axios'

const URL = 'http://192.168.0.17:4000'

function invokeService(config, next) {
    Axios(config)
        .then(function (response) {
            console.log(response);
            next(response, null);
        })
        .catch(function (error) {
            console.log(error);
            next(null, error);
        })
}

class API {
    loadUser(email, password, next) {
        let path = '/api/users/signin';

        let userData = {
            email: email,
            password: password
        };

        let options = {
            baseURL: URL,
            url: path,
            method: 'post',
            data: userData,
            headers: {
                Accept: "application/json, text/plain, */*",
                'Content-Type': "application/json;charset=utf-8",
                'Access-Control-Allow-Origin': '*'
            }
        };

        // Se invoca el servicio RESTful con las opciones configuradas previamente y con los datos del usuario.
        invokeService(options, function (user, err) {
            if (err) {
                next(null, err);
            } else {
                next(user.data.user, null);
            }
        });
    }

    createUser(name, email, password, confirm_password, next) {
        let path = '/api/users/signup';
        // let path = '/users?name=' + name + '&email=' + email;

        let userData = {
            name: name,
            email: email,
            password: password,
            confirm_password: confirm_password
        };

        let options = {
            baseURL: URL,
            url: path,
            method: 'post',
            data: userData,
            headers: {
                Accept: "application/json, text/plain, */*",
                'Content-Type': "application/json;charset=utf-8",
                'Access-Control-Allow-Origin': '*'
            }
        };

        // Se invoca el servicio RESTful con las opciones configuradas previamente y con los datos del usuario.
        invokeService(options, function (user, err) {
            if (err) {
                next(null, err);
            } else {
                next(user.data.user, null);
            }
        });
    }

    createPropiedad(title, type, address, rooms, price, image, userId, next) {
        let path = '/api/Propiedad/new-Apto';

        let userData = {
            title: title,
            type: type,
            address: address,
            rooms: rooms,
            price: price,
            image: image,
            userId: userId
        };

        let options = {
            baseURL: URL,
            url: path,
            method: 'post',
            data: userData
        };

        // Se invoca el servicio RESTful con las opciones configuradas previamente y con los datos del usuario.
        invokeService(options, function (user, err) {
            if (err) {
                next(null, err);
            } else {
                next(user.data.user, null);
            }
        });
    }

    async getData() {
        let urlTest = "https://yts.lt/api/v2/list_movies.json"
        const query = await fetch(urlTest)
        const data = await query.json()
        return data
    }

}

export default new API()