import './index.css'

const PasswordItem = props => {
  const {passwordDetails, isPasswordVisible, onClickDelete} = props
  const {id, website, username, password} = passwordDetails

  const onDelete = () => {
    onClickDelete(id)
  }
  const renderPasswordElement = () => {
    if (isPasswordVisible) {
      return <p className="item-text">{password}</p>
    }
    return (
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        alt="stars"
        className="star-icon"
      />
    )
  }
  return (
    <li className="password-item">
      <div className="password-container">
        <div className="text-container">
          <p className="item-text">{website}</p>
          <p className="item-text">{username}</p>
          {renderPasswordElement()}
        </div>
        <button
          type="button"
          testid="delete"
          className="delete-button"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            className="delete"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
