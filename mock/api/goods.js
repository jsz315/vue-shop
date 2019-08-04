function getData(){
    let list = [];
    let total = Math.floor(Math.random() * 8) + 2;
    for(let i = 0; i < total; i++){
        let name = '';
        let t = Math.floor(Math.random() * 8) + 3;
        while(name.length < t){
            name = name + String.fromCharCode(32 + Math.floor(Math.random() * 64))
        }
        list.push({
            id: Math.random(),
            name: name,
            img: "/imgs/logo.png",
            score: Math.floor(Math.random() * 100) + 1
        })
    }
    return list;
}

module.exports = function(req, res){
    res.json(getData());
}