var getuser =(id,callback) => {
    var user = {
        id:id,
        user:'David'
    };

    setTimeout(() => {callback(user)},2000);
    //callback(user);
};

getuser(31,(user) => {
    console.log(user);
});