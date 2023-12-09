// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {LanguageFilter, Repoitemshown} = props
  const {language, id} = LanguageFilter

  const ALLButton = () => {
    Repoitemshown(id)
  }

  return (
    <li className="para">
      <button type="button" className="para2" onClick={ALLButton}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
