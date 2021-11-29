import React from 'react';

/**
 * Este componente será implementado no futuro
 */
function DataList(props) {
  return(
    <div class="col-md-10">
        <input 
          class="form-control"
          list="datalistOptions"
          placeholder="Pesquisar pokemon"
        />
        <datalist id="datalistOptions">
          <option value={props.name} />
        </datalist>
    </div>
  )
}

export default DataList;