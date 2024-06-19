import '../../../assets/css/common/button.css'

function Button({id, className, children}) {
  return (
    <button id={id} className={`btn ${className}`}>
        {children}
    </button>
  )
}

export default Button