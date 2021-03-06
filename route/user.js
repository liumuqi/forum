var userCtrl = require("../controller/user"),
	data = require("../controller/data"),
	util = require("../controller/util");

module.exports = function wrap(app){

// user controller
app.post("/user/login", 
	util.validat_num,
	data.userByEmail,
	util.hasReqUser,
	userCtrl.login,
	util.end);

app.post("/user/logout",
	userCtrl.logout,
	util.end);

app.post("/user/reg",
	util.validat_num, 
	userCtrl.create,
	userCtrl.login,
	util.end);

app.post("/user/update",
	util.isLogin,
	util.validat_num,
	userCtrl.update,
	util.end);

app.post("/user/:id/seal",
	util.isLogin,
	util.isAdmin,
	data.userById,
	util.hasReqUser,
	util.userNoSelf,
	userCtrl.seal,
	util.end);

app.post("/user/:id/remove",
	util.isLogin,
	util.isAdmin,
	data.userById,
	util.hasReqUser,
	util.userNoSelf,
	userCtrl.remove,
	util.end);

app.post("/user/:id/follow",
	util.isLogin,
	util.isAdmin,
	data.userById,
	util.hasReqUser,
	util.userNoSelf,
	userCtrl.follow,
	util.end);

app.post("/user/:id/unfollow",
	util.isLogin,
	util.isAdmin,
	data.userById,
	util.hasReqUser,
	util.userNoSelf,
	userCtrl.unfollow,
	util.end);


app.post("/user/:id/becomeModerator",
	util.isLogin,
	util.isAdmin,
	data.userById,
	util.hasReqUser,
	util.userNoSelf,
	userCtrl.becomeModerator,
	util.end);

app.post("/user/:id/becomeUser",
	util.isLogin,
	util.isAdmin,
	data.userById,
	util.hasReqUser,
	util.userNoSelf,
	userCtrl.becomeUser,
	util.end);

app.post("/user/findPassword",
	data.userByEmail,
	util.hasReqUser,
	userCtrl.findPassword,
	util.end
)

app.post("/user/updatePassword",
	data.userByEmail,
	util.hasReqUser,
	userCtrl.updatePassword,
	util.end);

app.post("/user/:id/plus",
	util.isLogin,
	util.isAdmin,
	data.userById,
	util.hasReqUser,
	userCtrl.plus,
	util.end);

app.post("/user/logined",
	util.isLogin,
	function(req,res){
		res.send(req.session.user);
	})
	
app.post("/user/:id/get",
	data.userById,
	function(req,res){
		res.send(req.user);
	})
	
}