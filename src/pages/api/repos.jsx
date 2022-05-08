let key1 = 'ghp_VzcC7gx0GXzOVP1';
let key2 = '7kIiTmNtBqj2sOC0S0zxD';

export default async (req, res) => {
    let _ = await (await fetch('https://api.github.com/users/JanjyTapYT/repos', {
        headers: {
            Authorization: 'token '+key1+key2
        }
    })).json();

    let __ = await (await fetch('https://api.github.com/users/Stoneclane-Studios/repos', {
        headers: {
            Authorization: 'token '+key1+key2
        }
    })).json();
    
    let ___ = await (await fetch('https://api.github.com/users/GiveAways-ml/repos', {
        headers: {
            Authorization: 'token '+key1+key2
        }
    })).json();
    
    try {
        res.send([..._, ...__, ...___])
    } catch {
        res.status(500);
    }
}
