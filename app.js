'use strict'

const fs = require('fs');

makeDynamic('20220701', '20220701');

function makeDynamic(fileName, newFileName) {
    const script = extractScript(fileName);
    const ENG = makeEng(script);
    const KOR = makeKor(script);
    writScript(newFileName + 'ENG', ENG);
    writScript(newFileName + 'KOR', KOR);
}




function writScript(path, content) {
    fs.writeFile('./dynamicScript/'+path+'.txt', content, err => {
        if (err) {
            console.error(err)
            return
        }
    })
}


function extractScript(path) 
{
    try {
        const data = fs.readFileSync('./script/'+path+'.txt', 'utf8', 'utf8')
        //console.log(data)
        return data;
    } catch (err) {
        console.error(err)
    }
}

function makeEng(script){
    let sentences = script.split('\r\n\r\n');

    let newScriptEng = "";
    for(let i = 0; i < sentences.length; i++){
        let str = sentences[i].split('\r\n');
        newScriptEng += str[0] 
                    + '\r\n' 
                    + '<p data-ke-size="size16"><a style="display: block; border-radius: 0.5em; background-color: #f4e1c3; text-decoration: none; color: #f4e1c3; width: 100%;" onclick="return false;" onMouseOver="this.style.color=\'#000000\'" onMouseOut="this.style.color=\'#f4e1c3\'">'
                    + str[1]
                    + '</a></p>'
                    + '<p data-ke-size="size16">&nbsp;</p>'
                    + '\r\n\r\n';
    }

    return newScriptEng;
}

function makeKor(script){
    let sentences = script.split('\r\n\r\n');

    let newScriptKor = "";
    for(let i = 0; i < sentences.length; i++){
        let str = sentences[i].split('\r\n');
        newScriptKor += str[1] 
                    + '\r\n' 
                    + '<p data-ke-size="size16"><a style="display: block; border-radius: 0.5em; background-color: #f4e1c3; text-decoration: none; color: #f4e1c3; width: 100%;" onclick="return false;" onMouseOver="this.style.color=\'#000000\'" onMouseOut="this.style.color=\'#f4e1c3\'">'
                    + str[0]
                    + '</a></p>'
                    + '<p data-ke-size="size16">&nbsp;</p>'
                    + '\r\n\r\n';
    }

    return newScriptKor;
}







