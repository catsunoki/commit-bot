import jsonfile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git'

const FILE_PATH: string = './data.json';
const makeCommit = (x: number) => {
    const DATE: string = moment().subtract(x, 'd').format();

    const data = {
        date: DATE
    }

    jsonfile.writeFile(FILE_PATH, data, () => {
        simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE }).push()
            .then(() => console.log("pushed"))
            .catch(err => { console.log(err) });
    })
}
for (let i: number = 1; i <= 365; ++i) {
    makeCommit(i);
}