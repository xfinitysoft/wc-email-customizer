import { request } from './axios.config';
export const article = {
  async getArticle(id: number | string): Promise<IArticle> {
    return request.get<IArticle>('/wp-json/xseeb-builder/v1/email/getpost', {
      params: {
        article_id: id,
        xseeb_email_builder_rest_api:'yes',
      },
    });
  },
  async getArticleList(): Promise<ListResponse<IArticle>> {
    return request.get<ListResponse<IArticle>>('/wp-json/xseeb-builder/v1/email/get_list', {
      params: {
        xseeb_get_email_list:'yes',
      },
    });
  },
  async addArticle(data: {
    title: string;
    content: any;
    picture: string;
    summary: string;
    html:string;
    etype:string;
  }): Promise<IArticle> {
    return request.post<IArticle>('/wp-json/xseeb-builder/v1/email/create', {
      ...data,
    });
  },
  async updateArticle(
    id: number,
    options: {
      title?: string;
      content?: any;
      picture?: string;
      summary?: string;
      html?:string;
      etype:string;
    }
  ): Promise<IArticle> {
    return request.post<IArticle>('/wp-json/xseeb-builder/v1/email/update_temp', {
      ...options,
      article_id: id,
    });
  },
  async PreviewArticle(data: {
    id:number;
    title?: string;
    summary?: string;
    content?: any;
    html?:string;
  }): Promise<IArticle> {
    return request.post<IArticle>('/wp-json/xseeb-builder/v1/email/preview', {
      ...data,
    });
  },
  async deleteArticle(id: number): Promise<string> {
    return request.get('/wp-json/xseeb-builder/v1/email/delete_temp', {
      params: {
        article_id: id,
      },
    });
  },
  async enableArticle(id: number): Promise<string> {
    return request.get('/wp-json/xseeb-builder/v1/email/enable_temp', {
      params: {
        article_id: id,
      },
    });
  },
  async disableArticle(id: number): Promise<string> {
    return request.get('/wp-json/xseeb-builder/v1/email/disable_temp', {
      params: {
        article_id: id,
      },
    });
  },
};
export interface ListResponse<T> {
  list: T[];
  count: number;
}
interface content {
  article_id: number;
  content: any;
}

export interface IArticle {
  article_id: number;
  etype:string;
  picture: string;
  title: string;
  summary: string;
  updated_at: number;
  created_at: number;
  content: content;
  html:string;
  status:string;
}