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
    minor_credit_program[i++] = new node("-----請選擇Choose-----", ["-----請選擇Choose-----"]);
    minor_credit_program[i++] = new node("輔系專班", ["-----請選擇Choose-----", "中輔", "外輔", "貿輔", "會輔", "英輔", "日輔", "韓輔", "法輔"]);
    minor_credit_program[i++] = new node("學分學程專班", ["-----請選擇Choose-----", "台灣與近代世界學程 ", "文化、 傳播與現代社會學程 ", "創意學程 ", "華語文教學學分學程 ", "人文學程 ", "中國大陸研究跨領域學程 ", "東北亞語言與文化學程 ", "斯拉夫語文學程 ", "中東語言與文化學程 ", "調查研究方法菁英學分學程 ", "社會科學榮譽學程 ", "外文中心歐洲語言與文化學程 ", "國際事務學院涉外事務與談判學程 ", "外語傳播第二專長學程 ", "英語商管學程 ", "英語文榮譽學程 ", "人文榮譽學程 ", "法律與會計碩士學程 ", "藝術產業經營學程 ", " 生物科技管理學程 ", "台灣人文數位典藏與應用學程 ", "東南亞語文學分學程 ", "性別研究跨領域學程 ", "日本研究碩士學分學程 ", "專利學分學程 ", "歐洲聯盟研究碩士學分學程 ", "全球政府採購學分學程 ", "翻譯與跨文化學分學程 ", "供應鏈管理學分學程 ", "數理財務學分學程 ", "語言、 認知與大腦 ", "社會創新領袖學分學程 ", "博雅榮譽學分學程 ", "外語專長商管學分學程 ", "創意設計實務學分學程 ", "電子物理學分學程 ", "國際經貿談判人才培育跨校學分學程 ", "國際事務學院英語授課學分學程 ", "傳播學院國際傳播英語學分學程 ", "社會科學學院英語授課學分學程 ", "法學院英語授課學分學程 ", "理學院英語授課學分學程 ", "教育學院英語授課學分學程 ", "外國語文學院世界文化英語學分學程 ", "文學院英語學分學程 ", "大腦科學學分學程 ", "日本文化與經濟學分學程 ", "人文創新學程 ", "全球治理英語學分學程 "]);
    minor_credit_program[i++] = new node("教學實習與實務", ["教學實習與實務"]);

    //服務、體育、國防
    var service_PE_all_out_defense = new Array();
    var i = 0;
    service_PE_all_out_defense[i++] = new node("-----請選擇Choose-----", ["-----請選擇Choose-----"]);
    service_PE_all_out_defense[i++] = new node("服務學習", ["服務學習"]);
    service_PE_all_out_defense[i++] = new node("體育", ["-----請選擇Choose-----", "體育必修 ", "體育選修 ", "體育代表隊／特別班 "]);
    service_PE_all_out_defense[i++] = new node("全民國防", ["全民國防"]);

    //文
    var liberal = new Array();
    var i = 0;
    liberal[i++] = new node("-----請選擇Choose-----", ["-----請選擇Choose-----"]);
    liberal[i++] = new node("學士班", ["-----請選擇Choose-----", "中國文學系", "歷史學系", "哲學系", "人文榮譽學程"]);
    liberal[i++] = new node("碩士班", ["-----請選擇Choose-----", "中國文學系", "歷史學系", "哲學系", "圖書資訊與檔案學研究所", "宗教研究所", "台灣史研究所", "台灣文學研究所", "華語文教學碩士學位學程", "國文教學碩士在職專班", "圖書資訊學數位碩士在職專班"]);
    liberal[i++] = new node("博士班", ["-----請選擇Choose-----", "中國文學系", "歷史學系", "哲學系", "圖書資訊與檔案學研究所", "宗教研究所", "台灣史研究所", "台灣文學研究所", "華語文教學博士學位學程"]);


    //社科
    var social_science = new Array();
    var i = 0;
    social_science[i++] = new node("-----請選擇Choose-----", ["-----請選擇Choose-----"]);
    social_science[i++] = new node("學士班", ["-----請選擇Choose-----", "政治學系", "財政學系", "社會學系", "公共行政學系", "地政學系", "經濟學系", "民族學系"]);
    social_science[i++] = new node("碩士班", ["-----請選擇Choose-----", "政治學系", "財政學系", "社會學系", "公共行政學系", "地政學系", "經濟學系", "民族學系", "國家發展研究所", "勞工研究所", "社會工作研究所", "行政管理碩士學程", "地政學系碩士在職專班", "亞太研究英語碩士學程"]);
    social_science[i++] = new node("博士班", ["-----請選擇Choose-----", "政治學系", "財政學系", "社會學系", "公共行政學系", "地政學系", "經濟學系", "民族學系", "國家發展研究所", "社會工作研究所", "亞太研究英語博士學程"]);

    //商
    var commerse = new Array();
    var i = 0;
    commerse[i++] = new node("-----請選擇Choose-----", ["-----請選擇Choose-----"]);
    commerse[i++] = new node("學士班", ["-----請選擇Choose-----", "商學院", "國際經營與貿易系", "金融學系", "會計學系", "統計學系", "企業管理", "資訊管理學系", "財務管理學系", "風險管理與保險學系"]);
    commerse[i++] = new node("碩士班", ["-----請選擇Choose-----", "國際經營與貿易系", "金融學系", "會計學系", "統計學系", "企業管理", "資訊管理學系", "財務管理學系", "風險管理與保險學系"]); //對不起我累了，有空再補
    commerse[i++] = new node("博士班", ["-----請選擇Choose-----", "國際經營與貿易系", "金融學系", "會計學系", "統計學系", "企業管理", "資訊管理學系", "財務管理學系", "風險管理與保險學系"]); //對不起我累了，有空再補

    //傳播
    var communication = new Array();
    var i = 0;
    communication[i++] = new node("-----請選擇Choose-----", ["-----請選擇Choose-----"]);
    communication[i++] = new node("學士班", ["-----請選擇Choose-----", "傳播學院前段不分班課程", "傳播學院大一大二不分系", "新聞學系", "廣告學系", "廣播電視學系", "傳播學院傳播學士學位學程"]);
    communication[i++] = new node("碩士班", ["-----請選擇Choose-----", "新聞學系", "廣告學系", "廣播電視學系", "傳播學院碩士學位學程"]); //對不起我累了，有空再補
    communication[i++] = new node("博士班", ["-----請選擇Choose-----", "新聞學系", "傳播學院博士班"]);

    //外文
    var foreign_languages = new Array();
    var i = 0;
    foreign_languages[i++] = new node("-----請選擇Choose-----", ["-----請選擇Choose-----"]);
    foreign_languages[i++] = new node("學士班", ["-----請選擇Choose-----", "英國語文學系", "阿拉伯語文學系", "斯拉夫語文學系", "日本語文學系", "韓國語文學系", "土耳其語文學系", "歐洲語文學系", "東南亞語言與文化學士學位學程", "外文中心"]);
    foreign_languages[i++] = new node("碩士班", ["-----請選擇Choose-----", "英國語文學系", "斯拉夫語文學系", "語言學研究所", "日本語文學系", "韓國語文學系"]); //對不起我累了，有空再補
    foreign_languages[i++] = new node("博士班", ["-----請選擇Choose-----", "英國語文學系", "語言學研究所"]);

    //法
    var law = new Array();
    var i = 0;
    law[i++] = new node("-----請選擇Choose-----", ["-----請選擇Choose-----"]);
    law[i++] = new node("學士班", ["法律學系"]);
    law[i++] = new node("碩士班", ["-----請選擇Choose-----", "法律學系", "法律學系碩士在職專班"]); //對不起我累了，有空再補
    law[i++] = new node("博士班", ["-----請選擇Choose-----", "法律學系"]);
    //理學院
    var science = new Array();
    var i = 0;
    science[i++] = new node("-----請選擇Choose-----", ["-----請選擇Choose-----"]);
    science[i++] = new node("學士班", ["-----請選擇Choose-----", "應用數學系", "心理學系", "資訊科學系", "數位內容與科技學士學位學程"]);
    science[i++] = new node("碩士班", ["-----請選擇Choose-----", "應用數學系", "心理學系", "資訊科學系", "神經科學研究所", "應用物理研究所", "資訊科學系碩士在職專班", "數學教學碩士在職專班"]);
    science[i++] = new node("博士班", ["-----請選擇Choose-----", "應用數學系", "心理學系", "資訊科學系", "社群網路與人智計算國際研究生博士學位學程"]);

    //國際事務
    var international_affairs = new Array();
    var i = 0;
    international_affairs[i++] = new node("-----請選擇Choose-----", ["-----請選擇Choose-----"]);
    international_affairs[i++] = new node("學士班", ["外交學系"]);
    international_affairs[i++] = new node("碩士班", ["-----請選擇Choose-----", "外交學系", "東亞研究所", "俄羅斯研究所", "日本研究碩士學位學程", "國際研究英語碩士學位學程"]); //對不起我累了，有空再補
    international_affairs[i++] = new node("博士班", ["-----請選擇Choose-----", "外交學系", "東亞研究所", "日本研究博士學位學程"]);

    //教育
    var education = new Array();
    var i = 0;
    education[i++] = new node("-----請選擇Choose-----", ["-----請選擇Choose-----"]);
    education[i++] = new node("學士班", ["教育學系"]);
    education[i++] = new node("碩士班", ["-----請選擇Choose-----", "教育學院", "教育學系", "幼兒教育研究所", "教育行政與政策研究所", "輔導與諮商碩士學位學程", "學校行政碩士在職專班", "資訊科學系碩士在職專班"]);
    education[i++] = new node("博士班", ["-----請選擇Choose-----", "教育學院", "教育學系"]);


    //組合名稱跟上方三個陣列的對應關聯
    var Thecourse = new Array();
    var i = 0;
    Thecourse[i++] = new node("-----請選擇Choose-----", Empty);
    Thecourse[i++] = new node("整開／通識", Integrated_Courses_General_Education);
    Thecourse[i++] = new node("輔系／學分專班", minor_credit_program);
    Thecourse[i++] = new node("服務／體育／全民國防", service_PE_all_out_defense);
    Thecourse[i++] = new node("文學院", liberal);
    Thecourse[i++] = new node("社會科學院", social_science);
    Thecourse[i++] = new node("商學院", commerse);
    Thecourse[i++] = new node("傳播學院", communication);
    Thecourse[i++] = new node("外文學院", foreign_languages);
    Thecourse[i++] = new node("法學院", law);
    Thecourse[i++] = new node("理學院", science);
    Thecourse[i++] = new node("國際事務學院", international_affairs);
    Thecourse[i++] = new node("教育學院", education);


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
    }

}

function add_to_list() {
    var course_name = document.getElementsByClassName("course_name");
    var course_id = document.getElementsByClassName("course_id");
    var add_to_list = document.getElementsByClassName("add_to_list");
    for (let i = 0; i < add_to_list.length + 1; i++) {
        add_to_list[i].addEventListener("click", function () {
            alert(course_id[i].innerHTML + "：" + course_name[i].innerHTML + " 加入追蹤清單成功！");
        });
        console.log(course_name[i].innerHTML);
    }
}