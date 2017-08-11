


$(function(){
});


var api = {
    
    root:"api/Home/api/",
    imgpath:"api/Public/",
    
    format:function(str) {
        var re = '\\d(?=(\\d{3})+$)';
        return (str+"").replace(new RegExp(re, 'g'), '$&,');
    },
    
    share: {
        msg:"",
        title:"",
        url:"",
        send:function(){
            
        }
    },
    
    get:function get(apiname, data, success){
        $.ajax({
            'url':this.root + apiname + "",
            'data':data,
            'dataType':'json',
            'success':function(data){
                if(typeof data === "string" && data !== "success"){
                    alert(data);
                    console.log(data);
                    success(false);;
                }else{
					if(!data){
						alert("无法访问服务器");
						success(false);
					}else if(data.req + "" === "101"){
						success(data["data"]?data.data:true);
					}else if(data.req + "" === "102"){
						if(confirm("登录失败："+data.error)){
							location = "guest.php";
						}
						success(false);
					}else{
						alert(data.error);
						success(false);
					}
                }
            },
            'error':function(){
                console.log(apiname + " faild:" , arguments);
                alert("网络错误");
            }
        });
    },
    
    // news
    getgifts:function(func){
    	api.get("getgifts", { }, func);
    },
    getuser:function(func){
        api.get("getuserinfo", {}, func);
    },
    order:function(data, func){
        console.log("order data: ",data);
        api.get("ordergift", data, func);
    },
    getorders:function(func){
        api.get("getorders", {}, func)
    },
    
    giftdone:function(orderId, func){
        api.get("giftdone", {
            orderid:orderId
        }, func);
    },
	
	cancel:function(id, func){
        api.get("cancelOrder/id/"+id, {}, func);
	}
};
