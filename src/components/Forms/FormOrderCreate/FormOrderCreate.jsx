import FormPrimary from '../FormPrimary/FormPrimary';
import Fieldset from '../Fieldset/Fieldset';
// import PrimaryInput from '../Inputs/PrimaryInput/PrimaryInput';
import { toast } from 'react-toastify';
import { useModal } from 'components/ModalCustom/ModalCustom';

// import s from './FormOrderCreate.module.scss';

const FormOrderCreate = () => {
  const { handleToggle } = useModal();

  function onSubmit(ev) {
    ev.preventDefault();

    const payload = {
      submitData: {},
      onSuccess: () => {
        toast.success(`Замовлення створено успішно`);
      },
      onError: () => {
        toast.error(`Помилка при створення замовлення`);
      },
    };

    payload.onSuccess();
  }
  function onReset() {}
  function onCancel() {
    handleToggle();
  }
  const formSettings = {
    onSubmit,
    onReset,
    onCancel,
    blockSettings: {
      title: 'Створити замовлення',
      iconId: 'plus',
    },
  };
  return (
    <FormPrimary {...formSettings}>
      <Fieldset legend="Загальна інформація"></Fieldset>

      <Fieldset legend="Інформація про замовника"></Fieldset>

      <Fieldset legend="Інформація про оплату"></Fieldset>

      <Fieldset legend="Інформація про відвантаження"></Fieldset>

      <Fieldset legend="Вміст замовлення"></Fieldset>
    </FormPrimary>
  );
};

export default FormOrderCreate;
