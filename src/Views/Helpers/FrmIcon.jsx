

import React, { useEffect, useState } from "react"

const FrmIcon = (props) => {

  // const { name } = props;
  const [icon, setIcon] = useState("far fa-square")
  const [iconClass, setIconClass] = useState("")

  useEffect(() => {

    if (!props.name) return;

    var icon = "";
    var iconClass = "";

    switch (props.name.trim()) {

      case "amilia":
        icon = "fab fa-amilia"
        break;
      case "chart-bar":
        icon = "fa fa-chart-bar"
        break;
      case "chart-line":
        icon = "fa fa-chart-line"
        break;
      case "check-square":
        icon = "fa fa-check"
        iconClass = "CForm-table-button"
        break;
      case "code":
        icon = "fas fa-code"
        iconClass = "CForm-table-button"
        break;
      case "cog":
        icon = "fa fa-cog"
        break;
        case "copy":
        icon = "far fa-copy"
        break;
      case "credit-card":
        icon = "fa fa-credit-card"
        break;
      case "edit":
        icon = "fas fas fa-edit"
        iconClass = "CForm-table-button"
        break;
      case "eye":
        icon = "fas fa-eye"
        iconClass = "CForm-table-button"
        break;
      case "home":
        icon = "fa fa-home"
        break;
      case "image":
        icon = "fa fa-image"
        break;
      case "plus-square":
        icon = "fa-solid fa-plus"
        iconClass = "CForm-table-button"
        break;
      case "save":
        icon = "fas fa-save"
        iconClass = "CForm-table-button"
        break;
      case "search":
        icon = "fa fa-search"
        iconClass = "CForm-table-button"
        break;
      case "sideBarSearch":
        icon = "fa fa-search"
        break;
      case "stack-overflow":
        icon = "fab fa-stack-overflow"
        break;
      case "times":
        icon = "fa fa-times"
        iconClass = "CForm-table-button"
        break;
      case "trash":
        icon = "fas fa-trash-alt"
        iconClass = "CForm-table-button"
        break;
      case "trash-form":
        icon = "fas fa-trash-alt"
        break;
      case "user-circle":
        icon = "fas fa-user-circle"
        break;
      case "users":
        icon = "fa fa-users"
        break;
      default:
        icon = "far fa-square"
        iconClass = "CForm-table-button"
    }

    setIcon(icon);
    setIconClass(iconClass)

  }, [props.name])

  return (
    <div className={"icon " + (iconClass)}>
      <i className={icon}></i>
    </div>
  )

}

export default FrmIcon