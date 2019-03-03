// // 初始化模板选择的下拉框
// var sel = document.getElementById('stylelist');
// for (var key in mapstyles) {
// var style = mapstyles[key];
// var item = new Option(style.title, key);
// sel.options.add(item);
// }
var map = new BMap.Map("allmap");
// var point = new BMap.Point(116.404, 39.915);
map.centerAndZoom("酒泉", 5); // 初始化地图,用城市名设置地图中心点
map.addControl(new BMap.NavigationControl()); // 添加平移缩放控件
map.addControl(new BMap.ScaleControl()); // 添加比例尺控件
// map.addControl(new BMap.OverviewMapControl()); //添加缩略地图控件
map.enableScrollWheelZoom(); //启用滚轮放大缩小
// map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
// map.centerAndZoom(point, 14);


var mymapstyle = [
    {
        "featureType": "background",
        "elementType": "geometry",
        "stylers": {
            "color": "#062041bf"
        }
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": {
            "color": "#044e97ff"
        }
    }, {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#044e9747"
        }
    }, {
        "featureType": "districtlabel",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#009bbfff"
        }
    }, {
        "featureType": "districtlabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#000000ff"
        }
    }, {
        "featureType": "poilabel",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#ffffff00"
        }
    }, {
        "featureType": "poilabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
    }, {
        "featureType": "poilabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#ffffffff"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#fffffff5"
        }
    }, {
        "featureType": "road",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        },

    },
    {
        "featureType": "country",
        "elementType": "geometry",
        "stylers": {
            "color": "#054d97",
            "visibility": "on"
        }
    }
]
// function changeMapStyle(style) {
// console.log(style)
// map.setMapStyle({style: style});
// $('#desc').html(mapstyles[style].desc);
// }
// changeMapStyle('midnight')
// sel.value = 'midnight';


// map.setMapStyle({style: 'midnight'});
map.setMapStyle({
    styleJson: mymapstyle
});
// $('#desc').html(mapstyles['midnight'].desc);

// 提示信息 -- 数据+地名
var info_show = true;

// 地图加载完毕
map.addEventListener("tilesloaded",
    function () {
        map.clearOverlays();
        console.log("地图倍数" + map.getZoom());
        if (map.getZoom() < 8) {
            info_show = false;
            map_init();
        } else {
            info_show = true;
            map_init();
        }
        console.log("地图加载完毕");
        $("#loading").hide()
    })


