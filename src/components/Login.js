import React from 'react'

const Login = () => {
  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form>
             <div class="form-group">
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Your email address'
                required
              />
            </div>
            <div class="form-group">
              <input 
                type='password' 
                name='password' 
                id='password' 
                placeholder='Enter password'
                />
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login
