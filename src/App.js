import './App.css';
import { useState, useEffect } from 'react';
import UserForm from './components/UserForm'
import UserList from './components/UserList';
import { fetchData } from './services/fetchData';

function App() {
  const [githubData, setGithubData] = useState(null);
  const [githubDataError, setGithubDataError] = useState(null);
  const [repoData, setRepoData] = useState(null);
  const [repoDataError, setRepoDataError] = useState(null);
  const [user, setUser] = useState("");

  const handleSubmit = value => {
    setUser(value);
  }

  const handleReset = () => {
    setUser("");
    setGithubData("");
    setGithubDataError("");
    setRepoData("");
    setRepoDataError("");
  }

  useEffect(() => {
    if (user !== "") {
      fetchData(`https://api.github.com/users/${user}`, setGithubData, setGithubDataError);
      fetchData(`https://api.github.com/users/${user}/repos`, setRepoData, setRepoDataError);
    }
  }, [user])

  if(githubDataError){
    return <div>{githubDataError}</div>;
  }

  if(repoDataError){
    return <div>{repoDataError}</div>
  }

  return (
    <div className="App">
      <div className="App App-header">
        <UserForm  onSubmit={handleSubmit}/>
        {githubData && repoData && <UserList user={githubData} repos={repoData} onReset={handleReset}/>}
      </div>
    </div>
  );
}

export default App;
