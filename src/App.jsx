import { useState, useEffect } from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostCard from "./components/PostCard";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorAlert from "./components/ErrorAlert";
import { fetchData } from "./utils/api";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const data = await fetchData(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(data);
      } catch (err) {
        setError("Failed to load posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <Header title="My Blog" />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          py: 4,
        }}
      >
        <Container>
          <Typography variant="h4" sx={{ fontSize: 25 }} gutterBottom>
            Posts and Comments
          </Typography>
          {loading && <LoadingSpinner />}
          {error ? (
            <ErrorAlert message={error} />
          ) : (
            <Grid container spacing={2}>
              {posts.map((post) => (
                <Grid item xs={12} md={6} key={post.id}>
                  <PostCard post={post} />
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
