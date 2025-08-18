import { article, IArticle } from './../services/article';
import createSliceState from './common/createSliceState';

export default createSliceState({
  name: 'templateList',
  initialState: null as IArticle[] | null,
  reducers: {
    set:(state, action) => state,
  },
  effects: {
    fetch: async (state) => {
      const data2 = await article.getArticleList();
      const list = [...data2.list];
      list.sort((a, b) => (a.updated_at > b.updated_at ? -1 : 1));
      return list;
    },
    fetchwithnow: async (state, payload: { id: number; success: () => void }) => {
      try {
        const data2 = await article.getArticleList();
        const list = [...data2.list];
        list.sort((a, b) => (a.updated_at > b.updated_at ? -1 : 1));
        payload.success();
        return list;
      } catch (error: any) {
        if (error?.response?.status === 404) {
          throw {
            message: 'Cannot get the templates list',
          };
        }
      }
    },
  },
});
