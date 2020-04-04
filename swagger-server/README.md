# let's create swagger local server

[https://qiita.com/oukayuka/items/0021f8bfb45d072fd107](https://qiita.com/oukayuka/items/0021f8bfb45d072fd107)

1. `mkdir swagger-server`

2. `wget http://petstore.swagger.io/v2/swagger.yaml`

3. change host property in `swagger.yaml` as `host: "localhost:8081"`

4. install swagger-codegen

- `brew cask install java`

- `brew install swagger-codegen`

5. create environment

- `swagger-codegen generate -i swagger.yaml -l nodejs-server`
- `npm install`

6. run server

`node index.js`

7. visit

docs

 [http://localhost:8080/docs/](http://localhost:8080/docs/)

api

 [http://localhost:8080/v2/pet/1](http://localhost:8080/v2/pet/1)

 8. hit get request

 `curl -X GET "https://localhost:8081/v2/pet/findByStatus?status=available" -H "accept: application/json"`

 ref: [https://qiita.com/oukayuka/items/0021f8bfb45d072fd107]https://qiita.com/oukayuka/items/0021f8bfb45d072fd107()