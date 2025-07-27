import Icon from "../../themes/customIcon"
import { IIcon } from "../../types/type"

const ZestyIcon = (props: IIcon) => {
  return (
    <Icon
      name={props.name}
      color={props.color as string}
      size={props.size || 12}
      style={props.style || {}}
    />
  )
}

export default ZestyIcon