var data_info = [
    [111.181262093, 34.7833199411, "河南省-三门峡市"],
    [114.085490993, 32.1285823075, "河南省-信阳市"],
    [112.542841901, 33.0114195691, "河南省-南阳市"],
    [114.654101942, 33.6237408181, "河南省-周口市"],
    [115.641885688, 34.4385886402, "河南省-商丘市"],
    [114.351806508, 36.1102667222, "河南省-安阳市"],
    [113.300848978, 33.7453014565, "河南省-平顶山市"],
    [114.351642118, 34.8018541758, "河南省-开封市"],
    [113.912690161, 35.3072575577, "河南省-新乡市"],
    [112.447524769, 34.6573678177, "河南省-洛阳市"],
    [114.0460614, 33.5762786885, "河南省-漯河市"],
    [115.026627441, 35.7532978882, "河南省-濮阳市"],
    [113.211835885, 35.234607555, "河南省-焦作市"],
    [113.486804058, 34.157183768, "河南省-省直辖"],
    [113.83531246, 34.0267395887, "河南省-许昌市"],
    [113.64964385, 34.7566100641, "河南省-郑州市"],
    [114.049153547, 32.9831581541, "河南省-驻马店市"],
    [114.297769838, 35.7554258742, "河南省-鹤壁市"],
    [104.776071339, 29.3591568895, "四川省-自贡市"],
    [104.635930302, 30.132191434, "四川省-资阳市"],
    [107.494973447, 31.2141988589, "四川省-达州市"],
    [105.564887792, 30.5574913504, "四川省-遂宁市"],
    [102.228564689, 31.9057628583, "四川省-阿坝藏族羌族自治州"],
    [103.009356466, 29.9997163371, "四川省-雅安市"],
    [117.210813092, 39.1439299033, "天津-天津市"],
    [105.196754199, 37.5211241916, "宁夏回族自治区-中卫市"],
    [106.208254199, 37.9935610029, "宁夏回族自治区-吴忠市"],
    [106.285267996, 36.0215234807, "宁夏回族自治区-固原市"],
    [106.379337202, 39.0202232836, "宁夏回族自治区-石嘴山市"],
    [106.206478608, 38.5026210119, "宁夏回族自治区-银川市"],
    [115.787928245, 33.8712105653, "安徽省-亳州市"],
    [116.505252683, 31.7555583552, "安徽省-六安市"],
    [117.282699092, 31.8669422607, "安徽省-合肥市"],
    [117.058738772, 30.5378978174, "安徽省-安庆市"],
    [118.752096311, 30.9516423543, "安徽省-宣城市"],
    [115.820932259, 32.9012113306, "安徽省-阜阳市"],
    [118.515881847, 31.6885281589, "安徽省-马鞍山市"],
    [118.293569632, 29.7344348562, "安徽省-黄山市"],
    [118.583926333, 37.4871211553, "山东省-东营市"],
    [118.340768237, 35.0724090744, "山东省-临沂市"],
    [122.093958366, 37.5287870813, "山东省-威海市"],
    [116.328161364, 37.4608259263, "山东省-德州市"],
    [119.507179943, 35.4202251931, "山东省-日照市"],
    [110.931245331, 21.6682257188, "广东省-茂名市"],
    [111.977009756, 21.8715173045, "广东省-阳江市"],
    [113.594461107, 24.8029603119, "广东省-韶关市"],
    [109.122627919, 21.472718235, "广西壮族自治区-北海市"],
    [108.297233556, 22.8064929356, "广西壮族自治区-南宁市"],
    [107.357322038, 22.4154552965, "广西壮族自治区-崇左市"],
    [119.173872217, 34.601548967, "江苏省-连云港市"],
    [119.455835405, 32.2044094436, "江苏省-镇江市"],
    [117.955463877, 28.4576225539, "江西省-上饶市"],
    [115.999848022, 29.7196395261, "江西省-九江市"],
    [115.893527546, 28.6895780001, "江西省-南昌市"]
]

var opts = {
    width: 400, // 信息窗口宽度
    // height: 80, // 信息窗口高度
    // title: "<h4>城市详情</h4>", // 信息窗口标题
    enableMessage: true, //设置允许信息窗发送短息
};

