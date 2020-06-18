const Gitinfo = require('./data/githubRepos.json')
const GitRepos = require('./models/GitRepos')
const CheatSheetinfo = require('./data/CheatSheets.json')
const CheatSheet = require('./models/CheatSheets')
const Jobsinfo = require('./data/Jobs.json')
const Job = require('./models/Jobs')
const StudyGuide = require('./models/StudyGuide')
const studyInfo = require('./data/StudyGuide.json')


function Creation(Name, data){
    Name.deleteMany({}).then(
        Name.insertMany(data).then(info => {
         console.log (info)
     }).catch(err=> {console.log(err)})
    )
    return (console.log(`finished ${Name}`))
}


// Creation(GitRepos, Gitinfo )
// Creation(CheatSheet, CheatSheetinfo)
// Creation(Job, Jobsinfo)
Creation(StudyGuide, studyInfo)