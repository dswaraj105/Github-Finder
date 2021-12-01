import GitHubIcon from '@mui/icons-material/GitHub';

import cssClasses from './header.module.css';

const Header = () => {
  return (
    <div className={cssClasses.Header}>
      <GitHubIcon style={{fontSize: '3rem'}} />
      <span className={cssClasses.topic}>GitHub Profile Finder</span>
    </div>
  )
}

export default Header;