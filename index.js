const jsonfile = require('jsonfile')
const moment = require('moment')
const simpleGit = require('simple-git')
const random = require('random')

const FILEPATH ='./data.json'

const makecommit = n=>{
    if(n===0){
        simpleGit().push();
        return;
    }
    
    const x = random.int(0,1);
    const y = random.int(0,6);
    const DATE = moment().subtract(2,'w').add(1,'d')
                    .add(x,'w').add(y,'d').format();
    console.log(DATE);
    const date = {
       date : DATE
    }
    

jsonfile.writeFile(FILEPATH,date,()=>{

    simpleGit().add([FILEPATH]).commit(DATE, {'--date': DATE}
            ,makecommit.bind(this,--n));

});
}

makecommit(100);


