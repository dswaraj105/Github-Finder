import cssClasses from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={cssClasses.Profile}>
      <img src={props.avatar_url} className={cssClasses.avatar} alt="User Profile Pic" />
      <div>
        <p className={cssClasses.name} >{props.name}</p>
        <p>{props.login}</p>
      </div>
    </div>
  );
};

export default Profile;
