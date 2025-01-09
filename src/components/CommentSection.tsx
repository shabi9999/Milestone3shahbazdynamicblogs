import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";



interface Comment {
  id: string;
  author: string;
  text: string;
}
interface CommentSectionProps {
  postId: string;
}

export default function CommentSectionProps({ }: CommentSectionProps) {
  const [Comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [eiditingCommentId, setEiditingCommentId] = useState<string | null>(null);

  const handleAddComment = () => {
     if (newComment.trim() && authorName.trim()) {
    const newCommentObj: Comment = {
      id: new Date().toISOString(),
      author: authorName,
      text: newComment,
    };
    setComments([...Comments, newCommentObj]);
    setNewComment('');
    setAuthorName('');
  }
};

  const handleEiditComment = (commentId: string) => {
    const commentToEidit = Comments.find((comments) => comments.id === commentId);
    if (commentToEidit) {
      setNewComment(commentToEidit.text);
      setAuthorName(commentToEidit.author);
      setEiditingCommentId(commentId);
    }
  };



  const handleSaveEiditedComment = () => {
    if (newComment.trim() && authorName.trim() && eiditingCommentId) {
      const updateComments = Comments.map((comments) =>
        comments.id === eiditingCommentId

          ? { ...comments, text: newComment, authore: authorName }
          : comments
      );
      setComments(updateComments);
      setNewComment('');
      setAuthorName('');
      setEiditingCommentId(null);

    }
  };

  return (
    <div className="mt-9">
      <h2 className="text=2xl font-semibold">Comments</h2>
      <div className="mt-4 space-y-4">
        {Comments.length > 0 ? (
          Comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className="p-4 ">
                <div className="font-semibold">
                  {comment.author}
                </div>
                <p>{comment.text}</p>
                <Button onClick={() => handleEiditComment(comment.id)}
                  className="mt-2 text-blue-500"> Eidit
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-slate-400">No commment yet</p>
        )
        }
      </div>

     <div className="mt-6">
      <Input
      type="text"
      value={authorName}
      onChange={(e) => setAuthorName(e.target.value)}
      placeholder="Your name"
      className="w-full mb-2"/>



      <Input
      type="text"
      value={newComment}
      onChange={(e) => setNewComment(e.target.value)}
      placeholder="Add a comment"
      className="w-full mb-2"/>

      <Button onClick={eiditingCommentId ? handleSaveEiditedComment : handleAddComment}
      className="mt-4">
        {eiditingCommentId ? 'Save' : 'Submit'}

      </Button>


          </div>



    </div>
  )
}