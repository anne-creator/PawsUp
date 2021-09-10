// 自定义的useSelector hook,给useSelector加上类型定义，剥离component对state的类型要求，达到组件可以复用的目的。

import {useSelector as useReduxSelector,TypedUseSelectorHook} from 'react-redux';
import {RootState} from './store';

export const useSelector : TypedUseSelectorHook<RootState> = useReduxSelector
