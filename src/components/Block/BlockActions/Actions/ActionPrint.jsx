import React from 'react';
import ActionPrimary from './ActionPrimary';
// import TableList from 'components/TableList/TableList';
// import { useRef } from 'react';
// import ModalContent from 'components/ModalCustom/ModalContent/ModalContent';
// import BlockSimple from 'components/BlockSimple/BlockSimple';
// import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { useBlock } from 'components/Block/BlockContext';
import { toast } from 'react-toastify';
import { useReactToPrint } from 'react-to-print';

const ActionPrint = ({ action }) => {
  const block = useBlock();
  // const printModalRef = useRef();

  const print = useReactToPrint({
    content: () => block.printRef.current,
    documentTitle: block?.printDocTitle || 'Це для друку',
  });

  // const printFromModal = useReactToPrint({
  //   content: () => printModalRef.current,
  //   documentTitle: block?.printDocTitle || 'Це для друку',
  // });

  function handlePrintAction() {
    console.log('print action', block);
    if (block?.printRef?.current) {
      print();
      return;
    }
    toast.error('Відсутній елемент для друку');
  }

  return (
    <>
      <ActionPrimary {...action} status={!!block.printRef.current} onClick={handlePrintAction} />

      {/* <ModalContent trigger={props => <ActionPrimary {...action} status={true} {...props} />}>
        <BlockSimple
          style={{ width: '400px', height: '400px' }}
          footerChildren={<ButtonIcon iconId="print" style={{ width: '100%' }} onClick={handlePrintFromModalAction} />}
        >
          <div ref={printModalRef}>Друк</div>
        </BlockSimple>
      </ModalContent> */}
    </>
  );
};

export default ActionPrint;
