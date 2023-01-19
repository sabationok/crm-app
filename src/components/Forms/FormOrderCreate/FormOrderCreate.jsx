import { useState } from 'react';
import OrderContent from './OrderContent';
import FormPrimary from '../FormPrimary/FormPrimary';
import Fieldset from '../Fieldset/Fieldset';
import CustomerInfo from './CustomerInfo';
import PaymentInfo from './PaymentInfo';
import ShipmentInfo from './ShipmentInfo';
import ReceiverInfo from './ReceiverInfo';
import { toast } from 'react-toastify';
import { useModal } from 'components/ModalCustom/ModalCustom';

import s from './FormOrderCreate.module.scss';
const personInitialState = {
  _id: '',
  name: '',
  phone: '',
};
const shipmentInitialState = { type: '', destination: '', description: '' };
const paymentInitialState = { type: '', blockedFunds: '', invoiceId: '', holdingInvoiceId: '' };
const FormOrderCreate = () => {
  const { handleToggle } = useModal();
  const [orderContent, setOrderContent] = useState([]);
  const [paymentInfo, setPaymentInfo] = useState({
    type: 'IBAN',
    blockedFunds: '',
    invoiceId: 'sd3tgh1d3fg13dnf2g1n',
    holdingInvoiceId: 'dsfb5s1d36f2b13x51f3',
  });
  const [customerInfo, setCustomerInfo] = useState({ _id: '56516513sa21g3213sd', name: 'Оленка Лопата Петрушевич', phone: '+380671234598' });
  const [receiverInfo, setReceiverInfo] = useState(personInitialState);
  const [shipmentInfo, setShipmentInfo] = useState({
    type: 'selfPickUp',
    destination: 'ЛЬвів, місто мрії',
    description: 'Коментар до замовлення, для найкращого персоналу',
  });

  function onSubmit(ev) {
    ev.preventDefault();

    const payload = {
      submitData: {
        orderContent,
        paymentInfo,
        customerInfo,
        receiverInfo,
        shipmentInfo,
      },
      onSuccess: () => {
        toast.success(`Замовлення створено успішно`);
      },
      onError: () => {
        toast.error(`Помилка при створення замовлення`);
      },
    };

    console.log(payload.submitData);
    payload.onSuccess();
  }
  function onReset() {
    setOrderContent([]);
    setPaymentInfo(paymentInitialState);
    setCustomerInfo(personInitialState);
    setReceiverInfo(personInitialState);
    setShipmentInfo(shipmentInitialState);
  }
  function onCancel() {
    handleToggle();
  }

  function onAddOrderItem(ev, data) {
    const newArr = orderContent.push(data);
    setOrderContent(newArr);
  }
  function onRemoveOrderItem(ev, id) {}
  function onChangePaymentInfo(ev) {
    const { name, value } = ev.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  }
  function onChangeShipmentInfo(ev) {
    const { name, value } = ev.target;
    setShipmentInfo({ ...shipmentInfo, [name]: value });
  }
  function onChangeCustomerInfo(ev) {
    const { name, value } = ev.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  }
  function onChangeReceiverInfo(ev) {
    const { name, value } = ev.target;
    setReceiverInfo({ ...receiverInfo, [name]: value });
  }
  function setCustomerAsReceiver(checked) {
    if (!checked) {
      setReceiverInfo(personInitialState);
      return;
    }
    setReceiverInfo(customerInfo);
  }

  const stateMap = {
    content: orderContent,
    payment: paymentInfo,
    customer: customerInfo,
    receiver: receiverInfo,
    shipment: shipmentInfo,
  };
  const stateHandlers = {
    onAddOrderItem,
    onRemoveOrderItem,
    onChangeCustomerInfo,
    setCustomerAsReceiver,
    onChangeReceiverInfo,
    onChangePaymentInfo,
    onChangeShipmentInfo,
  };
  const formSettings = {
    onSubmit,
    onReset,
    onCancel,
    stateHandlers,
    stateMap,
    className: s.form,
    blockSettings: {
      title: 'Створити замовлення',
      iconId: 'plus',
    },
  };
  return (
    <FormPrimary {...formSettings}>
      <Fieldset legend="Вміст замовлення">
        <OrderContent />
      </Fieldset>

      <Fieldset legend="Замовник">
        <CustomerInfo />
      </Fieldset>

      <Fieldset legend="Отримувач">
        <ReceiverInfo />
      </Fieldset>

      <Fieldset legend="Оплата">
        <PaymentInfo />
      </Fieldset>

      <Fieldset legend="Відвантаження">
        <ShipmentInfo />
      </Fieldset>
    </FormPrimary>
  );
};

export default FormOrderCreate;
