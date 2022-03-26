import {Component} from 'react'
import {v4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

class Passwords extends Component {
  state = {
    passwordList: [],
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    isPasswordVisible: false,
    searchInput: '',
  }

  onClickDelete = id => {
    const {passwordList} = this.state
    const newPasswordList = passwordList.filter(eachItem => eachItem.id !== id)
    this.setState({passwordList: newPasswordList})
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  handleChangeCheckBox = event => {
    this.setState({isPasswordVisible: event.target.checked})
    // console.log('hi')
  }

  onAddPassword = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state

    const newPassword = {
      id: v4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  render() {
    const {
      passwordList,
      websiteInput,
      usernameInput,
      passwordInput,
      isPasswordVisible,
      searchInput,
    } = this.state

    const filteredPasswordList = passwordList.filter(eachPassword =>
      eachPassword.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const passwordListEmpty = filteredPasswordList.length === 0
    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
              className="app-logo"
            />
            <p className="my-text">
              Built by Tenali Bhargav. To see my LinkedIn Profile {'  '}
              <a
                href="https://www.linkedin.com/in/bhargavtenali/"
                target="_blank"
                rel="noreferrer"
              >
                Click Here
              </a>
            </p>
          </div>
          <div className="add-password-container">
            <form className="form" onSubmit={this.onAddPassword}>
              <h1 className="add-password-heading">Add new Password</h1>
              <div className="input-container">
                <div className="search-icon">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="icon"
                  />
                </div>
                <input
                  type="text"
                  id="website"
                  value={websiteInput}
                  onChange={this.onChangeWebsiteInput}
                  className="input"
                  placeholder="Enter Website"
                />
              </div>
              <div className="input-container">
                <div className="search-icon">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="icon"
                  />
                </div>
                <input
                  type="text"
                  id="username"
                  value={usernameInput}
                  onChange={this.onChangeUsernameInput}
                  className="input"
                  placeholder="Enter Username"
                />
              </div>
              <div className="input-container">
                <div className="search-icon">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="icon"
                  />
                </div>
                <input
                  type="password"
                  id="password"
                  value={passwordInput}
                  onChange={this.onChangePasswordInput}
                  className="input"
                  placeholder="Enter Password"
                />
              </div>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
              alt="password manager"
              className="password-img"
            />
          </div>
          <div className="password-display-container">
            <div className="header-with-search-container">
              <div className="password-count-container">
                <h1 className="passwords-heading">Your Passwords</h1>
                <p className="passwords-length">{passwordList.length}</p>
              </div>
              <div className="search-input-container-bottom">
                <div className="search-icon">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="icon"
                  />
                </div>
                <input
                  type="search"
                  id="search"
                  value={searchInput}
                  onChange={this.onChangeSearchInput}
                  className="input"
                  placeholder="Search"
                />
              </div>
            </div>
            <hr className="hr" />
            <div className="password-checkbox-container">
              <input
                id="password-check"
                type="checkbox"
                defaultChecked={isPasswordVisible}
                onChange={this.handleChangeCheckBox}
                className="check-box"
              />
              <label htmlFor="password-check" className="show-password">
                Show Passwords
              </label>
            </div>
            {!passwordListEmpty && (
              <ul className="passwords-list">
                {filteredPasswordList.map(eachPassword => (
                  <PasswordItem
                    key={eachPassword.id}
                    passwordDetails={eachPassword}
                    isPasswordVisible={isPasswordVisible}
                    onClickDelete={this.onClickDelete}
                  />
                ))}
              </ul>
            )}
            {passwordListEmpty && (
              <div className="no-image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-password-image"
                />
                <p className="show-password">No Passwords</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Passwords
