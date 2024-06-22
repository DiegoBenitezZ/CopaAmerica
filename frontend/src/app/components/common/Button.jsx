import '../../../assets/css/common/button.css'

function Button({id, className, callback, children}) {
  return (
    <button onClick={() => callback()} id={id} className={`btn ${className}`}>
        {children}
    </button>
  )
}

export default Button