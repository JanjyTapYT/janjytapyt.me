import { newsHook } from "../../../config";

export default async (req, res) => {
    if(req.method !== 'POST') return res.json({
        success: false,
        message: 'Invalid method.'
    });
    let { username, email } = req.body;
    let _ =  await fetch(process.env.newshook, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: 'janjytapyt.live | Newsletter Application',
          attachments: [],
          embeds: [
            {
              title: 'Newsletter - '+username,
              type: "rich",
              color: 5193214,
              fields: [
                {
                  name: 'Email',
                  value: email || 'N/A'
                },
                {
                  name: 'Ping',
                  value: '<@&963149848834637857>'
                }
              ]
            }
          ]
        })
    });

    try {
        res.send(_)
    } catch {
        res.status(500);
    }
}
