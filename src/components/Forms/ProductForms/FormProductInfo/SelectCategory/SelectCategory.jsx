import React from 'react';
import PrimaryInput from 'components/Forms/Inputs/InputPrimary/PrimaryInput';
import Fieldset from 'components/Forms/Fieldset/Fieldset';
import { useForm } from 'components/Forms/FormPrimary/FormPrimary';
import ModalOpenButton from 'components/ModalCustom/ModalOpenButton/ModalOpenButton';
import SectionsList from './SectionsList/SectionsList';
// import { applyFounder } from 'components/Block/BlockUtils/founder';
// import { categoriesArr } from './categpriesArr';
// import s from './SelectCategory.module.scss';
// import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
const seletsArr = [
  { label: 'Секція', name: 'section' }, // * sectionId: ''
  { label: 'Категорія', name: 'parentCategory' }, // * parentCategoryId: ''
  { label: 'Підкатегорія', name: 'category' }, // * categoryId: ''
];

// const initialState = {
//   sectionId: '',
//   section: '',
//   parentCategoryId: '',
//   parentCategory: '',
//   categoryId: '',
//   category: '',
// };
const SelectCategory = () => {
  // const [section, setSection] = useState({ name: '' });
  // const [parentCategory, setParentCategory] = useState({ name: '' });
  // const [category, setCategory] = useState(initialState);
  // const [selectItem, setSelectItem] = useState(initialState);
  const { formData } = useForm();

  // const dispatch = useDispatch();

  return (
    <>
      <Fieldset legend="Оберіть категорію">
        {seletsArr.map(input => (
          <PrimaryInput key={input.name} {...input} defaultValue={formData[input.name]} disabled />
        ))}
        <ModalOpenButton modalChildren={<SectionsList />}>Оберіть категорію</ModalOpenButton>
      </Fieldset>
    </>
  );
};

export default SelectCategory;
