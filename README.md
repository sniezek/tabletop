# tabletop
## Description
Tabletop is a website where users can organise and join tabletop games events.

Matches can be either sparrings or tournaments.

Tournament scores are submitted by events' organisers, therefore each registered game has a ranking of players.

Users have a variety of statistics and they can get achievements for being active players.
## Team
* [sniezek](https://github.com/sniezek) (project idea, Server architecture, Events)
* [pwolaq](https://github.com/pwolaq) (App architecture, Events)
* [Ninani](https://github.com/Ninani) (Tournaments)
* [rafalgrm](https://github.com/rafalgrm) (Tournaments)
* [ravinha](https://github.com/ravinha) (Tournaments)
* [kakoniec](https://github.com/kakoniec) (Games)
* [ew940709](https://github.com/ew940709) (Games)
* [Matikul](https://github.com/Matikul) (Users)
* [Szagrat](https://github.com/Szagrat) (Users)
* [rafalzelazko](https://github.com/rafalzelazko) (Users)
* [l0rd11](https://github.com/l0rd11) (Achievements)
* [Vlizer](https://github.com/Vlizer) (Achievements)

## DataBase
### Starting in docker

assuming you have alredy started docker just type:

```
docker run --name demo-mysql -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=db_example -e MYSQL_USER=springuser -e MYSQL_PASSWORD=ThePassword -p 3306:3306 -d mysql:5.6
```
remember to start databese before server

### Starting stanalone
start mysql server then cerate bd_example database 
next create user springuser with pass ThePassword and grant him all rights to db

## Server
### Starting
```
$ cd server
$ gradlew bootRun
```
Server will be available at `localhost:8080`.


```
### Stack
* Spring Boot
* Spring Security
* Spring Data JPA
* Spring Data REST
## App
```
$ cd app
```
### Setup
Execute this once:
```
$ npm install
```
And then every time you want to start the application:
```
$ npm start
```
App will be available at `localhost:3000`
### Stack
* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/docs/introduction/)
* [Material Design Lite](https://getmdl.io/)
* [React MDL](https://react-mdl.github.io/react-mdl/)

### Useful commands
Extracted from [React Redux starter kit](https://github.com/davezuko/react-redux-starter-kit):

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Serves your app at `localhost:3000`. HMR will be enabled in development.|
|`compile`|Compiles the application to disk (`~/dist` by default).|
|`lint`|Lint all `.js` files.|
|`lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|

## Achievements
You need:
* [Sbt](http://www.scala-sbt.org/)

### Setup
If you want run it type:
```
$ sbt run
```
Service will be available at `localhost:9000`
