const mysql= require('./config')

const checkPhone=(phone,callBack)=>{
    mysql.query('select * from user where phone=?',[phone],callBack)
}
module.exports={
    checkPhone:checkPhone
}