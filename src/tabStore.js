import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

const logger = createLogger();

var allList = [],
    starredList = [],
    completeList = [];

function tabActive(state, action) {
	const storedState = JSON.parse(
		localStorage.getItem('ALL_LIST')
	);

	if (typeof state == 'undefined') {
		allList = storedState[0];
		completeList = storedState[1];
		starredList = storedState[2];
	}

    switch (action.type) {
        case 'Get':
            break;
        case 'Add':
            allList.push(action.item);
            break;
        case 'Complete':
        	var idx = getListIdx(completeList, action.item);
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
        	var idx = getListIdx(starredList, action.item);
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
			var idxA = getListIdx(allList, action.item);
			var idxC = getListIdx(completeList, action.item);
			var idxS = getListIdx(starredList, action.item);
			if (idxA > -1) allList.splice(idxA, 1);
			if (idxC > -1) completeList.splice(idxC, 1);
			if (idxS > -1) starredList.splice(idxS, 1);
        	break;
    }

	localStorage.setItem('ALL_LIST', JSON.stringify([allList, completeList, starredList]));

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

function getListIdx(list, item) {
	for (var i = 0; i < list.length; i++) {
		if (item.id == list[i].id) return i;
	}
	return -1;
}

const tabStore = createStore(
  tabActive,
  applyMiddleware(thunk, promise, logger)
);

export { tabStore };
