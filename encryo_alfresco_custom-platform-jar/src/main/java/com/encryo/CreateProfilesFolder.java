package com.encryo;

import org.alfresco.model.ContentModel;
import org.alfresco.query.PagingRequest;
import org.alfresco.query.PagingResults;
import org.alfresco.repo.content.MimetypeMap;
import org.alfresco.repo.nodelocator.CompanyHomeNodeLocator;
import org.alfresco.repo.site.SiteModel;
import org.alfresco.service.ServiceRegistry;
import org.alfresco.service.cmr.model.FileExistsException;
import org.alfresco.service.cmr.model.FileInfo;
import org.alfresco.service.cmr.model.FileNotFoundException;
import org.alfresco.service.cmr.repository.ContentWriter;
import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.service.cmr.repository.NodeService;
import org.alfresco.service.cmr.repository.StoreRef;
import org.alfresco.service.cmr.search.ResultSet;
import org.alfresco.service.cmr.search.SearchService;
import org.alfresco.service.cmr.security.PersonService;
import org.alfresco.service.cmr.security.PersonService.PersonInfo;
import org.alfresco.service.namespace.QName;
import org.alfresco.util.Pair;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.extensions.webscripts.Cache;
import org.springframework.extensions.webscripts.DeclarativeWebScript;
import org.springframework.extensions.webscripts.Status;
import org.springframework.extensions.webscripts.WebScriptRequest;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

/**
 * A Web Script that uses the FileFolderService to create a folder and a file.
 *
 * @author martin.bergljung@alfresco.com
 */
public class CreateProfilesFolder extends DeclarativeWebScript {
	private static Log logger = LogFactory.getLog(CreateProfilesFolder.class);

	/**
	 * The Alfresco Service Registry that gives access to all public content
	 * services in Alfresco.
	 */
	private ServiceRegistry serviceRegistry;

	public void setServiceRegistry(ServiceRegistry serviceRegistry) {
		this.serviceRegistry = serviceRegistry;
	}

	protected Map<String, Object> executeImpl(WebScriptRequest req, Status status, Cache cache) {
		Map<String, Object> model = new HashMap<String, Object>();

		String message = "Your 'FileFolderServiceTestWebScript' Web Script was called <br> ";

//        FileInfo newFolderInfo = null;
//        try {
//            newFolderInfo = createFolder("Some Folder");
//            message += "and a folder was created: " + newFolderInfo;
//        } catch (FileExistsException fee) {
//            message += "and there was a problem creating a folder: " + fee.getMessage();
//        }
//
//        if (newFolderInfo != null) {
//            FileInfo newFileInfo = null;
//            try {
//                newFileInfo = createFile(newFolderInfo,"some.txt", "Some text content...");
//                message += ", a text file was then created in this folder: " + newFileInfo;
//            } catch (FileExistsException fee) {
//                message += ", there was a problem creating a file in the new folder: " + fee.getMessage();
//            }
//        }
//
//        logger.info(message);
		NodeRef siteLibraryNode = getNode("/app:company_home/st:sites/cm:hr-admin/cm:documentLibrary");
		if (siteLibraryNode != null) {
			NodeRef profilesNode = getNode("/app:company_home/st:sites/cm:hr-admin/cm:documentLibrary/cm:Profiles");
			if (profilesNode == null) {
				FileInfo profilesFolderInfo = createFolder("Profiles", siteLibraryNode);
				profilesNode = profilesFolderInfo.getNodeRef();
			}
			PagingResults<PersonService.PersonInfo> people = getPeople();

			List<String> ignoreUsersList = getIgnoreUsersList();

			for (PersonInfo person : people.getPage()) {
//            if (person.getUserName().equals(userName))
//            {
//                found = true;
//                break;
//            }
				String uname = person.getUserName();
				if (!ignoreUsersList.contains(uname)) {
					FileInfo newFolderInfo = null;

					try {
						newFolderInfo = createFolder(uname, profilesNode);
						serviceRegistry.getPermissionService().setInheritParentPermissions(newFolderInfo.getNodeRef(),
								false);
						serviceRegistry.getPermissionService().setPermission(newFolderInfo.getNodeRef(), uname,
								SiteModel.SITE_MANAGER, true);
						message += uname + "'s folder was created: " + newFolderInfo.getName() + " <br> ";
					} catch (FileExistsException fee) {
						message += uname + "'s folder was existed <br> ";
					}
				}
			}
		}

		model.put("message", message);

		return model;
	}

	/**
	 * Create a folder under the /Company Home folder.
	 *
	 * @param folderName the name of the folder
	 * @return a FileInfo object with data about the new folder, such as NodeRef
	 */
	private FileInfo createFolder(String folderName, NodeRef parentFolderNodeRef) throws FileExistsException {

		// Get a NodeRef for /Company Home folder
//        NodeRef parentFolderNodeRef = serviceRegistry.getNodeLocatorService().getNode(
//                CompanyHomeNodeLocator.NAME, null, null);

		// Create the folder under /Company Home
		FileInfo folderInfo = serviceRegistry.getFileFolderService().create(parentFolderNodeRef, folderName,
				ContentModel.TYPE_FOLDER);

		return folderInfo;
	}

