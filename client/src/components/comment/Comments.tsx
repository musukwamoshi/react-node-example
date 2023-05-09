import React, { ReactNode, useState } from 'react';
import WithAuth from '../authentication/WithAuth';
import { WithAdminNav } from '../navigation/WithAdminNav';
import { CommentListItem, IComment } from './CommentListItem';
import { useEffectOnce } from '../../utils/hooks/useEffectOnce';
import { get } from '../../utils/api';

export const Comments = () => {
  const [comments, setComments] = useState<Array<IComment>>([]);

  const fetchComments = async (): Promise<any> => {
    const response = await get('/comments', {});
    setComments(response);
  };

  useEffectOnce(() => {
    fetchComments();
  });


  const renderCommentList = (): ReactNode => {
    return (
      <>
        {comments.map((comment: IComment) => {
          return (
            <CommentListItem key={comment.id} comment={comment} />
          );
        })
        }
      </>
    );
  };


  const renderDefault = (): ReactNode => {
    return (
      <>
        <p>There are currently no comments.</p>
      </>
    );
  };

  const renderComments = (): ReactNode => {
    return (
      <>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Comments
          </h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-15">
          {comments.length > 0 ? renderCommentList() : renderDefault()}
        </div>
      </>
    );
  };
  return <WithAuth><WithAdminNav>{renderComments()}</WithAdminNav></WithAuth>;
};
