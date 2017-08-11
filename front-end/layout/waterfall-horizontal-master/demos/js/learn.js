/**
 * Created by Micheal Xiao on 2017/3/2.
 */
/**
 * Created by Micheal Xiao on 2017/2/16.
 */
function getNaturalWidth(src) {
    var image = new Image();
    image.src = src;
    var naturalWidth = {
        width:image.width,
        height:image.height
    };
    return naturalWidth
}

var config = {
    conWidth:1500,
    height:240,
};

//lines数据结构
// lines = [
//
//     {array:[], rate:num, lineNum:lineNum},
//     {array:[], rate:num, lineNum:lineNum},
//
// ];

function calculate(items, config, beforItems) {

    //函数内全局变量
    var contLeftSet = 0,newItems = [];
    var conWidth = config.conWidth;
    var heigth = config.height;

    var lineNum = 0,lines = [];
    //cutItems需要lineNum lines 两个外部变量
    cutItems(items);
    console.log("剪切处理后数据");
    console.log(lines);
    // console.log("第" + lineNum + "行", "图片总宽度" + contLineWidth, "容器宽度：" + conWidth);

    //处理每行图片样式
    lines.forEach(function (val, index, lines) {
        if(val.fix){
            var contLeftSet = 0;
            val.array.forEach(function (v, n, items) {
                var curWidth = Math.floor(v.width * val.rate);
                v.left = contLeftSet;
                v.width = curWidth;
                v.top = (val.lineNum - 1) * heigth;
                contLeftSet += curWidth;
                newItems.push(v)
            })
        }else{
            //处理不满行的情况
            var contLeftSet = 0;
            val.array.forEach(function (v, n, items) {
                v.left = contLeftSet;
                v.top = (val.lineNum - 1) * heigth;
                contLeftSet += v.width;
                newItems.push(v)
            })

        }

    });

    console.log("每行处理之后数据");
    console.log(newItems);

    function cutItems(items) {

        var oneLineData = {},restItems = [];
        var contLineWidth = 0,rate = 0;

        //剪切每行数据
        var fixBool = items.some(function (val,index,items) {
            contLineWidth += Number(val.width);
            if(contLineWidth > conWidth){
                restItems = items.splice(index + 1, items.length - 1);
                lineNum ++;

                oneLineData = {
                    array : items,
                    rate : conWidth/contLineWidth,
                    lineNum : lineNum,
                    fix : true
                };

                lines.push(oneLineData);
                cutItems(restItems);

                return true
            }
        });
        if(!fixBool){
            lineNum ++;
            oneLineData = {
                array : items,
                lineNum : lineNum,
                fix : false
            };
            lines.push(oneLineData);
        }

    }


    return newItems
}























