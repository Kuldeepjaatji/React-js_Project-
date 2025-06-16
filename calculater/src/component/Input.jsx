import Styles from "./Input.module.css"

const Input = ({displaycopy}) =>{

  return (
    <input className={Styles.input} type="text" value={displaycopy} readOnly/>
  )
}

export default Input;