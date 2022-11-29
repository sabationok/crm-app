import PropTypes from 'prop-types';
import AppGridPage from '../AppGridPage/AppGridPage';
import Block from 'components/Block/Block';
import FormPrimary from 'components/Forms/FormPrimary/FormPrimary';

// import s from './PageReturns.module.scss';

const PageReturns = () => {
  return (
    <>
      <AppGridPage
        pageGrid_5_5
        bigerSideLeft
        elementTop={<Block title="Список повернень" iconId="list" actions="withFilter" filter />}
        elementBottomLeft={
          <Block title="Деталі" iconId="return" actions="primary">
            <FormPrimary formTitle="Деталі повернення" />
          </Block>
        }
        elementBottomRight={
          <Block title="Інспекція" iconId="inspect" actions="primary">
            <FormPrimary formTitle="Інспекція повернення" />
          </Block>
        }
      />
    </>
  );
};

PageReturns.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageReturns;
