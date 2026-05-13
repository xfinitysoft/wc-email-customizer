import { combineReducers } from '@reduxjs/toolkit';
import template from './template';
import templateList from './templateList';
import extraBlocks from './extraBlocks';
import collectionBlock from './collectionBlock';
import toast from './common/toast';
import loading from './common/loading';

const rootReducer = combineReducers({
  template: template.reducer,
  templateList: templateList.reducer,
  extraBlocks: extraBlocks.reducer,
  collectionBlock  : collectionBlock.reducer,
  toast: toast.reducer,
  loading: loading.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;