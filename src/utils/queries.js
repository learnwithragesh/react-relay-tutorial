let repositoryInfo = `query {
    repository(owner:"facebook", name:"relay") {
        id 
        name
        issues(first: 20) {
            edges {
                node {
                title
                }
            }
        }
    }
}`;

let repositoryList = `query {
    viewer {
        name
            repositories(last: 10) {
            nodes {
                name
            }
        }
    }
}`

module.exports = { repositoryInfo, repositoryList };