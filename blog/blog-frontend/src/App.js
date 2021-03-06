import LoginPage from "./pages/LoginPage";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Route component={PostListPage} path={[`/@:username`, '/']} exact></Route>
      <Route component={LoginPage} path="/login"></Route>
      <Route component={WritePage} path="/write"></Route>
      <Route component={RegisterPage} path="/register"></Route>
      <Route component={PostPage} path="/@:username/:postId"></Route>
    </>
  );
}

export default App;
