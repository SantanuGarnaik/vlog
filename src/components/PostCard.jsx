import { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Collapse,
} from "@mui/material";
import LoadingSpinner from "./LoadingSpinner";
import ErrorAlert from "./ErrorAlert";
import { fetchData } from "../utils/api";

function PostCard({ post }) {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(false);
  const [error, setError] = useState(null);

  const fetchComments = async () => {
    setLoadingComments(true);
    setError(null);
    try {
      const data = await fetchData(
        `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
      );
      setComments(data);
    } catch (err) {
      setError("Failed to load comments. Please try again later.");
    } finally {
      setLoadingComments(false);
    }
  };

  const handleToggleComments = () => {
    if (!showComments && comments.length === 0) fetchComments();
    setShowComments((prev) => !prev);
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleToggleComments} color="primary">
          {showComments ? "Hide Comments" : "Read Comments"}
        </Button>
      </CardActions>
      <Collapse in={showComments} timeout="auto" unmountOnExit>
        {loadingComments && <LoadingSpinner />}
        {error && <ErrorAlert message={error} />}
        {comments.map((comment) => (
          <CardContent key={comment.id} sx={{ borderTop: "1px solid #ddd" }}>
            <Typography variant="subtitle2">{comment.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              {comment.body}
            </Typography>
          </CardContent>
        ))}
      </Collapse>
    </Card>
  );
}

export default PostCard;
