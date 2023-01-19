import PrimaryInput from '../Inputs/PrimaryInput/PrimaryInput';
import { useForm } from '../FormPrimary/FormPrimary';

const PaymentInfo = ({ onFormChange }) => {
  const { stateMap, stateHandlers } = useForm();
  function onChange(ev) {
    stateHandlers?.onChangePaymentInfo(ev);
  }

  const personInputs = [
    { name: 'type', label: 'Тип оплати', id: '1', onChange },
    // { name: 'blockedFunds', label: 'Заблоковані кошти', id: '2', onChange },
    { name: 'invoiceId', label: 'Інвойс для списання коштів (ID)', id: '3', onChange },
    { name: 'holdingInvoiceId', label: 'Інвойс для блокування коштів (ID)', id: '4', onChange },
  ];

  return (
    <>
      {personInputs.map(input => (
        <PrimaryInput key={input.id} value={stateMap?.payment[input.name]} {...input} />
      ))}
    </>
  );
};

export default PaymentInfo;
