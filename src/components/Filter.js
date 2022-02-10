import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../redux/contacts/contacts-selectors';
import contactsAction from '../redux/contacts/contacts-actions';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label>
      Filter
      <input
        type="text"
        value={value}
        onChange={e =>
          dispatch(contactsAction.changeFilter(e.currentTarget.value))
        }
      ></input>
    </label>
  );
};

export default Filter;
