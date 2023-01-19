import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import ModalContent from 'components/ModalCustom/ModalContent/ModalContent';

// import s from './FormOrderCreate.module.scss';

const OrderContent = () => {
  return (
    <>
      <div>
        <div></div>
      </div>

      <ModalContent
        trigger={props => (
          <ButtonIcon styleType="ColoredBtn" {...props}>
            Додати товар
          </ButtonIcon>
        )}
      ></ModalContent>
    </>
  );
};

export default OrderContent;