function map_init() {

    for (var i = 0; i < data_info.length; i++) {
        var marker = new BMap.Marker(new BMap.Point(data_info[i][0], data_info[i][1])); // 创建标注
        var content = '';

        content += '<div class="window_info " style="width: 400px;overflow: hidden;padding: 10px;background-color: rgb(8,46,83);color:#ddd">';
        content += '<div class="col-xs-12" style="height: 3vh;line-height: 3vh;font-size: 2vh">城市详情</div>';
        content += '<div class="text-center">';
        content += '<div class="transborder" style="overflow: hidden;height: 6.5vh">';
        content += '<div class="col-xs-4 transborder" style="height: 6vh;padding: 0 8px">';
        content += '<div class=" dark">';
        content += '<div class="" style="height: 3vh;line-height: 3vh;font-size: 1vh">' + data_info[i][2] + '</div>';
        content += '<div class="" style="height: 3vh;line-height: 3vh;">2019-02-13 13:00</div>';
        content += '</div>';
        content += '</div>';
        content += '<div class="col-xs-4 transborder" style="height: 6vh;padding: 0 4px">';
        content += '<div class=" dark">';
        content += '<div class="bgorange" style="height: 3vh;line-height: 3vh;">AQI</div>';
        content += '<div class="" style="height: 3vh;line-height: 3vh;">105</div>';
        content += '</div>';
        content += '</div>';
        content += '<div class="col-xs-4 transborder" style="height: 6vh;padding: 0 8px">';
        content += '<div class=" dark">';
        content += '<div class="bgorange" style="height: 3vh;line-height: 3vh;">综合指数</div>';
        content += '<div class="" style="height: 3vh;line-height: 3vh;">5.83</div>';
        content += '</div>';
        content += '</div>';
        content += '</div>';
        content += '<div class="" style="margin-top: 5px;overflow: hidden">';
        content += '<div class="col-xs-4  transborder" style="height: 6.5vh;padding: 0 8px">';
        content += '<div class="col-xs-6 dark " style="height: 6vh;padding: 2px">';
        content += '<div class=" bgorange" style="height: 3vh;line-height: 3vh;">PM2.5</div>';
        content += '<div class="" style="height: 3vh;line-height: 3vh;">79</div>';
        content += '</div>';
        content += '<div class="col-xs-6 dark " style="height: 6vh;padding: 2px">';
        content += '<div class=" bgyellow" style="height: 3vh;line-height: 3vh;">PM10</div>';
        content += '<div class="" style="height: 3vh;line-height: 3vh;">99</div>';
        content += '</div>';
        content += '</div>';
        content += '<div class="col-xs-4 transborder" style="height: 6.5vh;padding: 0 4px">';
        content += '<div class="col-xs-6 dark" style="height: 6vh;padding: 2px">';
        content += '<div class=" bggreen" style="height: 3vh;line-height: 3vh;">SO2</div>';
        content += '<div class="" style="height: 3vh;line-height: 3vh;">10</div>';
        content += '</div>';
        content += '<div class="col-xs-6 dark " style="height: 6vh;padding: 2px">';
        content += '<div class=" bgyellow" style="height: 3vh;line-height: 3vh;">NO2</div>';
        content += '<div class="" style="height: 3vh;line-height: 3vh;">46</div>';
        content += '</div>';
        content += '</div>';
        content += '<div class="col-xs-4 transborder" style="height: 6.5vh;padding: 0 8px">';
        content += '<div class="col-xs-6 dark" style="height: 6vh;padding: 2px">';
        content += '<div class=" bggreen" style="height: 3vh;line-height: 3vh;">CO</div>';
        content += '<div class=" " style="height: 3vh;line-height: 3vh;">0.7</div>';
        content += '</div>';
        content += '<div class="col-xs-6 dark" style="height: 6vh;padding: 2px">';
        content += '<div class=" bggreen" style="height: 3vh;line-height: 3vh;">O3</div>';
        content += '<div class="" style="height: 3vh;line-height: 3vh;">34</div>';
        content += '</div>';
        content += '</div>';
        content += '</div>';
        content += '</div>';
        content += '<div style="height: 6.5vh;margin-top: 5px;" class="text-center">';
        content += '<div class="col-xs-4 " style="height: 6vh;padding: 0 8px">';
        content += '<div class=" dark" style="height: 6vh;line-height: 6vh;font-size: 1.8vh"><i class="fa fa-sun-o"></i> 多云转晴</div>';
        content += '</div>';
        content += '<div class="col-xs-4 " style="height: 6vh;padding: 0 4px">';
        content += ' <div class="">';
        content += ' <div class="" style="height: 3vh;line-height: 3vh;"><i class="fa fa-thermometer "></i> 温度11.9℃</div>';
        content += ' <div class="" style="height: 3vh;line-height: 3vh;"><i class="fa fa-deaf"></i> 风向东北 1级</div>';
        content += ' </div>';
        content += ' </div>';
        content += ' <div class="col-xs-4 " style="height: 6vh;padding: 0 8px">';
        content += '  <div class="">';
        content += '  <div class="" style="height: 3vh;line-height: 3vh;"><i class="fa fa-tint"></i> 湿度47.5%</div>';
        content += ' <div class="" style="height: 3vh;line-height: 3vh;"><i class="fa fa-send-o"></i> 风速14km/h</div>';
        content += ' </div>';
        content += '  </div>';
        content += '  </div>';
        content += '  <div style="height: 6vh;margin-top: 5px;" class="text-center">';
        content += ' <div class="col-xs-12 " style="height: 6vh;padding: 0 8px">';
        content += '  <div class="whborder" style="height: 6vh;line-height: 6vh;"><img src="./img/p1.png" alt="" style="width: 100%;height: 6vh"></div>';
        content += '  </div>';
        content += '  </div>';
        content += ' </div>';

        console.log(info_show);
        let colorArr = ["orange", "green", "yellow", "red", "pink"];
        let color = colorArr[Math.floor(Math.random() * 5)]

        if (info_show) {
            let label_content = '';
            label_content += '<div class="point">';
            label_content += '<div style="background-color:' + color + ' " class="point_num">' + Math.floor(Math.random() * 200) + '</div>';
            label_content += '<div style="border-top-color: ' + color + ' "  class="point_arrow"></div>';
            label_content += '<div class="point_name">' + data_info[i][2].substring(data_info[i][2].indexOf("-") + 1, data_info[i][2].length - 1) + '</div>';
            label_content += '</div>';
            let labelpoint = new BMap.Point(data_info[i][0], data_info[i][1]);
            var labelopts = {
                position: labelpoint, // 指定文本标注所在的地理位置
                offset: new BMap.Size(-30, -30) //设置文本偏移量
            }
            var label = new BMap.Label(label_content, labelopts); // 创建文本标注对象
            map.addOverlay(label);
            addClickHandler(content, label);
        } else {

            var imgrandom = Math.floor(Math.random() * 5 + 1);
            map.removeOverlay(marker);
            var icons = './img/marker' + imgrandom + '.png'; //这个是你要显示坐标的图片的相对路径
            var icon = new BMap.Icon(icons, new BMap.Size(28, 28)); //显示图标大小

            marker.setIcon(icon); //设置标签的图标为自定义图标
            map.addOverlay(marker); //将标签添加到地图中去
            addClickHandler(content, marker);

        }

    }

}

