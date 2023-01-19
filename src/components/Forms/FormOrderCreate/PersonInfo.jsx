import PrimaryInput from '../Inputs/PrimaryInput/PrimaryInput';

const PersonInfo = () => {
  function onChange(ev) {}

  const personInputs = [
    { name: '_id', label: 'ID', id: '1', onChange: onChange },
    { name: 'name', label: 'Ініціали', id: '2', onChange: onChange },
    { name: 'phone', label: 'Телефон', id: '3', onChange: onChange },
  ];

  return (
    <>
      {personInputs.map(input => (
        <PrimaryInput key={input.id} {...input} />
      ))}
    </>
  );
};

export default PersonInfo;
