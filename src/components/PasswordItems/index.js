// import {Component} from 'react'
import './index.css'

// const DeleteButton = props => {
//   const {uniqueId, deleteListItem} = props

//   const onDeleteListItem = () => {
//     deleteListItem(uniqueId)
//   }

//   return (
//     <button type="button" className="delete-button" onClick={onDeleteListItem}>
//       <img
//         alt="delete"
//         src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
//         className="delete-image"
//       />
//     </button>
//   )
// }

// class PasswordItems extends Component {
//   state = {
//     isShowPassword: false,
//     searchInput: '',
//     getResultsSearch: [],
//   }

//   //   addListItem = () => {
//   //     const {listOfPasswords} = this.props
//   //     this.setState({newList: listOfPasswords})
//   //   }

//   componentDidMount() {
//     const {listOfPasswords} = this.props
//     this.setState({newList: listOfPasswords})
//   }

//   //   deleteItem = (id, getSearchResults) => {
//   //     const {listOfPasswords} = this.props

//   //     const index = listOfPasswords.findIndex(eachItem => eachItem.id === id)

//   //     listOfPasswords.splice(index, 1)
//   //   }

//   onChangeSearchInput = event => {
//     this.setState({searchInput: event.target.value})
//   }

//   showPasswordClicked = () => {
//     this.setState(prevState => ({
//       isShowPassword: !prevState.isShowPassword,
//     }))
//   }

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
//               {this.toDeleteItems(getSearchResults)}
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

//   render() {
//     const {listOfPasswords} = this.props
//     const {searchInput, newList} = this.state
//     // this.addListItem()
//     console.log(newList)

//     const getSearchResults = listOfPasswords.filter(eachItem =>
//       eachItem.newUserNameInput.toLowerCase().includes(searchInput),
//     )

//     const lengthOfList = getSearchResults.length

//     return (
//       <div className="app-list-container">
//         <div className="list-app-container">
//           <div className="list-top-section-container">
//             <div className="list-heading-container">
//               <h1 className="list-heading">Your Passwords</h1>
//               <p className="count">{lengthOfList}</p>
//             </div>

//             <div className="search-input-container">
//               <img
//                 alt="search"
//                 className="search-image"
//                 src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
//               />
//               <input
//                 type="search"
//                 className="search-input"
//                 placeholder="Search"
//                 onChange={this.onChangeSearchInput}
//               />
//             </div>
//           </div>

//           <hr className="break-line" />
//           <div className="search-checkbox-container">
//             <input
//               type="checkbox"
//               className="checkbox-element"
//               id="checkboxId"
//               onClick={this.showPasswordClicked}
//             />
//             <label htmlFor="checkboxId" className="label-element">
//               Show Passwords
//             </label>
//           </div>

//           {this.unorderedListItems(getSearchResults)}
//         </div>
//       </div>
//     )
//   }
// }

// export default PasswordItems

const PasswordItems = props => {
  const {eachPasswordItem, deleteListItem, passwordValue} = props
  const {
    id,
    newWebsiteInput,
    newUserNameInput,
    newPasswordInput,
    initialBgColor,
  } = eachPasswordItem

  const onDeleteListItem = () => {
    deleteListItem(id)
  }

  const firstChar = newWebsiteInput.slice(0, 1)

  const showPasswordImage = passwordValue ? (
    <p className="password-input">{newPasswordInput}</p>
  ) : (
    <img
      alt="stars"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      className="masked-image"
    />
  )
  return (
    <li className="list-item" key={newWebsiteInput}>
      <div className="logo-password-container">
        <p className={`${initialBgColor} name-logo`}>{firstChar}</p>
        <div className="name-password-container">
          <p className="website-name">{newWebsiteInput}</p>
          <p className="user-name">{newUserNameInput}</p>
          {showPasswordImage}
        </div>
      </div>
      <button
        type="button"
        className="delete-button"
        onClick={onDeleteListItem}
        data-testid="delete"
      >
        <img
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default PasswordItems