map_init()

function addClickHandler(content, marker) {
    marker.addEventListener("click", function (e) {
        console.log(marker)
        openInfo(content, e)
    });
}

function openInfo(content, e) {
    var p = e.target;
    var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
    var infoWindow = new BMap.InfoWindow(content, opts); // 创建信息窗口对象
    map.openInfoWindow(infoWindow, point); //开启信息窗口
}

// ul ol
$(".content_left_bottom ul li,.content_left_bottom ol li").click(function () {

    $(this).addClass("liFocus");
    $(this).siblings().removeClass("liFocus");
})
// ul ol
$(".right_sort_change .li").click(function () {

    $(this).addClass("rightliFocus");
    $(this).siblings().removeClass("rightliFocus");
})

$("#changeCity").mouseover(function () {

    $("#city_change").fadeIn();

})
$("#changeCity").mouseout(function () {
    $("#city_change").hide();
})


$("#city_change").mouseover(function () {
    $("#city_change").show();
})
// $("#city_change").mouseout(function () {
// $("#city_change").hide();
// })
$("#select_area .form-group select").change(function () {
    $("#city_change").show();
})
$(".select_are_done").click(function () {
    let province = $("#province").val()
    let city = $("#city").val()
    let district = $("#district").val()
    console.log("您选择的区域：");
    console.log("省份：" + province);
    console.log("市：" + city);
    console.log("区/县：" + district);
    $("#location_city").html(district);
    $("#city_change").hide();
})
// 热门城市选择
$("#city_change ul li").click(function () {
    let city = $(this).html();
    $("#location_city").html(city);
    $("#city_change").hide();
})

// 游客IP所在城市
function search_city() {

    console.log("游客IP所在地")
    // console.log(returnCitySN);
    let location = returnCitySN['cname'].indexOf("省") == "-1" ? returnCitySN['cname'] : returnCitySN['cname'].substring(returnCitySN['cname'].indexOf("省") + 1, returnCitySN['cname'].length - 1);
    console.log(location);
    $("#location_city").html(location)
}

search_city();

var x = 0;
var limit = parseInt($(".footer_div>div>div").css("width"));

// 底部左箭头
$(".footer_left").click(function () {
    console.log('左左左');
    x += limit;
    if (x >= parseInt($(".footer_div>div").css('width')) / 2) {
        x = parseInt($(".footer_div>div").css('width')) / 2;
    }
    $(".footer_div").scrollLeft(x);
})
// 底部右箭头
$(".footer_right").click(function () {
    console.log('右右右');
    x -= limit;
    if (x <= 0) {
        x = 0;
    }
    console.log(x);
    $(".footer_div").scrollLeft(x);
    console.log($(".footer_div>div").scrollLeft() + "*********")
})

$(".window_info").parents().css("padding", "0");

// 右侧顶部地图显示类型切换
$(".right_sort_change .li").click(function () {
    let type = $(this).text();
    console.log("地图显示类型切换 -- " + type)
})

// 右侧顶部select地图场景切换
$(".map_sort").change(function () {
    let style = $(this).val();
    if (style.length > 1) {
        map.setMapStyle({
            style: style
        });
    } else {
        map.setMapStyle({
            styleJson: mymapstyle
        });
    }

})
// 右侧类型切换 -- PM2.5、AQI等切换
$(".right_ol .airtype").click(function () {
    let type = $(this).text();
    console.log("状态切换--" + type);
    $(this).addClass("right_ol_liFocus");
    $(this).siblings('.airtype').removeClass("right_ol_liFocus");
})
// 右侧类型切换 -- PM2.5、AQI等切换
$(".right_ol .moveto").click(function () {
    let type = $(this).text();
    console.log("状态地区--" + type);
    $(this).addClass("right_ol_liFocus");
    $(this).siblings(".moveto").removeClass("right_ol_liFocus");

})

