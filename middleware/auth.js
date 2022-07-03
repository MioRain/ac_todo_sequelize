module.exports = {
  authenticator: (req, res, next) => {
    if (req.isAuthenticated()) {
      console.log(req.isAuthenticated())
      return next()
    }
    console.log(req.isAuthenticated())
    req.flash('warning_msg', '請先登入才能使用！')
    res.redirect('/users/login')
  }
}