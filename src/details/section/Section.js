import cssClasses from "./Section.module.css";

const Section = (props) => {

  let desc = props.desc;

  if(!props.desc && props.desc !== 0){
    desc = (<span className={cssClasses.red}>Not Available</span>);
  }

  return (
    <div className={cssClasses.Section}>
      <p className={cssClasses.title}>{props.title}</p>
      <p className={cssClasses.desc}>{desc}</p>
    </div>
  );
};

export default Section;