// 左下角城市排名 -- 排名范围切换
$(".city_sort_change li").click(function () {
    let city_sort = $(this).text();
    console.log("城市排名范围切换：" + city_sort);
})

// 左下角城市排名 -- 时间类型切换
$(".city_time_change li").click(function () {
    let city_sort = $(".city_sort_change .liFocus").text();
    let city_time = $(this).text();
    console.log("=========================")
    console.log("城市排名范围切换：" + city_sort);
    console.log("城市排名时间类型切换：" + city_time)
    console.log("=========================")
})


// 底部echarts
var dom = document.getElementById("footer_echart");
var myChart = echarts.init(dom);
var app = {};
bottomoption = null;
bottomoption = {
    title: {
        text: '折线图堆叠',
        show: false
    },
    color: "rgb(14, 238, 236)",
    backgroundColor: "rgba(255,255,255,0.05)",
    tooltip: {
        style: {
            zIndex: 999
        },
        trigger: 'axis',
        formatter: "{a}<br>日期: {b}<br>数据：{c}",
    },
    legend: {
        show: false,
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    grid: {
        x: 5,
        y: 5,
        x2: 5,
        y2: 5,
        borderWidth: 1
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        },
        show: false
    },
    xAxis: {
        show: false,
        type: 'category',
        boundaryGap: false,
        data: ['1-17', '1-18', '1-19', '1-20', '1-21', '1-22', '1-23', '1-24', '1-25', '1-26', '1-27', '1-28']
    },
    //网格样式
    splitLine: {
        show: false,
        lineStyle: {
            color: ['red'],
            width: 1,
            type: 'solid'
        }
    },
    yAxis: {
        show: false,
        type: 'value'
    },
    visualMap: {
        show: false,
        dimension: 0,
        pieces: [{
            lte: 6,
            color: 'blue'
        }, {
            gt: 6,
            lte: 8,
            color: 'lightblue'
        }, {
            gt: 8,
            lte: 14,
            color: 'lightblue'
        }, {
            gt: 14,
            lte: 17,
            color: 'lightblue'
        }, {
            gt: 17,
            color: 'lightblue'
        }]
    },
    series: [

        {
            name: '天气数据',
            type: 'line',
            stack: '天气数据',
            smooth: true,
            data: [200, 932, 500, 934, 1290, 200, 932, 500, 934, 1290, 100, 900]
        },

    ],
};

;
if (bottomoption && typeof bottomoption === "object") {
    myChart.setOption(bottomoption, true);
}

// 左侧 查看详情
$("#left_detail").mouseover(function () {
    console.log("查看详情111");
    $("#details").fadeIn();
})

$("#left_detail").mouseout(function () {
    console.log("查看详情222");
    $("#details").hide();
})

$("#details").mouseover(function () {
    $("#details").show();
})

$("#details").mouseout(function () {
    $("#details").hide();
})


// 右侧 查看详情
$(".notation").mouseover(function () {
    $("#annotation").fadeIn();
})

$(".notation").mouseout(function () {
    $("#annotation").hide();
})

// 报警信息 查看详情
$(".warning").mouseover(function () {
    $(".warning_info_details").fadeIn();
})

$(".warning").mouseout(function () {
    $(".warning_info_details").hide();
})

// 地图类型切换
var map_select_flag = false;
$(".map_control").click(function () {
    if (!map_select_flag) {
        $(".map_select").fadeIn();
        map_select_flag = true;
    } else {
        $(".map_select").hide();
        map_select_flag = false;
    }

})

$(".map_select").click(function () {
    $(".map_select").hide();
})

