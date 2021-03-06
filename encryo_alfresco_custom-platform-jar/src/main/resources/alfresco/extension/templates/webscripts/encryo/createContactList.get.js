// Get/Create data list container
// var site = companyhome.childByNamePath("Sites/swsdp");
// var dataListContainer = "dataLists";
// var dataLists = site.getContainer(dataListContainer);
var site = siteService.getSite("contact-list");
var dataLists = site.getContainer("dataLists");

if (!dataLists) {
    var dataLists = site.createNode(dataListContainer, "cm:folder");
    var dataListProps = new Array(1);
    dataListProps["st:componentId"] = dataListContainer;
    dataLists.addAspect("st:siteContainer", dataListProps);
}

var contactListName = "Contact List";
var contactList = dataLists.childByNamePath(contactListName);
if (!contactList) {
    var contactListItemType = "acmedl:ContactListItem";

    // Create a contact List
    contactList = dataLists.createNode(contactListName, "dl:dataList");
    contactList.properties["dl:dataListItemType"] = contactListItemType;
    contactList.save();
    var contactListProps = [];
    contactListProps["cm:title"] = "Contact List Auto";
    contactListProps["cm:description"] = "Contact list generated by a javascript.";
    contactList.addAspect("cm:titled", contactListProps);

    // Add an item to the contact list

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "22058";
    contact.properties["acmedl:CL_EnglishName"] = "Guo Yi";
    contact.properties["acmedl:CL_ChineseName"] = "郭奕";
    contact.properties["acmedl:CL_JobTitle"] = "Finance";
    contact.properties["acmedl:CL_OfficeNumber"] = "2258";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "138 1169 8865";
    contact.properties["acmedl:CL_EncryoEmail"] = "yi.guo@bhge.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "22036";
    contact.properties["acmedl:CL_EnglishName"] = "Zhang Yonghai";
    contact.properties["acmedl:CL_ChineseName"] = "张永海";
    contact.properties["acmedl:CL_JobTitle"] = "BD";
    contact.properties["acmedl:CL_OfficeNumber"] = "2236";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "133 0126 4177";
    contact.properties["acmedl:CL_EncryoEmail"] = "yonghai.zhang@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "22001";
    contact.properties["acmedl:CL_EnglishName"] = "Liu Qingjiang";
    contact.properties["acmedl:CL_ChineseName"] = "刘庆江";
    contact.properties["acmedl:CL_JobTitle"] = "BD";
    contact.properties["acmedl:CL_OfficeNumber"] = "2251";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "136 7917 6885";
    contact.properties["acmedl:CL_EncryoEmail"] = "qingjiang.liu@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "qj.liu@maison.cn";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20198";
    contact.properties["acmedl:CL_EnglishName"] = "Wang Bojian";
    contact.properties["acmedl:CL_ChineseName"] = "王伯坚";
    contact.properties["acmedl:CL_JobTitle"] = "Electrical Engineer";
    contact.properties["acmedl:CL_OfficeNumber"] = "2198";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "138 1197 5796";
    contact.properties["acmedl:CL_EncryoEmail"] = "bojian.wang@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20197";
    contact.properties["acmedl:CL_EnglishName"] = "Zheng Lili";
    contact.properties["acmedl:CL_ChineseName"] = "郑莉莉";
    contact.properties["acmedl:CL_JobTitle"] = "Assistant Process Engineer";
    contact.properties["acmedl:CL_OfficeNumber"] = "2197";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "182 6345 4928";
    contact.properties["acmedl:CL_EncryoEmail"] = "lili.zheng@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20195";
    contact.properties["acmedl:CL_EnglishName"] = "Liu Yedi";
    contact.properties["acmedl:CL_ChineseName"] = "刘烨頔";
    contact.properties["acmedl:CL_JobTitle"] = "Assistant Instrument & Control Engineer";
    contact.properties["acmedl:CL_OfficeNumber"] = "2195";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "176 2900 7712";
    contact.properties["acmedl:CL_EncryoEmail"] = "yedi.liu@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20194";
    contact.properties["acmedl:CL_EnglishName"] = "Wang Nan";
    contact.properties["acmedl:CL_ChineseName"] = "王楠";
    contact.properties["acmedl:CL_JobTitle"] = "Instrument and Control Engineer";
    contact.properties["acmedl:CL_OfficeNumber"] = "2194";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "188 1105 4682";
    contact.properties["acmedl:CL_EncryoEmail"] = "nan.wang@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20193";
    contact.properties["acmedl:CL_EnglishName"] = "Qian Jinqiao";
    contact.properties["acmedl:CL_ChineseName"] = "钱津桥";
    contact.properties["acmedl:CL_JobTitle"] = "Civil/Structual Engineer";
    contact.properties["acmedl:CL_OfficeNumber"] = "2193";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "183 0213 2774";
    contact.properties["acmedl:CL_EncryoEmail"] = "jinqiao.qian@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20192";
    contact.properties["acmedl:CL_EnglishName"] = "Chen Zhaowen";
    contact.properties["acmedl:CL_ChineseName"] = "陈兆文";
    contact.properties["acmedl:CL_JobTitle"] = "Process Engineer";
    contact.properties["acmedl:CL_OfficeNumber"] = "2192";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "152 0130 1774";
    contact.properties["acmedl:CL_EncryoEmail"] = "zhaowen.chen@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20191";
    contact.properties["acmedl:CL_EnglishName"] = "Wang Yunfei";
    contact.properties["acmedl:CL_ChineseName"] = "王云飞";
    contact.properties["acmedl:CL_JobTitle"] = "Process Engineer";
    contact.properties["acmedl:CL_OfficeNumber"] = "2191";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "138 1178 0655";
    contact.properties["acmedl:CL_EncryoEmail"] = "yunfei.wang@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20190";
    contact.properties["acmedl:CL_EnglishName"] = "Cao Honglei";
    contact.properties["acmedl:CL_ChineseName"] = "曹红磊";
    contact.properties["acmedl:CL_JobTitle"] = "Vessel Engineer";
    contact.properties["acmedl:CL_OfficeNumber"] = "2190";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "186 0060 1465";
    contact.properties["acmedl:CL_EncryoEmail"] = "honglei.cao@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20184";
    contact.properties["acmedl:CL_EnglishName"] = "Peng Fang";
    contact.properties["acmedl:CL_ChineseName"] = "彭芳";
    contact.properties["acmedl:CL_JobTitle"] = "Assistant Process Engineer";
    contact.properties["acmedl:CL_OfficeNumber"] = "2184";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "136 6107 0603";
    contact.properties["acmedl:CL_EncryoEmail"] = "fang.peng@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20181";
    contact.properties["acmedl:CL_EnglishName"] = "Liu Shuang";
    contact.properties["acmedl:CL_ChineseName"] = "刘爽";
    contact.properties["acmedl:CL_JobTitle"] = "Project Secretary";
    contact.properties["acmedl:CL_OfficeNumber"] = "2181";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "139 1179 1461";
    contact.properties["acmedl:CL_EncryoEmail"] = "shuang.liu@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20179";
    contact.properties["acmedl:CL_EnglishName"] = "Li Weiguo";
    contact.properties["acmedl:CL_ChineseName"] = "李卫国";
    contact.properties["acmedl:CL_JobTitle"] = "Accountant";
    contact.properties["acmedl:CL_OfficeNumber"] = "2179";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "150 0119 1658";
    contact.properties["acmedl:CL_EncryoEmail"] = "weiguo.li@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20174";
    contact.properties["acmedl:CL_EnglishName"] = "Zhang Shuang";
    contact.properties["acmedl:CL_ChineseName"] = "张爽";
    contact.properties["acmedl:CL_JobTitle"] = "Admin Assistant";
    contact.properties["acmedl:CL_OfficeNumber"] = "2174";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "188 1302 5655";
    contact.properties["acmedl:CL_EncryoEmail"] = "shuang.zhang@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20172";
    contact.properties["acmedl:CL_EnglishName"] = "Wang Hao";
    contact.properties["acmedl:CL_ChineseName"] = "王浩";
    contact.properties["acmedl:CL_JobTitle"] = "Instrument and Control Engineer";
    contact.properties["acmedl:CL_OfficeNumber"] = "2172";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "185 1140 6198";
    contact.properties["acmedl:CL_EncryoEmail"] = "hao.wang@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20162";
    contact.properties["acmedl:CL_EnglishName"] = "Jessie He Jingxuan";
    contact.properties["acmedl:CL_ChineseName"] = "何婧暄";
    contact.properties["acmedl:CL_JobTitle"] = "HR/Admin/Compliance Manager";
    contact.properties["acmedl:CL_OfficeNumber"] = "2162";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "150 1025 5096";
    contact.properties["acmedl:CL_EncryoEmail"] = "jingxuan.he@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20151";
    contact.properties["acmedl:CL_EnglishName"] = "Xu Li";
    contact.properties["acmedl:CL_ChineseName"] = "徐莉";
    contact.properties["acmedl:CL_JobTitle"] = "Electrical Engineer";
    contact.properties["acmedl:CL_OfficeNumber"] = "2151";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "135 2077 0876";
    contact.properties["acmedl:CL_EncryoEmail"] = "li.xu@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20150";
    contact.properties["acmedl:CL_EnglishName"] = "Yang Kun";
    contact.properties["acmedl:CL_ChineseName"] = "杨坤";
    contact.properties["acmedl:CL_JobTitle"] = "Process Engineer";
    contact.properties["acmedl:CL_OfficeNumber"] = "2150";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "186 1221 2406";
    contact.properties["acmedl:CL_EncryoEmail"] = "Kun.Yang@Encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20149";
    contact.properties["acmedl:CL_EnglishName"] = "Yang Yang";
    contact.properties["acmedl:CL_ChineseName"] = "杨洋";
    contact.properties["acmedl:CL_JobTitle"] = "Instrument Engineer";
    contact.properties["acmedl:CL_OfficeNumber"] = "2149";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "183 1130 3008";
    contact.properties["acmedl:CL_EncryoEmail"] = "yang.yang@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20148";
    contact.properties["acmedl:CL_EnglishName"] = "Liu Jinzhu";
    contact.properties["acmedl:CL_ChineseName"] = "刘金拄";
    contact.properties["acmedl:CL_JobTitle"] = "Instrument Discipline Lead";
    contact.properties["acmedl:CL_OfficeNumber"] = "2148";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "158 1078 0380";
    contact.properties["acmedl:CL_EncryoEmail"] = "Jinzhu.Liu@Encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20147";
    contact.properties["acmedl:CL_EnglishName"] = "Guo Wei";
    contact.properties["acmedl:CL_ChineseName"] = "郭伟";
    contact.properties["acmedl:CL_JobTitle"] = "Instrument Engineer";
    contact.properties["acmedl:CL_OfficeNumber"] = "2147";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "150 1005 6365";
    contact.properties["acmedl:CL_EncryoEmail"] = "Wei.Guo@Encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20146";
    contact.properties["acmedl:CL_EnglishName"] = "Li Ning";
    contact.properties["acmedl:CL_ChineseName"] = "李宁";
    contact.properties["acmedl:CL_JobTitle"] = "Process Engineer";
    contact.properties["acmedl:CL_OfficeNumber"] = "2146";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "134 8881 2093";
    contact.properties["acmedl:CL_EncryoEmail"] = "ning.li@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20142";
    contact.properties["acmedl:CL_EnglishName"] = "Kong Deying";
    contact.properties["acmedl:CL_ChineseName"] = "孔德楹";
    contact.properties["acmedl:CL_JobTitle"] = "Project Manager";
    contact.properties["acmedl:CL_OfficeNumber"] = "2142";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "186 0033 0942";
    contact.properties["acmedl:CL_EncryoEmail"] = "Deying.Kong@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20139";
    contact.properties["acmedl:CL_EnglishName"] = "Wen Jiuhai";
    contact.properties["acmedl:CL_ChineseName"] = "温九海";
    contact.properties["acmedl:CL_JobTitle"] = "IT Engineer";
    contact.properties["acmedl:CL_OfficeNumber"] = "2139";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "151 1699 1686";
    contact.properties["acmedl:CL_EncryoEmail"] = "ithelpdesk@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20137";
    contact.properties["acmedl:CL_EnglishName"] = "Jeff Chen";
    contact.properties["acmedl:CL_ChineseName"] = "陈士煌";
    contact.properties["acmedl:CL_JobTitle"] = "Chief Operating Officer";
    contact.properties["acmedl:CL_OfficeNumber"] = "2137";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "138 1018 8956";
    contact.properties["acmedl:CL_EncryoEmail"] = "shihuang.chen@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20135";
    contact.properties["acmedl:CL_EnglishName"] = "Liu Peng";
    contact.properties["acmedl:CL_ChineseName"] = "刘鹏";
    contact.properties["acmedl:CL_JobTitle"] = "Procurement Engineer";
    contact.properties["acmedl:CL_OfficeNumber"] = "2135";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "186 1274 7273";
    contact.properties["acmedl:CL_EncryoEmail"] = "peng.liu@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20126";
    contact.properties["acmedl:CL_EnglishName"] = "Cui Jiakun";
    contact.properties["acmedl:CL_ChineseName"] = "崔稼鹍";
    contact.properties["acmedl:CL_JobTitle"] = "Assistant Instrument Engineer";
    contact.properties["acmedl:CL_OfficeNumber"] = "2126";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "134 3931 6161";
    contact.properties["acmedl:CL_EncryoEmail"] = "jiakun.cui@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20123";
    contact.properties["acmedl:CL_EnglishName"] = "Gao Yanping";
    contact.properties["acmedl:CL_ChineseName"] = "高艳平";
    contact.properties["acmedl:CL_JobTitle"] = "Finance Manager";
    contact.properties["acmedl:CL_OfficeNumber"] = "2123";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "138 1005 8595";
    contact.properties["acmedl:CL_EncryoEmail"] = "yanping.gao@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20114";
    contact.properties["acmedl:CL_EnglishName"] = "Wu Sheng";
    contact.properties["acmedl:CL_ChineseName"] = "武生";
    contact.properties["acmedl:CL_JobTitle"] = "Process Engineer";
    contact.properties["acmedl:CL_OfficeNumber"] = "2114";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "138 1181 2706";
    contact.properties["acmedl:CL_EncryoEmail"] = "sheng.wu@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20105";
    contact.properties["acmedl:CL_EnglishName"] = "Huang Xin";
    contact.properties["acmedl:CL_ChineseName"] = "黄鑫";
    contact.properties["acmedl:CL_JobTitle"] = "Piping Engineer";
    contact.properties["acmedl:CL_OfficeNumber"] = "2105";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "136 9928 4339";
    contact.properties["acmedl:CL_EncryoEmail"] = "xin.huang@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20104";
    contact.properties["acmedl:CL_EnglishName"] = "Zhu Yingke";
    contact.properties["acmedl:CL_ChineseName"] = "朱颖轲";
    contact.properties["acmedl:CL_JobTitle"] = "Manager of Engineering Section";
    contact.properties["acmedl:CL_OfficeNumber"] = "2104";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "136 1110 5258";
    contact.properties["acmedl:CL_EncryoEmail"] = "yingke.zhu@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20086";
    contact.properties["acmedl:CL_EnglishName"] = "Zhang Hongjiang";
    contact.properties["acmedl:CL_ChineseName"] = "张洪江";
    contact.properties["acmedl:CL_JobTitle"] = "Vice President";
    contact.properties["acmedl:CL_OfficeNumber"] = "2086";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "136 1131 9499";
    contact.properties["acmedl:CL_EncryoEmail"] = "hongjiang.zhang@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20082";
    contact.properties["acmedl:CL_EnglishName"] = "Qi Yana";
    contact.properties["acmedl:CL_ChineseName"] = "祁亚娜";
    contact.properties["acmedl:CL_JobTitle"] = "Vessel Engineer";
    contact.properties["acmedl:CL_OfficeNumber"] = "2082";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "134 8866 7036";
    contact.properties["acmedl:CL_EncryoEmail"] = "yana.qi@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20078";
    contact.properties["acmedl:CL_EnglishName"] = "Nancy Li";
    contact.properties["acmedl:CL_ChineseName"] = "李岩荣";
    contact.properties["acmedl:CL_JobTitle"] = "Vice President";
    contact.properties["acmedl:CL_OfficeNumber"] = "2078";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "139 1013 5830";
    contact.properties["acmedl:CL_EncryoEmail"] = "yanrong.li@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "yanrong.li@maison.cn";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20072";
    contact.properties["acmedl:CL_EnglishName"] = "Li Liang";
    contact.properties["acmedl:CL_ChineseName"] = "李亮";
    contact.properties["acmedl:CL_JobTitle"] = "Piping Engineer";
    contact.properties["acmedl:CL_OfficeNumber"] = "2072";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "158 0147 4610";
    contact.properties["acmedl:CL_EncryoEmail"] = "liang.li@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20063";
    contact.properties["acmedl:CL_EnglishName"] = "Wu Pengjian";
    contact.properties["acmedl:CL_ChineseName"] = "吴朋建";
    contact.properties["acmedl:CL_JobTitle"] = "Piping  Discipline Lead";
    contact.properties["acmedl:CL_OfficeNumber"] = "2063";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "150 1093 9346";
    contact.properties["acmedl:CL_EncryoEmail"] = "pengjian.wu@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20057";
    contact.properties["acmedl:CL_EnglishName"] = "Shang Xiaobing";
    contact.properties["acmedl:CL_ChineseName"] = "尚小兵";
    contact.properties["acmedl:CL_JobTitle"] = "Project Manager";
    contact.properties["acmedl:CL_OfficeNumber"] = "2057";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "136 5105 1302";
    contact.properties["acmedl:CL_EncryoEmail"] = "xiaobing.shang@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20056";
    contact.properties["acmedl:CL_EnglishName"] = "Xiao Jun";
    contact.properties["acmedl:CL_ChineseName"] = "肖军";
    contact.properties["acmedl:CL_JobTitle"] = "Plant Operation Manager";
    contact.properties["acmedl:CL_OfficeNumber"] = "2056";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "153 0843 5531";
    contact.properties["acmedl:CL_EncryoEmail"] = "jun.xiao@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20053";
    contact.properties["acmedl:CL_EnglishName"] = "Zhang Huijun";
    contact.properties["acmedl:CL_ChineseName"] = "张会军";
    contact.properties["acmedl:CL_JobTitle"] = "Chief Engineer";
    contact.properties["acmedl:CL_OfficeNumber"] = "2053";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "136 8359 7201";
    contact.properties["acmedl:CL_EncryoEmail"] = "huijun.zhang@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20040";
    contact.properties["acmedl:CL_EnglishName"] = "Liang Wenzhen";
    contact.properties["acmedl:CL_ChineseName"] = "梁文珍";
    contact.properties["acmedl:CL_JobTitle"] = "Process Engineer";
    contact.properties["acmedl:CL_OfficeNumber"] = "2040";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "137 1772 0640";
    contact.properties["acmedl:CL_EncryoEmail"] = "wenzhen.liang@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "wenzhen.liang@maison.cn";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20039";
    contact.properties["acmedl:CL_EnglishName"] = "Xu Jie";
    contact.properties["acmedl:CL_ChineseName"] = "许杰";
    contact.properties["acmedl:CL_JobTitle"] = "Plant Operation Manager";
    contact.properties["acmedl:CL_OfficeNumber"] = "2039";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "136 9103 1405";
    contact.properties["acmedl:CL_EncryoEmail"] = "jie.xu@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "N/A";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20003";
    contact.properties["acmedl:CL_EnglishName"] = "Hu Jing";
    contact.properties["acmedl:CL_ChineseName"] = "胡晶";
    contact.properties["acmedl:CL_JobTitle"] = "Process Engineer";
    contact.properties["acmedl:CL_OfficeNumber"] = "2003";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "155 1019 9663";
    contact.properties["acmedl:CL_EncryoEmail"] = "jing.hu@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "jing.hu@maison.cn";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20002";
    contact.properties["acmedl:CL_EnglishName"] = "Zhang Yan";
    contact.properties["acmedl:CL_ChineseName"] = "张艳";
    contact.properties["acmedl:CL_JobTitle"] = "QA/QC";
    contact.properties["acmedl:CL_OfficeNumber"] = "2002";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "138 1158 5077";
    contact.properties["acmedl:CL_EncryoEmail"] = "yan1.zhang@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "yan.zhang@maison.cn";
    contact.save();

    var contact = contactList.createNode(null, contactListItemType);
    contact.properties["acmedl:CL_EmployeeNo"] = "20001";
    contact.properties["acmedl:CL_EnglishName"] = "Wang Yingjun";
    contact.properties["acmedl:CL_ChineseName"] = "王英军";
    contact.properties["acmedl:CL_JobTitle"] = "President";
    contact.properties["acmedl:CL_OfficeNumber"] = "2001";
    contact.properties["acmedl:CL_SiteNo"] = "";
    contact.properties["acmedl:CL_MobilePhone"] = "136 0113 1678";
    contact.properties["acmedl:CL_EncryoEmail"] = "yingjun.wang@encryo.com";
    contact.properties["acmedl:CL_MaisonEmail"] = "yingjun.wang@maison.cn";
    contact.save();


}