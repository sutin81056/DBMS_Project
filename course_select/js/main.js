var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
/*
function node(name, course) {
    this.name = name;
    this.course = course;
}
var Integrated_Courses_value = [105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136];
var General_Education_value = ["2S1", "2S2", "2S3", "2S4", "2S5", "2S6", "2S7"];
var Science_undergraduate_value = ["701", "702", "703", "781"];
var Science_MA_value = ["751", "752", "753", "754", "755", "971", "972"];
var Science_PHD_value = ["751", "752", "753", "761"];

function dataHierarchy() {
    // 整開/通識課
    var Integrated_Courses_General_Education = new Array();
    Integrated_Courses_General_Education[0] = new node("整開", ["管理學", "統計學", "經濟學", "行政學", "行銷管理", "投資學", "社會學", "政治學", "初級會計學（一）", "初級會計學（二）", "中級會計學（一）", "中級會計學（二）", "中級會計學（三）", "成本管理會計（一）", "民法概要", "個體經濟學", "財政學", "財務管理", "國際關係", "貨幣銀行學", "軟體應用導論", "普通心理學", "資訊管理", "數理統計學", "總體經濟學", "商事法", "資料處理", "稅務會計", "審計學（一）", "審計學（二）", "成本管理會計（二） ", "社會責任與倫理", "華語特別班 ", "學術英文"]);
    Integrated_Courses_General_Education[1] = new node("通識", ["中國語文類通識", "外國語文類通識", "人文學類通識", "社會科學類通識", "自然科學類通識", "跨領域類通識", "書院通識"]);

    // 理學院
    var Science = new Array();
    var i = 0;
    Science[i++] = new node("學士班", ["應用數學系", "心理學系", "資訊科學系", "數位內容與科技學士學位學程"]);
    Science[i++] = new node("碩士班", ["應用數學系", "心理學系", "資訊科學系", "神經科學研究所", "應用物理研究所", "資訊科學系碩士在職專班", "數學教學碩士在職專班"]);
    Science[i++] = new node("博士班", ["應用數學系", "心理學系", "資訊科學系", "社群網路與人智計算國際研究生博士學位學程"]);

    // 第一個欄位
    var output = new Array();
    var i = 0;
    output[i++] = new node("整開／通識", Integrated_Courses_General_Education);
    output[i++] = new node("理學院", Science);

    return (output);
}
dataTree = dataHierarchy();

// 第三個欄位被更動後的反應動作
function onChangeColumn3() {
    updatePath();
}

// 第二個欄位被更動後的反應動作
function onChangeColumn2() {
    form = document.theForm;
    index1 = column1.selectedIndex;
    index2 = column2.selectedIndex;
    index3 = column3.selectedIndex;
    // Create options for column 3
    for (i = 0; i < dataTree[index1].course[index2].course.length; i++)
        column3.options[i] = new Option(dataTree[index1].course[index2].course[i], dataTree[index1].course[index2].course[i]);
    column3.options.length = dataTree[index1].course[index2].course.length;
    updatePath();
}

// 第一個欄位被更動後的反應動作
function onChangeColumn1() {
    form = document.theForm;
    index1 = column1.selectedIndex;
    index2 = column2.selectedIndex;
    index3 = column3.selectedIndex;
    // Create options for column 2
    for (i = 0; i < dataTree[index1].course.length; i++)
        column2.options[i] = new Option(dataTree[index1].course[i].name, dataTree[index1].course[i].name);
    column2.options.length = dataTree[index1].course.length;
    // Clear column 3
    column3.options.length = 0;
    updatePath();
}

// 修改所顯示的路徑
function updatePath() {
    form = document.theForm;
    index1 = column1.selectedIndex;
    index2 = column2.selectedIndex;
    index3 = column3.selectedIndex;
    if ((index1 >= 0) && (index2 >= 0) && (index3 >= 0)) {
        text1 = column1.options[index1].text;
        text2 = column2.options[index2].text;
        text3 = column3.options[index3].text;
        path.value = text1 + " ==> " + text2 + " ==> " + text3;
    } else
        path.value = "";
}
*/

function node(name, course) {
    this.name = name;
    this.course = course;
}

var dataTree = dataHierarchy();

