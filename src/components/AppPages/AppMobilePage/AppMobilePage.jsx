import React from 'react';
import { MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';

const AppMobilePage = ({ children }) => {
  return (
    <MaxToTablet>
      <div>
        {children}
        <span>Mobile page main</span>
      </div>
    </MaxToTablet>
  );
};

export default AppMobilePage;
