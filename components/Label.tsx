import classNames from 'classnames'

type LabelType = React.LabelHTMLAttributes<HTMLLabelElement>

const Label = ({ className, children, ...props }: LabelType) => (
  <label
    className={classNames(className)}
    {...props}>
    {children}
  </label>
)

export default Label
