var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test";

let [dbData, ctx, collection, db] = [[], null, 'site', null];

const insertMany = () => {
    const data = [
        {
            "word": "手机",
            "tip": "不离身"
        },
        {
            "word": "苹果",
            "tip": "水果"
        },
        {
            "word": "香蕉",
            "tip": "水果"
        },
        {
            "word": "蜡笔小新",
            "tip": "卡通人物"
        },
        {
            "word": "白鸽",
            "tip": "动物"
        },
        {
            "word": "布娃娃",
            "tip": "玩具"
        },
        {
            "word": "餐巾",
            "tip": "生活用品"
        },
        {
            "word": "CD",
            "tip": "娱乐用品"
        },
        {
            "word": "瓷器",
            "tip": "易碎"
        },
        {
            "word": "长江三峡",
            "tip": "伟大的工程"
        },
        {
            "word": "长颈漏斗",
            "tip": "化学器材"
        },
        {
            "word": "赤壁",
            "tip": "一个地方"
        },
        {
            "word": "除草剂",
            "tip": "喷剂"
        },
        {
            "word": "大头鱼",
            "tip": "yyf"
        },
        {
            "word": "刀",
            "tip": "很危险的东西"
        },
        {
            "word": "豆沙包",
            "tip": "甜的吃的"
        },
        {
            "word": "耳机",
            "tip": "电子用品"
        },
        {
            "word": "飞碟",
            "tip": "很难看到"
        },
        {
            "word": "荷花",
            "tip": "朱自清"
        },
        {
            "word": "虎",
            "tip": "女人"
        },
        {
            "word": "蝴蝶",
            "tip": "庞龙"
        },
        {
            "word": "护膝",
            "tip": "运动保护"
        },
        {
            "word": "花朵",
            "tip": "形容小朋友"
        },
        {
            "word": "环保",
            "tip": "可持续发展"
        },
        {
            "word": "欢乐谷",
            "tip": "小朋友的天堂"
        },
        {
            "word": "击剑",
            "tip": "运动"
        },
        {
            "word": "教师",
            "tip": "令人尊敬"
        },
        {
            "word": "KTV",
            "tip": "释放压力"
        },
        {
            "word": "老爷车",
            "tip": ""
        },
        {
            "word": "刘翔",
            "tip": ""
        },
        {
            "word": "落地灯",
            "tip": ""
        },
        {
            "word": "棉花",
            "tip": ""
        },
        {
            "word": "母亲",
            "tip": ""
        },
        {
            "word": "NBA",
            "tip": ""
        },
        {
            "word": "内裤",
            "tip": ""
        },
        {
            "word": "牛奶糖",
            "tip": ""
        },
        {
            "word": "牛肉干",
            "tip": ""
        },
        {
            "word": "牛肉面",
            "tip": ""
        },
        {
            "word": "排插",
            "tip": ""
        },
        {
            "word": "秦始皇兵马俑",
            "tip": ""
        },
        {
            "word": "全家桶",
            "tip": ""
        },
        {
            "word": "沙僧",
            "tip": ""
        },
        {
            "word": "圣经",
            "tip": ""
        },
        {
            "word": "升旗",
            "tip": ""
        },
        {
            "word": "实验室",
            "tip": ""
        },
        {
            "word": "狮子座",
            "tip": ""
        },
        {
            "word": "守门员",
            "tip": ""
        },
        {
            "word": "首饰",
            "tip": ""
        },
        {
            "word": "手套",
            "tip": ""
        },
        {
            "word": "水波",
            "tip": ""
        },
        {
            "word": "土豆",
            "tip": ""
        },
        {
            "word": "丸子",
            "tip": ""
        },
        {
            "word": "网址",
            "tip": ""
        },
        {
            "word": "鲜橙多",
            "tip": ""
        },
        {
            "word": "鲜花",
            "tip": ""
        },
        {
            "word": "小霸王",
            "tip": ""
        },
        {
            "word": "腰带",
            "tip": ""
        },
        {
            "word": "烟斗",
            "tip": ""
        },
        {
            "word": "扬州炒饭",
            "tip": ""
        },
        {
            "word": "衣橱",
            "tip": ""
        },
        {
            "word": "医生",
            "tip": ""
        },
        {
            "word": "音响",
            "tip": ""
        },
        {
            "word": "鹦鹉",
            "tip": ""
        },
        {
            "word": "油",
            "tip": ""
        },
        {
            "word": "语文书",
            "tip": ""
        },
        {
            "word": "针筒",
            "tip": ""
        },
        {
            "word": "纸杯",
            "tip": ""
        },
        {
            "word": "钻戒",
            "tip": ""
        }
    ]
    console.log(data)
    ctx.collection(collection).insertMany(data, function(err, res) {
        if (err) throw err;
        console.log("插入的文档数量为: " + res.insertedCount);
        db.close();
    });
}

const initData = () => {
    return new Promise((resolve, reject) => {
        ctx.collection(collection). find({}).toArray(function(err, result) { // 返回集合中所有数据
            resolve(result);
            dbData = result;
            if (err) reject(err);
            db.close();
        });
    })
    // ctx.collection(collection). find({}).toArray(function(err, result) { // 返回集合中所有数据
    //     dbData = result;
    //     if (err) throw err;
    //     db.close();
    // });
}

const randomWord = () => {
    return new Promise((resolve, reject) => {
        if (!dbData.length) {
            initData().then((data) => {
                resolve(dbData[Math.floor(Math.random()*dbData.length)]);
            })
        } else {
            resolve(dbData[Math.floor(Math.random()*dbData.length)]);
        }
    })
}


// node 获取数据
// var file = __dirname+'/db.json';
// dbData = JSON.parse(fs.readFileSync(file));
MongoClient.connect(url, (err, _db) => {
    if (err) throw err;
    db = _db;
    ctx = _db.db("test");
    // insertMany(dbo, 'site', myobj, db);
    initData().then((res) => {
        if (!res.length) {
            insertMany()
        } else {
            console.log(res.length)
        }
    })
});



// var db = (function () {

//     var file = __dirname+'/db.json';
//     var db = JSON.parse(fs.readFileSync(file));
//     // return {
//         save : function () {
//             fs.writeFile(file,JSON.stringify(db,null,4));
//         },
//         add : function (word,tip) {
//             if(db.findIndex(x=>{return x.word===word;})!=-1){
//                 console.error(new Error(word+' existed'));
//                 return false;
//             }
//             db.push({word:word,tip:tip});
//             return true;
//         },
//         randomWord :function () {
//             return db[Math.floor(Math.random()*db.length)];
//         },
//         _db:db
//     }
// })();

// module.exports = db;
module.exports = {randomWord};