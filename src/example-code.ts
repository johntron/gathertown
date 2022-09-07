game.subscribeToEvent("playerMoves", (data, context) => {
    console.log(
        `${context?.player?.name} (${context.playerId})`,
        "moved in direction",
        data.playerMoves.direction
    );
});


    // game.enterWhisper('EL571LzydnPy8YypF84UO5XY9sg1', Gather.MoveDirectionEnum_ENUM.Up);
    // const id = Object.keys(game.players)[0]
    // const bot = game.players[id]
    // console.log(game.players, id, bot);
    // const object = game.filterObjectsInMap(bot.map, o => o)[0];
    // game.move(1, false, 'EL571LzydnPy8YypF84UO5XY9sg1')
    // game.moveMapObject(bot.map, object.id, {x: 0, y:0}, 10000)
    // game.teleport(bot.map, 0, 0, id)