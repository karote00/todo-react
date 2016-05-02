import { createStore } from 'redux';

var allList = [],
    starredList = [],
    activeList = [],
    completeList = [];

function tabActive(state = 0, action) {
    var list = [];

    switch (action.type) {
        case 'Get':
            list = getList(action);
            break;
        case 'Add':
            allList.push(action.item);
            list = getList(action);
            break;
    }

    return list;
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
            list = activeList;
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
