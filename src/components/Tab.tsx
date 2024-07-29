import React from 'react';
import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import Complete from './Projects/Complete';
import Working from './Projects/Working';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: <span className="text-white ms-4 font-semibold">ALL</span>, 
    children: <Complete/>,
  },
  {
    key: '2',
    label:    <span className="relative flex">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-40"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-900"></span>
    <span className='text-white font-semibold'>WORKING...</span>  
  </span>,
    children: <Working/>
  },
 
];

const Tab: React.FC = () => <Tabs defaultActiveKey="1" animated={true} items={items} onChange={onChange} className='text-white'/>;

export default Tab;