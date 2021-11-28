import React from 'react';

function Input(props) {
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

export default Input;