function dataHierarchy() {
    //未選擇
    var Empty = new Array();
    var i = 0;
    Empty[i++] = new node("-----請選擇Choose-----", ["-----請選擇Choose-----"]);

    //整開通識
    var Integrated_Courses_General_Education = new Array();
    var i = 0;
    Integrated_Courses_General_Education[i++] = new node("-----請選擇Choose-----", ["-----請選擇Choose-----"]);
    Integrated_Courses_General_Education[i++] = new node("整開", ["-----請選擇Choose-----", "管理學", "統計學", "經濟學", "行政學", "行銷管理", "投資學", "社會學", "政治學", "初級會計學（一）", "初級會計學（二）", "中級會計學（一）", "中級會計學（二）", "中級會計學（三）", "成本管理會計（一）", "民法概要", "個體經濟學", "財政學", "財務管理", "國際關係", "貨幣銀行學", "軟體應用導論", "普通心理學", "資訊管理", "數理統計學", "總體經濟學", "商事法", "資料處理", "稅務會計", "審計學（一）", "審計學（二）", "成本管理會計（二） ", "社會責任與倫理", "華語特別班 ", "學術英文"]);
    Integrated_Courses_General_Education[i++] = new node("通識", ["-----請選擇Choose-----", "中國語文類通識", "外國語文類通識", "人文學類通識", "社會科學類通識", "自然科學類通識", "跨領域類通識", "書院通識"]);

    //輔系 學分專班
    var minor_credit_program = new Array();
    var i = 0;
    minor_credit_program[i++] = new node("輔系專班", ["中輔", "外輔", "貿輔", "會輔", "英輔", "日輔", "韓輔", "法輔"]);
    minor_credit_program[i++] = new node("學分學程專班", ["台灣與近代世界學程 ", "文化、 傳播與現代社會學程 ", "創意學程 ", "華語文教學學分學程 ", "人文學程 ", "中國大陸研究跨領域學程 ", "東北亞語言與文化學程 ", "斯拉夫語文學程 ", "中東語言與文化學程 ", "調查研究方法菁英學分學程 ", "社會科學榮譽學程 ", "外文中心歐洲語言與文化學程 ", "國際事務學院涉外事務與談判學程 ", "外語傳播第二專長學程 ", "英語商管學程 ", "英語文榮譽學程 ", "人文榮譽學程 ", "法律與會計碩士學程 ", "藝術產業經營學程 ", " 生物科技管理學程 ", "台灣人文數位典藏與應用學程 ", "東南亞語文學分學程 ", "性別研究跨領域學程 ", "日本研究碩士學分學程 ", "專利學分學程 ", "歐洲聯盟研究碩士學分學程 ", "全球政府採購學分學程 ", "翻譯與跨文化學分學程 ", "供應鏈管理學分學程 ", "數理財務學分學程 ", "語言、 認知與大腦 ", "社會創新領袖學分學程 ", "博雅榮譽學分學程 ", "外語專長商管學分學程 ", "創意設計實務學分學程 ", "電子物理學分學程 ", "國際經貿談判人才培育跨校學分學程 ", "國際事務學院英語授課學分學程 ", "傳播學院國際傳播英語學分學程 ", "社會科學學院英語授課學分學程 ", "法學院英語授課學分學程 ", "理學院英語授課學分學程 ", "教育學院英語授課學分學程 ", "外國語文學院世界文化英語學分學程 ", "文學院英語學分學程 ", "大腦科學學分學程 ", "日本文化與經濟學分學程 ", "人文創新學程 ", "全球治理英語學分學程 "]);
    minor_credit_program[i++] = new node("教學實習與實務", []);

    //理學院
    var Science = new Array();
    var i = 0;
    Science[i++] = new node("-----請選擇Choose-----", ["-----請選擇Choose-----"]);
    Science[i++] = new node("學士班", ["-----請選擇Choose-----", "應用數學系", "心理學系", "資訊科學系", "數位內容與科技學士學位學程"]);
    Science[i++] = new node("碩士班", ["-----請選擇Choose-----", "應用數學系", "心理學系", "資訊科學系", "神經科學研究所", "應用物理研究所", "資訊科學系碩士在職專班", "數學教學碩士在職專班"]);
    Science[i++] = new node("博士班", ["-----請選擇Choose-----", "應用數學系", "心理學系", "資訊科學系", "社群網路與人智計算國際研究生博士學位學程"]);


    //lily white
    var LLlilywhite = new Array();
    var i = 0;
    LLlilywhite[i++] = new node("園田海未", ["私たちは未来の花"]);
    LLlilywhite[i++] = new node("星空凛", ["くるりんMIRACLE", "Beat in Angel"]);
    LLlilywhite[i++] = new node("東條希", ["もしもからきっと", "純愛レンズ"]);

    //組合名稱跟上方三個陣列的對應關聯
    var Thecourse = new Array();
    var i = 0;
    Thecourse[i++] = new node("-----請選擇Choose-----", Empty);
    Thecourse[i++] = new node("整開/通識", Integrated_Courses_General_Education);
    Thecourse[i++] = new node("輔系/學分專班", minor_credit_program);
    Thecourse[i++] = new node("理學院", Science);


    return (Thecourse);
}

//第一個欄位被更動後的反應動作
function onChangeColumn1() {
    index1 = column1.selectedIndex;

    // Create options for column 2
    for (i = 0; i < dataTree[index1].course.length; i++)
        column2.options[i] = new Option(dataTree[index1].course[i].name, dataTree[index1].course[i].name);
    column2.options.length = dataTree[index1].course.length;

    // Clear column 3
    column3.options.length = 0;

    updatePath();
}

//第二個欄位被更動後的反應動作
function onChangeColumn2() {
    index1 = column1.selectedIndex;
    index2 = column2.selectedIndex;

    //Create options for column 3
    for (i = 0; i < dataTree[index1].course[index2].course.length; i++)
        column3.options[i] = new Option(dataTree[index1].course[index2].course[i], dataTree[index1].course[index2].course[i]);
    column3.options.length = dataTree[index1].course[index2].course.length;

    updatePath();
}

//第三個欄位被更動後的反應動作
function onChangeColumn3() {
    updatePath();
}

//修改所顯示的路徑
function updatePath() {
    var thePath;
    index1 = column1.selectedIndex;
    index2 = column2.selectedIndex;
    index3 = column3.selectedIndex;
    if ((index1 >= 0) && (index2 >= 0) && (index3 >= 0)) {
        text1 = column1.options[index1].text;
        text2 = column2.options[index2].text;
        text3 = column3.options[index3].text;
        thePath = "你目前點取的是" + text1 + "中的" + text2 + "所演唱的" + text3;
    } else {
        thePath = "";
    }
    document.getElementById("path").innerHTML = thePath;
}