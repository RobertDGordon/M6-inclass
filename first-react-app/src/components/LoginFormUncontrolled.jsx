import { useState } from "react";

function LoginFormUncontrolled() {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [submitResult, setSubmitResult] = useState('')
  const [passwordCount, setPasswordCount] = useState(0)
  const [showForm, setShowForm] = useState(true)

  const maxPasswordCount = 5

  const handleSubmit = (e) => {
    e.preventDefault()
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    // console.log('handleSubmit:', userPassword, regex.test(userPassword))

    if (passwordCount === maxPasswordCount) {
      setShowForm(false)
    }

    if (userPassword.length < 5) {
      setPasswordCount(passwordCount + 1)
      setSubmitResult('Password must be at least 5 characters long')
    } else if (userPassword === userEmail) {
      setPasswordCount(passwordCount + 1)
      setSubmitResult('Password must not match email address')
    } else if (regex.test(userPassword) === false) { //must include character not a letter
      setPasswordCount(passwordCount + 1)
      setSubmitResult('Passwords require a special character, lowercase/uppercase, digit, be between 8-15 chars')
    } else {
      setSubmitResult('Successful login.')
    }

    console.log('handleSubmit:', 'passwordCount:', passwordCount)
  }

  return (
    <div className="LoginFormUncontrolled componentBox">
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div className="formRow">
            <label>Email Address:
              {/* This is a controlled element because onChange */}
              <input type="email" value={userEmail} name="userEmail"
                onChange={(e) => setUserEmail(e.target.value)} />
            </label>
          </div>

          <div className="formRow">
            <label>Password:
              <input type="password" value={userPassword} name="password"
                onChange={(e)=> setUserPassword(e.target.value)} />
            </label>
          </div>
          <button>Log In</button>
          <p>{submitResult}</p>
        </form>
      )}
    </div>
  )
}

export default LoginFormUncontrolled;