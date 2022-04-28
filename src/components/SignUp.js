import React from 'react'

const SignUp = () => {
  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          
          <form>
             <div class="form-group">
              <input
                type='text'
                name='username'
                id='username'
                placeholder='Username'
                required
              />
            </div>
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
                placeholder='Choose your password'
              />
             </div>
             <div class="form-group">
              <input
                type='password'
                name='password2'
                id='password2'
                placeholder='Confirm your password'
              />
             </div>
             <button type="submit" class="btn btn-primary">Register</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default SignUp
