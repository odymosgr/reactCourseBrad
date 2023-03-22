import React, { useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"
import { Tooltip as ReactTooltip } from "react-tooltip"

function HeaderLoggedIn(props) {
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  function handleLogOut() {
    appDispatch({ type: "logout" })
    appDispatch({ type: "flashMessage", value: "You have successfully logged out." })
  }

  function handleSearchIcon(e) {
    e.preventDefault()
    appDispatch({ type: "openSearch" })
  }

  return (
    <div className="flex-row my-3 my-md-0">
      <a data-tooltip-content="Search" data-tooltip-id="search" onClick={handleSearchIcon} href="#" className="text-white mr-2 header-search-icon">
        <i className="fas fa-search"></i>
      </a>
      <ReactTooltip place="bottom" id="search" className="custom-tooltip"></ReactTooltip>{" "}
      <span onClick={() => appDispatch({ type: "toggleChat" })} data-tooltip-content="Chat" data-tooltip-id="chat" className={"mr-2 header-chat-icon " + (appState.unreadChatCount ? "text-danger" : "text-white")}>
        <i className="fas fa-comment"></i>
        {appState.unreadChatCount ? <span className="chat-count-badge text-white">{appState.unreadChatCount < 10 ? appState.unreadChatCount : "9+"}</span> : ""}
      </span>
      <ReactTooltip place="bottom" id="chat" className="custom-tooltip"></ReactTooltip>{" "}
      <Link data-tooltip-content="My Profile" data-tooltip-id="profile" to={`/profile/${appState.user.username}`} className="mr-2">
        <img className="small-header-avatar" src={appState.user.avatar} />
      </Link>
      <ReactTooltip place="bottom" id="profile" className="custom-tooltip"></ReactTooltip>{" "}
      <Link className="btn btn-sm btn-success mr-2" to="/create-post">
        Create Post
      </Link>{" "}
      <button onClick={handleLogOut} className="btn btn-sm btn-secondary">
        Sign Out
      </button>
    </div>
  )
}

export default HeaderLoggedIn
