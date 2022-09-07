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
    });
    // Let things initialize - not sure what to wait on, but without this some data is undefined (e.g. game.players)
    await wait(5000);

    console.log('Players: ', game.players)  

    const id = Object.keys(game.players)[0]
    const bot = game.players[id]
    const target_object = game.filterObjectsInMap(bot.map, o => o)[0];
    // game.move(1, false, 'EL571LzydnPy8YypF84UO5XY9sg1')
    console.log(`Moving object to player ${bot.name}`)  
    game.moveMapObject(bot.map, target_object.id, {x: bot.x, y: bot.y}, 5000)
    await wait(5500);

    console.log(`Teleporting ${bot.name} (${id}) in map ${bot.map}`);
    game.teleport(bot.map, 54, 31, id)
};
main();

const wait = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms))