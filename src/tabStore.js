import { createStore } from 'redux';

var allList = [],
    starredList = [],
    completeList = [];

function tabActive(state = 0, action) {
    switch (action.type) {
        case 'Get':
            break;
        case 'Add':
            allList.push(action.item);
            break;
        case 'Complete':
        	var idx = completeList.indexOf(action.item);
        	if (action.item.complete) {
        		if (idx == -1) {
        			completeList.unshift(action.item);
        		}
        	} else {
        		if (idx > -1) {
        			completeList.splice(idx, 1);
        		}
        	}
        	break;
        case 'Starred':
        	var idx = starredList.indexOf(action.item);
        	if (action.item.starred) {
        		if (idx == -1) {
        			starredList.unshift(action.item);
        		}
        	} else {
        		if (idx > -1) {
        			starredList.splice(idx, 1);
        		}
        	}
        	break;
        case 'Delete':
			var idxA = allList.indexOf(action.item);
			var idxC = completeList.indexOf(action.item);
			var idxS = starredList.indexOf(action.item);
			if (idxA > -1) allList.splice(idxA, 1);
			if (idxC > -1) completeList.splice(idxC, 1);
			if (idxS > -1) starredList.splice(idxS, 1);
        	break;
    }

    return getList(action);
}

function getList(action) {
	var list = [];
	switch (action.path) {
        case 'All':
            list = allList;
            break;
        case 'Starred':
            list = starredList;
            break;
        case 'Active':
        	for (var i = 0; i < allList.length; i++) {
        		if (!allList[i].complete && !allList[i].starred) {
        			list.push(allList[i]);
        		}
        	}
            break;
        case 'Complete':
            list = completeList;
            break;
        default:
            list = allList;
    }
    return list;
}

var tabStore = createStore(tabActive);

export { tabStore };
