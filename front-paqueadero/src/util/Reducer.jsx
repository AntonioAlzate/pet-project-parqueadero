function Reducer(state, action) {
  switch (action.type) {
    // Vehículos
    case "add-car":
      const carUp = state.vehiculo.list;
      carUp.push(action.item);
      return { ...state, vehiculo: { list: carUp, item: {} } };

    case "delete-car":
      const carUpDelete = state.vehiculo;
      const listCar = carUpDelete.list.filter((item) => {
        return item.idVehiculo !== action.id;
      });
      carUpDelete.list = listCar;
      return { ...state, vehiculo: carUpDelete };

    case "update-list-car":
      const listCarUpdate = state.vehiculo;
      listCarUpdate.list = action.list;
      return { ...state, vehiculo: listCarUpdate };

    case "update-car":
      const carUpItem = state.vehiculo;
      const listUpdateEditCar = carUpItem.list.map((item) => {
        if (item.idVehiculo === action.item.id) {
          return action.item;
        }
        return item;
      });
      carUpItem.list = listUpdateEditCar;
      carUpItem.item = {};
      return { ...state, vehiculo: carUpItem };
    case "car-selected":
      const cardUpdate = state.vehiculoEditar;
      cardUpdate.item = action.item;
      cardUpdate.list = state.list;
      return {...state, vehiculoEditar: cardUpdate}

    // Tarifas
    case "update-tarifa":
      const tarifaUpItem = state.tarifa;
      const listUpdateEdit = tarifaUpItem.list.map((item) => {
        if (item.id === action.item.id) {
          return action.item;
        }
        return item;
      });
      tarifaUpItem.list = listUpdateEdit;
      tarifaUpItem.item = {};
      return { ...state, tarifa: tarifaUpItem };
    case "delete-tarifa":
      const tarifaUpDelete = state.tarifa;
      const listUpdate = tarifaUpDelete.list.filter((item) => {
        return item.idTarifa !== action.id;
      });
      tarifaUpDelete.list = listUpdate;
      return { ...state, tarifa: tarifaUpDelete };
    case "update-list-tarifa":
      const tarifaUpList = state.tarifa;
      tarifaUpList.list = action.list;
      return { ...state, todo: tarifaUpList };
    case "edit-tarifa":
      const tarifaUpEdit = state.tarifa;
      tarifaUpEdit.item = action.item;
      return { ...state, tarifa: tarifaUpEdit };
    case "add-tarifa":
      const tarifaUp = state.todo.list;
      tarifaUp.push(action.item);
      return { ...state, tarifa: { list: tarifaUp, item: {} } };

    case "tarifa-selected":
      console.log("entre")
      const tarifaUpdate = state.tarifa;
      tarifaUpdate.item = action.item;
      tarifaUpdate.list = state.list;
      return {...state, tarifa: tarifaUpdate}
    default:
      return state;

    // Movimientos
  }
}

export default Reducer;
