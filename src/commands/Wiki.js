
const Command = require("../Command")
const { MessageMedia } = require('whatsapp-web.js');
const cache = new Map();
class Wiki extends Command
{
    constructor()
    {
        super({
            name: "wiki",
            react: "🔍",

        })
    }
    run(args, author, chat, msg){
        
        const wtf = require('wtf_wikipedia');

        async function searchWikipedia(query) {
            try {
            return await wtf.fetch(query);
            } catch (err) {
                chat.sendMessage("Has ocurred an error.")
                console.error(err);
            }
        }

        searchWikipedia(args.join(" ").toLowerCase())
        .then(async (summary) =>{ 
            let desc = summary.text();
            if (desc.length > 4096) desc = desc.slice(0,4093) + "...";

            const media = await MessageMedia.fromUrl(summary.images()[0].json().url);
            chat.sendMessage(desc);

            chat.sendMessage(media);
        }) 
        .catch(err => {
            console.error(err)
            chat.sendMessage("Has ocurred an error.")
        });

       

      
    }
}
module.exports = new Wiki();
