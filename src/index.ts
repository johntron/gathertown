import * as Gather from "@gathertown/gather-game-client";
import { MoveDirectionEnum_ENUM } from "@gathertown/gather-game-client";
import * as Websocket from 'isomorphic-ws';

globalThis.Gather = Gather;
globalThis.WebSocket = Websocket;


const beta_game_id = 'tGYmLzUcDr8C5jmq\\twdu-germany-beta';
const release_game_id = '';
const game_id = beta_game_id;
// const { API_KEY } = process.env;
const API_KEY = 'gddxVbJOYCNnFZcy';

const connect = async () => {
    const game = await new Gather.Game(game_id, () => Promise.resolve({ apiKey: API_KEY }));
    await game.connect()
    return game;
}

const main = async () => {
    const game = await connect();
    globalThis.game = game;
    game.subscribeToConnection((connected) => {
        console.log("connected?", connected)
        console.log(game.players, 'a')
    });
    // Let things initialize - not sure what to wait on, but without this some data is undefined (e.g. game.players)
    await new Promise((resolve) => setTimeout(resolve, 5000))

    console.log(game.players)
};
main();