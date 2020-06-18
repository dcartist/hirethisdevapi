const Gitinfo = require('./data/githubRepos.json')

const GitRepos = require('./models/GitRepos')

GitRepos.deleteMany({}).then(
    GitRepos.insertMany(Gitinfo).then(info => {
     console.log (info)
     process.exit()
 }).catch(err=> {console.log(err)})
)
