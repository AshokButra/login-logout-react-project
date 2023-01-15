import './index.css'

const Login = props => {
  const {loginFun} = props

  const onChangeLogin = () => {
    loginFun()
  }

  return (
    <button className="button" onClick={onChangeLogin}>
      Login
    </button>
  )
}

export default Login
