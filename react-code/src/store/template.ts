import { article, IArticle } from '../services/article';
import createSliceState from './common/createSliceState';
import { emailToImage } from '../utils/emailToImage';
import { IBlockData, BlockManager, BasicType}  from 'easy-email-core';
import { IEmailTemplate } from 'easy-email-editor';
import { getTemplate } from '../config/getTemplate';
export function getAdaptor(data: IArticle): IEmailTemplate {
  const content = data.content.content as IBlockData;
  return {
    ...data,
    content,
    subject: data.title,
    subTitle: data.summary,
  };
}

export default createSliceState({
  name: 'template',
  initialState: null as IEmailTemplate | null,
  reducers: {
    set: (state, action) => {
      return action.payload;
    },
  },
  effects: {
    fetchById: async (
      state,
      {
        id,
      }: {
        id: number;
      },
    ) => {
      try {
        let data = await getTemplate(id);
        if (!data) {
          data = await article.getArticle(id);
        }
        return getAdaptor(data);
      } catch (error) {
        throw error;
      }
    },
    fetchDefaultTemplate: async state => {
      return {
        subject: 'Welcome to Easy-email',
        subTitle: 'Nice to meet you!',
        etype:'wc_new_account',
        content: BlockManager.getBlockByType(BasicType.PAGE)?.create({}),
      } as IEmailTemplate;
    },
    create: async (
      state,
      payload: {
        template: IEmailTemplate;
        html:string;
        success: (id: number, data: IEmailTemplate) => void;
      },
    ) => {
      const picture = await emailToImage(payload.template.content);
      const data = await article.addArticle({
        picture,
        summary: payload.template.subTitle,
        title: payload.template.subject,
        content: payload.template.content,
        html:payload.html,
        etype:payload.template.etype,
      });
      payload.success(data.content.article_id,getAdaptor(data));
      return { ...data, ...payload.template };
    },
    
    updateById: async (
      state,
      payload: {
        id: number;
        template: IEmailTemplate;
        html:string;
        success: (templateId: number) => void;
      },
    ) => {
      try {
        const picture = await emailToImage(payload.template.content);
        await article.updateArticle(payload.id, {
          picture,
          content: payload.template.content,
          title: payload.template.subject,
          summary: payload.template.subTitle,
          html:payload.html,
          etype:payload.template.etype,
        });
        payload.success(payload.id);
      } catch (error: any) {
        if (error?.response?.status === 404) {
          throw {
            message: 'Cannot change the default template',
          };
        }
      }
    },
    duplicate: async (
      state,
      payload: {
        article: {
          article_id: number;
        };
        html:string;
        success: (id: number) => void;
      },
    ) => {
      const source = await article.getArticle(
        payload.article.article_id,
      );
      const data = await article.addArticle({
        title: source.title,
        content: source.content.content,
        picture: source.picture,
        summary: source.summary,
        etype:source.etype,
        html:payload.html,
      });
      payload.success(data.content.article_id);
      
    },
    removeById: async (state, payload: { id: number; success: () => void }) => {
      try {
        await article.deleteArticle(payload.id);
        payload.success();
      } catch (error: any) {
        if (error?.response?.status === 404) {
          throw {
            message: 'Cannot delete the default template',
          };
        }
      }
    },
    enableById: async (state, payload: { id: number; success: () => void }) => {
      try {
        await article.enableArticle(payload.id);
        payload.success();
      } catch (error: any) {
        if (error?.response?.status === 404) {
          throw {
            message: 'Cannot enable template',
          };
        }
      }
    },
    disableById: async (state, payload: { id: number; success: () => void }) => {
      try {
        await article.disableArticle(payload.id);
        payload.success();
       
      } catch (error: any) {
        if (error?.response?.status === 404) {
          throw {
            message: 'Cannot disable template',
          };
        }
      }
    },
    Preview: async (
      state,
      payload: {
        id:number;
        template: IEmailTemplate;
        html:string;
        success: (id: number, data: IEmailTemplate) => void;
      }
    ) => {
      try {
        const data = await article.PreviewArticle({
          id:payload.id,
          content:payload.template.content,
          title: payload.template.subject,
          summary: payload.template.subTitle,
          html:payload.html,
        });
        payload.success(payload.id, getAdaptor(data));
        return { ...data, ...payload.template };
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