	/**
	 * Create a file under the passed in folder.
	 *
	 * @param folderInfo the folder that the file should be created in
	 * @param filename   the name of the file
	 * @param fileTxt    the content of the file
	 * @return a FileInfo object with data about the new file, such as NodeRef
	 */
	private FileInfo createFile(FileInfo folderInfo, String filename, String fileTxt) throws FileExistsException {

		// Create the file under passed in folder, the file will be empty to start with
		FileInfo fileInfo = serviceRegistry.getFileFolderService().create(folderInfo.getNodeRef(), filename,
				ContentModel.TYPE_CONTENT);

		// Get the NodeRef for the new file from the FileInfo object
		NodeRef newFileNodeRef = fileInfo.getNodeRef();

		// Add some content to the file
		ContentWriter writer = serviceRegistry.getFileFolderService().getWriter(newFileNodeRef);
		writer.setMimetype(MimetypeMap.MIMETYPE_TEXT_PLAIN);
		writer.setEncoding("UTF-8");
		writer.putContent(fileTxt);

		return fileInfo;
	}

	private int countPeople() {
		int count = serviceRegistry.getPersonService().countPeople();
		return count;
	}

	private PagingResults<PersonService.PersonInfo> getPeople() {
		PagingRequest pagingRequest = new PagingRequest(0, 20000, null);

		PagingResults<PersonService.PersonInfo> people = serviceRegistry.getPersonService().getPeople(null, null, null,
				pagingRequest);
//        boolean found = false;
//        for (PersonInfo person : people.getPage())
//        {
//            if (person.getUserName().equals(userName))
//            {
//                found = true;
//                break;
//            }
//        }

		return people;
	}

	/**
	 * Get a NodeRef by its path.
	 * 
	 * @path as displayed by the Node Browser.
	 * @return the NodeRef, or null if no NodeRef matches this path.
	 */
	private NodeRef getNode(String path) {
		logger.debug("Getting NodeRef for path:\"" + path + "\"");
		ResultSet results = null;
		try {
			StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
			results = serviceRegistry.getSearchService().query(storeRef, SearchService.LANGUAGE_LUCENE,
					"PATH:\"" + path + "\"");
			if (results.length() == 0) {
				logger.debug("Zero matches for path: " + path);
				return null;
			}
			NodeRef nodeRef = results.getNodeRef(0);
			logger.debug("NodeRef for \"" + path + "\" is " + nodeRef);
			return nodeRef;
		} catch (Exception e) {
			logger.debug("Exception while searching for path: " + path, e);
			if (results != null) {
				results.close();
			}
			return null; // The node does not exist
		} finally {
			if (results != null) {
				results.close();
			}
		}
	}
//
//    private SearchService searchService; // Be sure to set this, probably via Spring.

	/**
	 * @param path Syntax example of expected path: /Company Home/Shared/My
	 *             Folder/123.txt
	 * @return
	 */
//	public NodeRef getNode(String path) {
//
//		// Get company home NodeRef. No race condition because it is always exists.
//		NodeRef companyHomeNode = serviceRegistry.getNodeService()
//				.getRootNode(StoreRef.STORE_REF_WORKSPACE_SPACESSTORE);
////      NodeRef companyHomeNode = serviceRegistry.getNodeLocatorService().getNode(
////      CompanyHomeNodeLocator.NAME, null, null);
////		createFolder("wtf folder", companyHomeNode);
//
//		// Get NodeRef for the path using path elements and resolveNamePath.
//		List<String> pathElements = new LinkedList<>(Arrays.asList(path.split("/")));
//		pathElements.remove(0); // Remove leading empty element before first slash
//		pathElements.remove(0); // Remove Company Home element
//		try {
//			FileInfo fileInfo = serviceRegistry.getFileFolderService().resolveNamePath(companyHomeNode, pathElements);
//			return fileInfo.getNodeRef();
//		} catch (FileNotFoundException e) {
//			return null; // No node with such a path.
//		}
//	}
	private List<String> getIgnoreUsersList() {
		List<String> ignoreList = new ArrayList<String>();
		ignoreList.add("_jiakun.cui");
		ignoreList.add("admin");
		ignoreList.add("abeecher");
		ignoreList.add("GE-Encryo");
		ignoreList.add("guest");
		ignoreList.add("kang.li");
		ignoreList.add("mjackson");
		ignoreList.add("enCryo_DCC1");
		ignoreList.add("sp3d");
		ignoreList.add("cstest");
		ignoreList.add("user");
		ignoreList.add("user2");
		ignoreList.add("Patrick.Zeiter");

		return ignoreList;
	}
}
