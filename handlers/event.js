const { readdirSync } = require('fs');

module.exports = (harmoni) => {
    readdirSync('./events/').forEach(dir => {
        const events = readdirSync(`./events/${dir}`).filter(file => file.endsWith('.js'));
        for(let file of events) {
            let pull = require(`../events/${dir}/${file}`);
            if(pull.name) {
                harmoni.events.set(pull.name, pull);
            } else {
                continue;
            }
        }
    });
}
