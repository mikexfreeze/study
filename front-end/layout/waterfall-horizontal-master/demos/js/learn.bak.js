/**
 * Created by Micheal Xiao on 2017/2/16.
 */
function getNaturalWidth(src) {
    var image = new Image();
    image.src = img.src;
    var naturalWidth = {
        width:image.width,
        height:image.height
    };
    return naturalWidth
}

var config = {
    conWidth:1500,
    height:236,
};

var conWidth = config.conWidth;
var heigth = config.height;

var lineNum = 0;

function calculate(items, config, beforItems) {


    var contLineWidth = 0,rate = 0,contLeftSet = 0,
        newItems = [],restItems = [];

    //剪切每行数据
    items.some(function (val,index,items) {
        contLineWidth += Number(val.width);
        if(contLineWidth > conWidth){
            restItems = items.splice(index + 1, items.length - 1);
            newItems = items;
            rate = conWidth/contLineWidth;
            lineNum ++;
            return true
        }
    });

    console.log("第" + lineNum + "行", "图片总宽度" + contLineWidth, "容器宽度：" + conWidth);


    //处理每行图片样式
    newItems.forEach(function (val, index, items) {

        var curWidth = Math.floor(val.width * rate);
        newItems[index].left = contLeftSet;
        newItems[index].width = curWidth;
        newItems[index].top = (lineNum - 1)*heigth;
        contLeftSet += curWidth;

    });

    if(beforItems){
        newItems = beforItems.concat(newItems);
        console.log("第" + lineNum + "行","图片总数据" + newItems);
    }


    if(restItems.length > 3){
        newItems = calculate(restItems, config, newItems)
    }

    return newItems
}
























