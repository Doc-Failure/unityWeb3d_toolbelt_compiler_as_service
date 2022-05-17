function generate(NAME){
    const fs = require('fs');

    fs.readFile('./Archetypes/NFTContract.sol', 'utf8', (err, data) => {
        if (err) {
        console.error(err);
        return;
        }
        var res = data.replace('$NAME', NAME);

        fs.writeFile('./contracts/'+NAME+'.sol', res, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    });
}

generate(process.argv[2], process.argv[3]);