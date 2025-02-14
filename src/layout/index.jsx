import Main from './main/index';
import Aside from './aside/index';
import Headers from './header';
import { Layout } from 'antd';
import { useReducer } from 'react';

// aside 展开收起
import { reducer, initialState } from '@/features/Layout/asideReducer';

const Layouts = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Layout className='h-[100vh]'>
            <Aside collapsed={state.collapsed}></Aside>
            <Layout>
                <Headers dispatch={dispatch} collapsed={state.collapsed}></Headers>
                <Main></Main>
            </Layout>
        </Layout>
    );
};

export default Layouts;