function maptype(type) {
    map.reset()
    if (type == 1) {
        map.centerAndZoom("固原", 6); // 初始化地图,用城市名设置地图中心点
        map.setMapType(BMAP_HYBRID_MAP);
    } else {

        map.centerAndZoom("固原", 6); // 初始化地图,用城市名设置地图中心点
        // map.setMapType(BMAP_NORMAL_MAP);
        // map.setMapStyle({style: 'normal'});

        let styjson = [
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "featureType": "highway",
                "elementType": "all",
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "featureType": "subway",
                "elementType": "all",
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "featureType": "railway",
                "elementType": "all",
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "featureType": "arterial",
                "elementType": "all",
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "featureType": "land",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "on",
                    "color": "#8b572a80"
                }
            }, {
                "featureType": "green",
                "elementType": "geometry",
                "stylers": {
                    "color": "#41750561"
                }
            }, {
                "featureType": "building",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#4a4a4aff"
                }
            }, {
                "featureType": "estate",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "off"
                }
            }, {
                "featureType": "entertainment",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "off"
                }
            }, {
                "featureType": "shopping",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "off"
                }
            }, {
                "featureType": "transportation",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "featureType": "districtlabel",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#4a90e2ff",
                    "weight": 10
                }
            }, {
                "featureType": "districtlabel",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#ffffff8c"
                }
            }]
        map.setMapStyle({styleJson: styjson});
    }

}

function mapstyle(style) {
    map.reset()
    if (style == 1) {
        map.setMapType(BMAP_NORMAL_MAP);
        map.setMapStyle({
            styleJson: mymapstyle
        });
    } else {
        map.setMapType(BMAP_NORMAL_MAP);
        map.setMapStyle({style: style});
    }

}

// 顶部菜单
$(".header").mouseover(function () {
    $(".menu").stop().slideDown();
})

$(".header").mouseout(function () {
    $(".menu").stop().slideUp();
})

$(".menu").mouseover(function () {
    $(".menu").stop().slideDown();
})

$(".menu").mouseout(function () {
    $(".menu").stop().slideUp();
})

$(window).resize(function () {
    myChart.resize()
});

function moveTo(where) {
    console.log(where);
    map.centerAndZoom(where, 9); // 初始化地图,用城市名设置地图中心点
}


$(".play").click(function () {

    console.log($('.play .fa-play').is(":hidden"))
    if ($('.play .fa-play').is(":hidden") == false) {
        $('.play .fa-play').hide();
        $('.play .fa-pause').show()
        // 播放
        $(".footer_div").stop().animate({scrollLeft: parseInt($(".footer_div>div").css('width')) / 2}, 6000);
        $(".footer_div").scroll(function () {
            // console.log($('.footer_div').scrollLeft())
            if ($('.footer_div').scrollLeft() == $(this).width()) {
                $(this).scrollLeft(0);
                $(".footer_div").stop().animate({scrollLeft: parseInt($(".footer_div>div").css('width')) / 2}, 6000);
            }
        })

    } else {
        // $('.paly .fa').addClass('fa-pause').removeClass('fa-play');
        $('.play .fa-play').show();
        $('.play .fa-pause').hide()
        // 暂停
        $(".footer_div").stop();
    }

})

//风场图
function init_wind() {
    var wind_html = "<div style='height:25px;background:#30A4D5;margin-top:10px;width: 98%;margin-left: 3px;float: left;'>" +
        "<span style='margin-left:5px;font-size: 13px;color:white;'>风场图</span>" +
        "</div>" +
        '<div id="windLayer" style="padding:5px;">' +
        '<input type="checkbox" name="windlayer" style="width: 15px;height: 15px;vertical-align: middle;margin: auto;border: 1px solid"/>' +
        '<label style="font-weight: normal;vertical-align: middle;margin: auto;">风场图</label>' +
        '</div>'
    $('#wind').append(wind_html)

}

// init_wind()
//风场图
$("#windLayer input").bind("click", function () {
    console.log(map)
    if (this.checked) {
        var layer = map.getMapConfig().getShareLayer("GISSERVER_Wind");
        bxmap.olWindLayer.Init(bmap);
        if (layer) {
            layer.setVisible(true);
        }
        //图例面板显示
        $("#map_tl").css("display", "block");
        $("#map_tl>img").attr('src', getRootPath() + "js/main/olWindLayer/windLegend.jpg");
        $("#map_tl>img").css("width", "auto");
        $("#map_tl>img").css("height", "300px");
    } else {
        var layer = map.getMapConfig().getShareLayer("GISSERVER_Wind");
        bxmap.olWindLayer.clearWind();
        if (layer) {
            layer.setVisible(false);
        }
        //图例面板隐藏
        $("#map_tl").hide();
    }
})