import {Component} from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {ActiveId: languageFiltersData[0].id, GitList: []}

  componentDidMount() {
    this.getGitRepository()
  }

  getGitRepository = async () => {
    const {ActiveId} = this.state
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${ActiveId}`,
    )

    if (response.ok === true) {
      const data = await response.json()
      const updatedList = data.popular_repos.map(each => ({
        avatarUrl: each.avatar_url,
        forksCount: each.forks_count,
        id: each.id,
        issuesCount: each.issues_count,
        name: each.name,
        startsCount: each.stars_count,
      }))

      this.setState({GitList: updatedList})
    }
  }

  Repoitemshown = id => {
    this.setState({ActiveId: id}, this.getGitRepository())
  }

  render() {
    const {ActiveId} = this.state
    console.log(ActiveId)

    return (
      <div className="main-container">
        <h1>Popular</h1>
        <ul>
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              LanguageFilter={each}
              Repoitemshown={this.Repoitemshown}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GithubPopularRepos
