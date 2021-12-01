import Repo from './Repo/repo';
// import cssClasses from './Repos.module.css';

const Repos = (props) => {
  const displayRepo = props.list.map((repo, i) => {
    
    return <Repo name={repo.full_name} key={i} desc={repo.description} />
  });

  return (
    <div>
      {displayRepo}
    </div>
  );
};  

export default Repos;