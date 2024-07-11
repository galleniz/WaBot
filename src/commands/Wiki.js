const Command = require("../Command");
const { MessageMedia } = require('whatsapp-web.js');
const wtf = require('wtf_wikipedia');

/**
 * Represents a command to search and retrieve information from Wikipedia.
 * @extends Command
 */
class Wiki extends Command {
    constructor() {
        super({
            name: "wiki",
            react: "🔍",
        });
    }

    /**
     * Executes the wiki command.
     * @param {string[]} args - The arguments passed to the command.
     * @param {string} author - The author of the message.
     * @param {Chat} chat - The chat where the command was executed.
     * @param {Object} msg - The message object.
     */
    async run(args, author, chat, msg) {
        try {
            const summary = await searchWikipedia(args.join(" ").toLowerCase());
            let desc = summary.text();
            if (desc.length > 4096) desc = desc.slice(0, 4093) + "...";

            const media = await MessageMedia.fromUrl(summary.images()[0].json().url);
            chat.sendMessage(desc);
            chat.sendMessage(media);
        } catch (err) {
            console.error(err);
            chat.sendMessage("Fallo al tratar de enviar el mensaje.");
        }
    }
}

/**
 * Searches Wikipedia for the given query.
 * @param {string} query - The search query.
 * @returns {Promise<Object>} - A promise that resolves to the fetched Wikipedia data.
 * @throws {Error} - If there is an error while searching Wikipedia.
 */
async function searchWikipedia(query) {
    try {
        return await wtf.fetch(query);
    } catch (err) {
        console.error(err);
        throw new Error("Fallo al buscar en Wikipedia, generalmente es porque el artículo no fue encontrado.");
    }
}

module.exports = new Wiki();
