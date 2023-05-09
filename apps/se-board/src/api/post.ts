import {
  FetchPostListParams,
  FetchPostListResponse,
  PostListItem,
  PostListItemDTO,
} from "@types";

import { HTTP_METHODS } from ".";
import { _axios } from "./axiosInstance";

export const fetchPostList = ({
  categoryId,
  page,
  perPage,
}: FetchPostListParams) => {
  return _axios<FetchPostListResponse>({
    url: `/posts`,
    method: HTTP_METHODS.GET,
    params: {
      categoryId,
      page,
      perPage,
    },
  });
};

export const fetchPinedPostList = (categoryId: number) => {
  return _axios<PostListItemDTO[]>({
    url: `/posts/pined`,
    method: HTTP_METHODS.GET,
    params: {
      categoryId,
    },
  });
};

//----- converter -----
export const convertPostListItemDTOToPostListItem = (
  postListItemDTO: PostListItemDTO
): PostListItem => {
  return {
    postId: postListItemDTO.postId,
    title: postListItemDTO.title,
    author: postListItemDTO.author,
    views: postListItemDTO.views,
    category: postListItemDTO.category,
    createdDateTime: postListItemDTO.createdAt,
    modifiedDateTime: postListItemDTO.modifiedAt,
    hasAttachment: postListItemDTO.hasAttachment,
    commentSize: postListItemDTO.commentSize,
    pined: postListItemDTO.pined,
  };
};
