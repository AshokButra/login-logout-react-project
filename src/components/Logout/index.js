import './index.css'

const Logout = props => {
  const {logoutFun} = props

  const onLogout = () => {
    logoutFun()
  }

  return (
    <button className="button" onClick={onLogout}>
      Logout
    </button>
  )
}

export default Logout
