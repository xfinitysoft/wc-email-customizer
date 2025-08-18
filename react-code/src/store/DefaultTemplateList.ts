import { article, IArticle } from './../services/article';
import createSliceState from './common/createSliceState';

export default createSliceState({
  name: 'defauktTemplateList',
  initialState: [] as IArticle[],
  reducers: {
    set: (state, action) => state,
  },
  effects: {
    fetch: async (state) => {
      let provideUserData: IArticle[] = [];
      const data2 = await article.getArticleList();
      const list = [...provideUserData, ...data2.list];
      list.sort((a, b) => (a.updated_at > b.updated_at ? -1 : 1));
      return list;
    },
  },
});