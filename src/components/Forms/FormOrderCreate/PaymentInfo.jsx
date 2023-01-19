import PrimaryInput from '../Inputs/PrimaryInput/PrimaryInput';
import { useForm } from '../FormPrimary/FormPrimary';

const PaymentInfo = ({ onFormChange }) => {
  const { formData = {} } = useForm();
  function onChange(ev) {
    console.log(ev.target.value);
  }

  const personInputs = [
    { name: 'type', label: 'Тип оплати', id: '1', onChange: onChange },
    { name: 'blockedFunds', label: 'Заблоковані кошти', id: '2', onChange: onChange },
    // { name: '', label: '', value: '', id: '3', onChange: onChange },
  ];

  return (
    <>
      {personInputs.map(input => (
        <PrimaryInput key={input.id} value={formData[input?.name]} {...input} />
      ))}
    </>
  );
};

export default PaymentInfo;
