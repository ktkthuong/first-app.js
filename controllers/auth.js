exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: req.isLoggedIn
    //định nghĩa isAuthenticated từ navigation.ejs
  });
};

exports.postLogin = (req, res, next) => {
  req.isLoggedIn = true; //lưu thông tin khi ta bấm login
  res.redirect('/');
};