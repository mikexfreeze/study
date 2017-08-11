
var app = angular.module('root', [  'ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'tpl/menu.html'
    }).
    when('/vip', {
      templateUrl: 'tpl/vip.html'
    }).
    when('/my', {
      templateUrl: 'tpl/my.html'
    }).
    when('/gifts', {
      templateUrl: 'tpl/gifts.html'
    }).
    when('/orderlist', {
      templateUrl: 'tpl/orderlist.html'
    }).
    when('/orderdetail', {
      templateUrl: 'tpl/orderdetail.html'
    }).
    when('/order/:giftId/:giftName', {
      templateUrl: 'tpl/order.html'
    }).
    when('/404', {
      templateUrl: 'tpl/404.html'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);

app.factory('$api', ['$http', function ($http) {
    var $api = {
        'user': null,
        orderdetail:"",
        order:null,
        updateUser:function(){
            api.getuser(function(data){
                if(data){
                    $api.user = data;
                }
            });
        },
        getuser:function(func, force){
            if(this.user && !force){
                func($api.user);
            }else{
                api.getuser(function(data){
                    if(!data){
                        alert("请先授权登陆。");
                    }
                    $api.user = data;
                    func($api.user);
                });
            }
        }
    };
    return $api;
}]);

app.controller('my', ['$scope', '$http', '$api',
function ($scope, $http, $api) {
    $api.getuser(function(user){
        $scope.user = user;
        if(!$scope.$$phase) {
            $scope.$digest();
        }
    });
    $scope.tab = 0;
    $scope.showTab = function(idx){
        $scope.tab = idx;
    };
}]);

app.controller('order', ['$scope', '$api', '$routeParams',
function ($scope, $api, $routeParams) {
    $scope.giftid = $routeParams.giftId;
    $scope.giftName = $routeParams.giftName;
    $scope.giftImage = null;
    api.getgifts(function(data){
        for(var i=0;i<data.length;i++){
            if(data[i].id+"" === $scope.giftid){
                $scope.gift = data[i];
                $scope.grades = {
                    "1":"体验会员："+api.format(data[i].point0) + "分",
                    "2":"悦活&极致会员："+api.format(data[i].point1) + "分",
                    "3":"尊荣会员："+api.format(data[i].point2) + "分"
                };
                $scope.giftName = data[i].name;
                $scope.giftImage = api.imgpath + data[i].image;
                if(!$scope.$$phase) {
                    $scope.$digest();
                }
                $scope.grade = "1";
                if(!$scope.$$phase) {
                    $scope.$digest();
                }
                $("#giftimg").fadeIn();
                break;
            }
        }
    });
    $api.getuser(function(user){
        $scope.user = user;
        if(!$scope.$$phase) {
            $scope.$digest();
        }
    });
    $scope.orderCountOption = [];
    for(var i=1;i<16;i++)$scope.orderCountOption.push(i);
    $scope.tmall = 0;
    $scope.count = 1;
    $scope.tab = 0;
    $scope.type = 0;
    $scope.storelist = [];
    for(var key in store_info)
        $(store_info[key]).each(function(i, store){
            $scope.storelist.push(key+store);
        });
    $scope.showTab = function(idx){
        $scope.tab = idx;
    };
    $scope.clear = function(){
        $("giftid,tmall,count,grade,code,type,store,address".split(",")).each(
                function(i, field){$scope[field] = "";}
        );
    };
    $scope.submit = function(){
        var data = { };
        $("giftid,tmall,count,grade,code,type,store,address".split(",")).each(
            function(i, field){data[field] = $scope[field];}
        );
        console.log(data);
        if(!data.giftid){
            alert("礼物信息有误，请重新选择。");
            location = "gifts.php";
        }else if(isNaN(parseInt(data.count))){
            alert("请选择兑礼数量。");
        }else if(isNaN(parseInt(data.grade))){
            alert("请选择积分等级。");
        }else if(data.type != "0" && data.type != "1"){
            alert("请选择兑礼方式");
        }else if(data.type == "0" && !data.store){
            alert("请选择柜台。");
        }else if(data.type == "1" && !data.address){
            alert("请填写邮寄地址。");
        }else{
            api.order(data, function(res){
                if(res){
                    alert("预约成功。");
                    location = "#/orderlist";
                }else{
                    alert("预约失败。");
                }
            });
        }
    };
    $scope.back = function(){
        history.back();
    };
}]);

app.controller('orderlist', ['$scope', '$api',
function ($scope, $api) {
    $scope.states = ["预约受理中", "预约成功", "兑礼失败", "已领取"];
    /*
    $api.getuser(function(user){
        $scope.user = user;
        if(!$scope.$$phase) {
            $scope.$digest();
        }
    });*/
    $scope.orders = null;
    api.getorders(function(datas){
        $scope.orders = datas;
        if(!$scope.$$phase) {
            $scope.$digest();
        }
    });
    $scope.detail = function(order){
        if(order.done === 2){
            alert("非常抱歉，此预约无法完成。");
            return;
        }
        $api.order = order;
        $api.orderdetail = order.name+" X "+order.count;
        location = "#/orderdetail"
    }
}]);

app.controller('orderdetail', ['$scope', '$api',
function ($scope, $api) {
    
    $api.getuser(function(user){
        $scope.user = user;
        if(!$scope.$$phase) {
            $scope.$digest();
        }
    });
    if($api.order === null){
        location = "#/orderlist";
    }
    $scope.api = $api;
    $scope.baGet = function(){
        var order = $api.order;
        if(!order || order.done != 1){
            alert("预约信息有误，请重新查询。");
            location = "#/orderlist";
        }else{
            if(confirm("是否确认领取。")){
                api.giftdone(order.id, function(res){
                    if(res){
                        alert("领取成功。");
                        $scope.api.order.done = 3;
                        if(!$scope.$$phase) {
                            $scope.$digest();
                        }
                    }else{
                        alert("领取失败。");
                    }
                });
            }
        }
    };
	$scope.cancel = function(){
        var order = $api.order;
		console.log(order);
        if(!order || order.done != 0){
            alert("预约信息有误，请重新查询。");
            location = "#/orderlist";
        }else{
            if(!confirm("是否取消预约。")) return;
			api.cancel(order.id, function(res){
				if(res){
					alert("取消成功。");
					location = "#/orderlist";
				}else{
					alert("取消失败。");
				}
			});
        }
	}
}]);


function showPopup(id, flag, dur){
    $("#popup-"+id)[flag?"fadeIn":"fadeOut"](dur);
}