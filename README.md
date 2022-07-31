# StarWars RFA backend
A simple backend for the front end that acts as a proxy for [the StarWars API](https://swapi.co/documentation)

## Installation

1.  Install Dependencies

    * [Node.js (version 6.x is recommended)](https://nodejs.org/en/)

3.  Go to the project's root directory **cd /my/path/to/directory**
4.  Run **npm install**
5.  Start using it! **npm start**. By default, you can access the API at ` http://localhost:3001`. You can change this location by editing the `host` and `port` properties in the `src/config.js` file.

## Available end-points

### GET /planets

Gets all the planets available in page 1 of the Starwars API.

### GET /planets/:id

Obtains a planet given its id.

### GET /species

Gets all the species available in page 1 of the Starwars API.

### GET /species/:id

Obtains a species given its id.

### GET /vehicles

Gets all the vehicles available in page 1 of the Starwars API.

### GET /vehicles/:id

Obtains a vehicle given its id.

### GET /people

Gets all the people available in page 1 of the Starwars API.

### GET /people/:id

Obtains a information about a person given their id.

## Time breakdown

The tasks in this table are arranges in the order they were implemented. Times are approximate.

| Time taken (hrs)   | Task                                                          |
| ------------------ | ------------------------------------------------------------- |
| 1:00               | Project setup RFA-5: list planets                             |
| 0:05 - 0:07        | RFA-4: list species                                           |
| 0:05 - 0:07        | RFA-4: list vehicles                                          |
| 0:05 - 0:07        | RFA-4: list people                                            |
| 0:02               | RFA-1: Readme changes                                         |
