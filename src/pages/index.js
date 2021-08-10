import { Breadcrumb } from 'antd';

export default function Home() {
  return (
    <div className='flex items-center justify-center flex-1 w-full min-h-screen px-20 text-center'>
      <Breadcrumb separator='>' className='text-xs'>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item className='text-blue-600'>
          Application Center
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
