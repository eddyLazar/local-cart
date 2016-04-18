import Basil from 'basil.js'

export default function (cartInstance) {
  let basilInstance = new Basil();
  
  return {
    updateStorage(name, items) {
      basilInstance.set(name, items);
    },
    getItemsFromStorage(name){
      return basilInstance.get(name);
    }
  }
}