return (
  <div className={`login-container ${isRedirecting ? "is-redirecting" : ""}`}>

    {/* Hero-style bottom-left glow */}
    <div className="login-glow"></div>

    {isRedirecting && (
      <div className="login-overlay">
        <div className="login-overlay-card">
          <div className="login-spinner"></div>
          <h3>Please wait</h3>
          <p>{statusMessage}</p>
        </div>
      </div>
    )}

    <div className="login-form">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div className="login-form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={submitting}
          />
        </div>

        <div className="login-form-group">
          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={submitting}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword((p) => !p)}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>
        </div>

        {error && <p className="login-error">{error}</p>}

        {statusMessage && !error && (
          <p className="login-status">{statusMessage}</p>
        )}

        <button type="submit" className="login-submit-btn" disabled={submitting}>
          {submitting ? "Please wait..." : "Login"}
        </button>
      </form>

      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  </div>
);