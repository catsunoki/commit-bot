import jsonfile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git' 

const FILE_PATH : string = './data.json';

const DATE : string = moment().format();

const data = {
    date: DATE
}

jsonfile.writeFile(FILE_PATH, data)

// this line actually is ``` git commit --date="" ```
simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE}).push()