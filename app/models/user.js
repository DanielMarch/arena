var userCollection = global.nss.db.collection('users');

class User{
  static create(obj, fn){
    userCollection.findOne({email:obj.email}, (e,u)=>{
      if(u){
        fn(null);
      }else{
        var user = new User();
        user.email = obj.email;
        user.password = '';
        user.isValid = false;

        userCollection.save(user, ()=>fn(user));
      }
    });
  }
}

module.exports = User;
