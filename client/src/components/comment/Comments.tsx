import React, { ReactNode } from 'react';
import { WithAdminNav } from '../navigation/WithAdminNav';
import { CommentListItem, IComment } from './CommentListItem';

export const Comments = () => {
  const comments = [
    {
      id: 1,
      articleId: 1,
      commenterName: 'John',
      commentContent: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,accusantium temporibus iure delectus ut totam natus nesciunt ex?Ducimus, enim.',
      article: { id: 1, title: 'Question about Livewire Rendering and Alpine JS' },
      repliesCount: 10,
    },
    {
      id: 2,
      articleId: 2,
      commenterName: 'John',
      commentContent: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,accusantium temporibus iure delectus ut totam natus nesciunt ex?Ducimus, enim.',
      article: { id: 1, title: 'Question about Livewire Rendering and Alpine JS' },
      repliesCount: 15,
    },
    {
      id: 3,
      articleId: 3,
      commenterName: 'John',
      commentContent: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,accusantium temporibus iure delectus ut totam natus nesciunt ex?Ducimus, enim.',
      article: { id: 1, title: 'Question about Livewire Rendering and Alpine JS' },
      repliesCount: 20,
    },
  ];
  const renderComments = (): ReactNode => {
    return (
      <>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Comments
          </h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-15">
          {comments.map((comment: IComment) => {
            return (
              <CommentListItem key={comment.id} comment={comment} />
            );
          })
          }
        </div>
      </>
    );
  };
  return <WithAdminNav>{renderComments()}</WithAdminNav>;
};
