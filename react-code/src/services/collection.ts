import { request } from './axios.config';
import {CollectedBlock } from 'easy-email-editor';
import {BlockMarketCategory} from 'easy-email-extensions';
export const collectionApi = {

    async getCollectionList(): Promise<BlockMarketCategory> {
        return request.get<BlockMarketCategory>('/wp-json/xseeb-builder/v1/email/get_collections', {
          params: {
            xseeb_get_email_collection:'yes',
          },
        });
    },
    async addCollect(data:CollectedBlock):Promise<CollectedBlock> {
        return request.post<CollectedBlock>('/wp-json/xseeb-builder/v1/email/add_collection', {
           ...data,
        });
    },
    async removeCollect(id:string):Promise<CollectedBlock>{
        return request.post<CollectedBlock>('/wp-json/xseeb-builder/v1/email/remove_collection', {
            params:{
                id:id
            },
         });
    },
}
