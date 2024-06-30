import s from "./Profile.module.css"



const Profile = (props) => {
return (
   <div className={s.profile}>
    <div className={s.title}>
    <img className={s.photo}
      src={props.image}
      alt="User avatar"
    />
    <p className={s.info}>{props.name}</p>
    <p className={s.info}>@{props.tag}</p>
    <p className={s.info}>{props.location}</p>
  </div>

  <ul className={s.status}>
    <li className={s.item}>
      <span className={s.text}>Followers</span>
      <span>{props.stats.followers}</span>
    </li>
    <li className={s.item}>
      <span className={s.text} >Views</span>
      <span>{props.stats.views}</span>
    </li>
    <li className={s.item}>
      <span className={s.text}>Likes</span>
      <span>{props.stats.likes}</span>
    </li>
  </ul>
</div>
)
}

export default Profile