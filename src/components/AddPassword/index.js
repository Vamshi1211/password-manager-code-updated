import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import PasswordItem from '../PasswordItems'
import './index.css'

const smallImgUrl =
  'https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png'
const largeImgUrl =
  'https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png'

const backgroundColorList = [
  'bg-3',
  'bg-4',
  'bg-5',
  'bg-6',
  'bg-7',
  'bg-9',
  'bg-10',
]

class AddPassword extends Component {
  state = {
    websiteInput: '',
    userNameInput: '',
    passwordInput: '',
    passwordList: [],
    isShowPassword: false,
    searchInput: '',
  }

  deleteItem = id => {
    const {passwordList} = this.state

    // const index = passwordList.findIndex(eachItem => eachItem.id === id)

    // passwordList.splice(index, 1)

    // this.setState({passwordList})

    this.setState({
      passwordList: passwordList.filter(eachItem => eachItem.id !== id),
    })
  }

  websiteInputChange = event => {
    this.setState({websiteInput: event.target.value})
  }

  usernameInputChange = event => {
    this.setState({userNameInput: event.target.value})
  }

  passwordInputChange = event => {
    this.setState({passwordInput: event.target.value})
  }

  addButtonClicked = event => {
    event.preventDefault()

    const initialBgColorClassName =
      backgroundColorList[
        Math.ceil(Math.random() * backgroundColorList.length - 1)
      ]

    console.log(initialBgColorClassName)

    const {websiteInput, userNameInput, passwordInput} = this.state
    const newPassword = {
      id: uuidV4(),
      newWebsiteInput: websiteInput,
      newUserNameInput: userNameInput,
      newPasswordInput: passwordInput,
      initialBgColor: initialBgColorClassName,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      websiteInput: '',
      userNameInput: '',
      passwordInput: '',
    }))
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  showPasswordClicked = () => {
    this.setState(prevState => ({
      isShowPassword: !prevState.isShowPassword,
    }))
  }

  //   getUnorderedList = getSearchResults => {
  //     // const {listOfPasswords} = this.props
  //     const {isShowPassword} = this.state

  //     // const getSearchResults = listOfPasswords.filter(eachItem =>
  //     //   eachItem.newUserNameInput.toLowerCase().includes(searchInput),
  //     // )

  //     return (
  //       <ul className="list-container">
  //         {getSearchResults.map(eachItem => {
  //           const {
  //             id,
  //             newWebsiteInput,
  //             newUserNameInput,
  //             newPasswordInput,
  //             initialBgColor,
  //           } = eachItem
  //           const firstChar = newUserNameInput.slice(0, 1)

  //           const showPasswordImage = isShowPassword ? (
  //             <p className="password-input">{newPasswordInput}</p>
  //           ) : (
  //             <img
  //               alt="stars"
  //               src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
  //               className="masked-image"
  //             />
  //           )
  //           return (
  //             <li key={eachItem.id} className="list-item">
  //               <div className="logo-password-container">
  //                 <p className={`${initialBgColor} name-logo`}>{firstChar}</p>
  //                 <div className="name-password-container">
  //                   <p className="website-name">{newWebsiteInput}</p>
  //                   <p className="user-name">{newUserNameInput}</p>
  //                   {showPasswordImage}
  //                 </div>
  //               </div>
  //               <DeleteButton uniqueId={id} deleteListItem={this.deleteItem} />
  //             </li>
  //           )
  //         })}
  //       </ul>
  //     )
  //   }

  //   getNoPasswordImage = () => {
  //     const noPasswordsImgUrl =
  //       'https://assets.ccbp.in/frontend/react-js/no-passwords-img.png'
  //     const altText = 'no passwords'

  //     return (
  //       <div className="image-container">
  //         <img
  //           alt={altText}
  //           src={noPasswordsImgUrl}
  //           className="no-password-image"
  //         />
  //         <p className="no-password-text">No Passwords</p>
  //       </div>
  //     )
  //   }

  //   unorderedListItems = getSearchResults => {
  //     // const {listOfPasswords} = this.props

  //     const lengthOfList = getSearchResults.length

  //     return lengthOfList === 0
  //       ? this.getNoPasswordImage()
  //       : this.getUnorderedList(getSearchResults)
  //   }

  addPassword = () => {
    const {websiteInput, userNameInput, passwordInput} = this.state
    return (
      <div className="app-container">
        <div className="add-user-details-main-container">
          <form
            className="add-user-details-container"
            onSubmit={this.addButtonClicked}
          >
            <h1 className="password-heading">Add New Password</h1>
            <div className="input-container">
              <img
                className="input-image"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input
                value={websiteInput}
                className="input-text"
                placeholder="Enter Website"
                onChange={this.websiteInputChange}
              />
            </div>

            <div className="input-container">
              <img
                className="input-image"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input
                value={userNameInput}
                className="input-text"
                placeholder="Enter Username"
                onChange={this.usernameInputChange}
              />
            </div>

            <div className="input-container">
              <img
                className="input-image"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input
                value={passwordInput}
                className="input-text"
                type="password"
                autoComplete={passwordInput}
                placeholder="Enter Password"
                onChange={this.passwordInputChange}
              />
            </div>
            <button type="submit" className="add-button">
              Add
            </button>
          </form>

          <img
            className="small-image"
            src={smallImgUrl}
            alt="password manager"
          />
          <img
            className="large-image"
            src={largeImgUrl}
            alt="password manager"
          />
        </div>
      </div>
    )
  }

  render() {
    const {passwordList, searchInput, isShowPassword} = this.state

    // console.log(isShowPassword)

    const getSearchResults = passwordList.filter(eachItem =>
      eachItem.newWebsiteInput
        .toLowerCase()
        .includes(searchInput.toLocaleLowerCase()),
    )

    const lengthOfList = getSearchResults.length

    return (
      <div className="bg-container">
        <div className="app-logo-container">
          <img
            className="app-image"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
        </div>
        {this.addPassword()}

        {/* <PasswordItems listOfPasswords={passwordList} /> */}

        <div className="app-list-container">
          <div className="list-app-container">
            <div className="list-top-section-container">
              <div className="list-heading-container">
                <h1 className="list-heading">Your Passwords</h1>
                <p className="count">{lengthOfList}</p>
              </div>

              <div className="search-input-container">
                <img
                  alt="search"
                  className="search-image"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                />
                <input
                  type="search"
                  className="search-input"
                  placeholder="Search"
                  onChange={this.onChangeSearchInput}
                />
              </div>
            </div>

            <hr className="break-line" />
            <div className="search-checkbox-container">
              <input
                type="checkbox"
                className="checkbox-element"
                id="checkboxId"
                onChange={this.showPasswordClicked}
              />
              <label htmlFor="checkboxId" className="label-element">
                Show Passwords
              </label>
            </div>

            {lengthOfList === 0 ? (
              <div className="image-container">
                <img
                  alt="no passwords"
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  className="no-password-image"
                />
                <p className="no-password-text">No Passwords</p>
              </div>
            ) : (
              <ul className="list-container">
                {getSearchResults.map(eachItem => (
                  <PasswordItem
                    key={eachItem.id}
                    uniqueId={eachItem.id}
                    eachPasswordItem={eachItem}
                    deleteListItem={this.deleteItem}
                    passwordValue={isShowPassword}
                  />
                ))}
              </ul>
            )}

            {/* {this.unorderedListItems(getSearchResults)} */}
          </div>
        </div>
      </div>
    )
  }
}

export default AddPassword
