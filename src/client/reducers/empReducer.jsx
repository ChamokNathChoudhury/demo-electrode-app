export default (store = { records: [],}, action) => {
  switch (action.type) {
    case "SAVE_NAME":
    console.log('save name called ...', store, '--', action);
      store = {
        ...store,
        name: action.value || ''
      };
      console.log('save name called ... after store ', store);
      break;
    case "SAVE_ADDRESS":
      store = {
        ...store,
        address: action.value || ''
      };
      break;
    case "SAVE_PHONE":
      store = {
        ...store,
        phone: action.value || ''
      };
      break;
    case "SAVE_RECORD":
    console.log('save called ...', store);
      store = {
        records: [...store.records, {name: store.name, address: store.address, phone: store.phone}],
        name: '',
        address: '',
        phone: ''
      };
      break;
  }
  return store;
};