import createSliceState from './common/createSliceState';
import { IBlockData} from 'easy-email-core';
import { collectionApi} from '../services/collection';
export default createSliceState({
    name: 'collectionBlock',
    initialState: null as any | null,
    reducers: {
      set: (state, action) => {
        return action.payload;
      },
    },
    effects: {
        fetch: async (state) => {
            const data = await collectionApi.getCollectionList();
            return {...data};
        },
        createCollection: async (
            state,
            payload: {
              id:string;
              label: string;
              helpText: string;
              data:IBlockData<any,any>;
              thumbnail:string;
              success: () => void;
            }
        ) => {
            try {
              const data = await collectionApi.addCollect({
                id: payload.id,
                label: payload.label,
                helpText: payload.helpText,
                thumbnail: payload.thumbnail,
                data: payload.data,
              });
              payload.success();
              return {...data};
            } catch (error: any) {
              if (error?.response?.status === 404) {
                throw {
                  message: 'Cannot preview template',
                };
              }
            }
        },
        deleteCollection: async (
            state,
            payload: {
              id:string;
              success: () => void;
            }
        ) => {
            try {
              const data = await collectionApi.removeCollect(payload.id);
              payload.success();
              return {...data};
            } catch (error: any) {
              if (error?.response?.status === 404) {
                throw {
                  message: 'Cannot preview template',
                };
              }
            }
        },
        
    },
});