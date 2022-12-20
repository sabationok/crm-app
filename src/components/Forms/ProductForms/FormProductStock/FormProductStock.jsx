import React from 'react';

import TableDinamic from 'components/TableDinamic/TableDinamic';
import FormPrimary from 'components/Forms/FormPrimary/FormPrimary';

const FormProductStock = () => {
  return (
    <FormPrimary formTitle="Управління складськими залишками">
      <div style={{ overflow: 'auto', width: '100%' }}>
        <TableDinamic editable />
      </div>
    </FormPrimary>
  );
};

export default FormProductStock;
