import PrimaryInput from '../Inputs/PrimaryInput/PrimaryInput';
import { useForm } from '../FormPrimary/FormPrimary';

const CustomerInfo = () => {
  const { stateMap, stateHandlers } = useForm();
  function onChange(ev) {
    stateHandlers?.onChangeCustomerInfo(ev);
  }
  const personInputs = [
    { name: '_id', label: 'ID', id: '1', onChange: onChange },
    { name: 'name', label: 'Ініціали', id: '2', onChange: onChange },
    { name: 'phone', label: 'Телефон', id: '3', onChange: onChange },
  ];

  return (
    <>
      {personInputs.map(input => (
        <PrimaryInput key={input.id} value={stateMap?.customer[input.name]} {...input} />
      ))}
    </>
  );
};

export default CustomerInfo;
