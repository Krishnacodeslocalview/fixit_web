export const CustomCard = ({ children, className = "", ...props }) => {
  return (
    <div className={`rounded-lg border shadow-sm ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CustomCardContent = ({ children, className = "", ...props }) => {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  )
}