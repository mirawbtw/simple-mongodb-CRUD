# Node MongoDB Restify basic CRUD
1. Install Node.js, MongoDB. The app will create and use a database named "animals" if not changed
2. Clone repo: `git clone https://github.com/loicmarie/simple-mongodb-CRUD.git app && cd app`
3. Start server: `node index.js`
4. Try it out:

    `$ curl --form "name=jean-denis&weight=6.3&age=12" localhost:8080/cats`

    `$ curl --form "name=albert&weight=8.2&age=9" localhost:8080/cats`

    `$ curl --form "name=rantanplan&weight=22.3&age=11" localhost:8080/dogs`

    `$ curl localhost:8080/cats`

    `$ curl localhost:8080/dogs`

I recommend to use a tool such as [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop) in order to test GET, POST, PUT and DELETE requests
