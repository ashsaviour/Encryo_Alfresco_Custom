widgetUtils.deleteObjectFromArray(model.jsonModel, "id", "HEADER_MY_FILES");
widgetUtils.deleteObjectFromArray(model.jsonModel, "id", "HEADER_TASKS");
if (!user.isAdmin)
{
    widgetUtils.deleteObjectFromArray(model.jsonModel, "id", "HEADER_REPOSITORY");
}
var HomeMenu = widgetUtils.findObject(model.jsonModel, "id", "HEADER_HOME");
if (HomeMenu != null)
{
    HomeMenu.config.targetUrl = "http://cnmecwss01v/sites/maison/exquiso/index_alfresco.html";
    HomeMenu.config.targetUrlType = "FULL_PATH";
}
var SitesMenu = widgetUtils.findObject(model.jsonModel, "id", "HEADER_SITES_MENU");
if (SitesMenu!=null)
{
    SitesMenu.config.label = "Projects";
    SitesMenu.config.description = "Projects desc";
}
widgetUtils.deleteObjectFromArray(model.jsonModel, "id", "HEADER_USER_MENU_HOME_PAGE_GROUP");