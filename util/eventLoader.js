const reqEven = (event) => require(`../events/${event}`)
module.exports = client => {
    client.on('message', reqEvent('message'));
}