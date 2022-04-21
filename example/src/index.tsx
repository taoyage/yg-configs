import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import * as antd from 'antd';
import lodash from 'lodash';
import moment from 'moment';

// 测试用，加大包体积
console.log(antd);
console.log(lodash);
console.log(moment);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
