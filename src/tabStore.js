import { createStore } from 'redux';

var allList = [],
	starredList = [],
	activeList = [],
	completeList = [];


function tabActive(state = 0, action) {
  var list = [];
  switch (action.type) {
	case 'All':
	  list = allList;
	case 'Starred':
	  list = starredList;
	case 'Active':
	  list = activeList;
	case 'Complete':
	  list = completeList;
	default:
	  list = allList;
  }

  return list;
}

var tabStore = createStore(tabActive);

export { tabStore };