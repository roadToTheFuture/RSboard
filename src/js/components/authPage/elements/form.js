const forms = `

<div class="signin-signup">
<form action="" class="sign-in-form">
  <h2 class="title">Sign in</h2>
  <div class="input-field">
    <i class="fas fa-user"></i>
    <div class="mui-textfield mui-textfield--float-label">
      <input type="email" id="signInEmail">
      <label>Email</label> 
    </div>
  </div>
  <div class="input-field">
    <i class="fas fa-lock"></i>
    <div class="mui-textfield mui-textfield--float-label">
      <input type="password" id="signInPassword">
      <label>Password</label> 
    </div>
  </div>
  <button class="mui-btn mui-btn--raised mui-btn--primary sign-in-btn" id="signInBtn" type="submit">SIGN IN</button>
  <p class="recovery" id="resetPass">password recovery</p>
</form>
<form action="" class="sign-up-form">
  <h2 class="title">Sign up</h2>
  <div class="input-field">
    <i class="fas fa-user"></i>
    <div class="mui-textfield mui-textfield--float-label">
      <input type="text" id="userName">
      <label>Username</label> 
    </div>
  </div>
  <div class="input-field">
    <i class="fas fa-envelope"></i>
    <div class="mui-textfield mui-textfield--float-label">
      <input type="email" id="signUpEmail">
      <label>Email</label> 
    </div>
  </div>
  <div class="input-field">
    <i class="fas fa-lock"></i>
    <div class="mui-textfield mui-textfield--float-label">
      <input type="password" id="signUpPassword">
      <label>Password</label> 
    </div>
  </div>
  <button class="mui-btn mui-btn--raised mui-btn--primary btn solid" id="signUpBtn" type="submit">SIGN UP</button>
  <p class="social-text">Or Sign up with social platforms</p>
  <div class="social-media">
    <a href="#" class="social-icon">
      <i class="fab fa-facebook-f"></i>
    </a>
    <a href="#" class="social-icon">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="#" class="social-icon">
      <i class="fab fa-google"></i>
    </a>
    <a href="#" class="social-icon">
      <i class="fab fa-linkedin-in"></i>
    </a>
  </div>
</form>
</div>
`;

export { forms };
