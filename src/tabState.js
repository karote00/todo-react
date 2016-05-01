import { createStore } from 'redux';

function tabActive(state = 0, action) {
  if (state == undefined) return 'All';
  // if (action.type) return action.type;
  // else return 'All';
  switch (action.type) {
	case 'All':
	  return 'All';
	case 'Starred':
	  return 'Starred';
	case 'Active':
	  return 'Active';
	case 'Complete':
	  return 'Complete';
	default:
	  return 'All';
  }
}

var tabsStore = createStore(tabActive);

export { tabsStore };