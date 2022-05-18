function generate(NAME, FIELDS, URL, CHANCES, QUANTITY){
    const fs = require('fs');

    fs.readFile('./Archetypes/NFTContract.sol', 'utf8', (err, data) => {
        if (err) {
        console.error(err);
        return;
        }
        var res = data.replace('$NAME', NAME);
        res = res.replace('$URL', URL);
        res = res.replace('$CHANCES', CHANCES);
        res = res.replace('$QUANTITY', QUANTITY);

        var fieldToAdd="";        
        var mintFieldToAdd="";
        var fields=FIELDS.split(',');
        for(let i=0; i<fields.length; i++){
            fieldToAdd+="    uint256 public constant "+fields[i]+" = "+i+";\n"
            mintFieldToAdd+="        _mint(address(this), "+fields[i]+", 0, \"\");\n";
        }
        res = res.replace('$FIELDS', fieldToAdd);
        res = res.replace('$MINT_FIELDS', mintFieldToAdd);


        fs.writeFile('./contracts/NFTContract.sol', res, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    });
}

generate(process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6]);