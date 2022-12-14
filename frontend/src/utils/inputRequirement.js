const inputRequirement = () => {
    const usernameRequire = { required: true, maxLength: 20 };
    const emailRequire = {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
    };
    const passwordLoginRequire = { required: true };
    const passwordRegisterRequire = {
      required: true,
      minLength: {
        value: 6,
      },
      pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
    };
    return {
      emailRequire,
      passwordLoginRequire,
      passwordRegisterRequire,
      usernameRequire,
    };
  };
  
  export default inputRequirement;
  