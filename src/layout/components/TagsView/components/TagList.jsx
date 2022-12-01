import React, { useState, useRef, useEffect, componentDidMount } from 'react'
// import { withRouter } from "react-router-dom";
import { createBrowserHistory, createHashHistory } from 'history';
import menuList from "../../../../config/menuConfig";
import { useLocation } from 'react-router';
import { Scrollbars } from 'react-custom-scrollbars';
import { useDispatch, useSelector } from 'react-redux'
import { Tag } from "antd";

export default function TagList() {
  const history = useLocation() // history模式
  const currentPath = history;
  // console.log(currentPath);
  // const dispatch = useDispatch();
  // const tagListContainer = useRef()
  // const contextMenuContainer = useRef()
  // const [left, setleft] = useState(0)
  // const [top, settop] = useState(0)
  // const [menuVisible, setmenuVisible] = useState(false)
  // const [currentTag, setcurrentTag] = useState()
  // const [deletedata, setdeletemonkey] = useState([])
  // const { taglist } = useSelector((state) => ({
  //   taglist: state.handletag.taglist,
  // }))


  // const handleClose = (tag) => {
  //   const path = tag.path;
  //   const currentPath = history.location.pathname;
  //   const length = taglist.length;
  //   // 如果关闭的是当前页，跳转到最后一个tag
  //   if (path === currentPath) {
  //     history.push(taglist[length - 1].path);
  //   }

  //   // 如果关闭的是最后的tag ,且当前显示的也是最后的tag对应的页面，才做路由跳转
  //   if (
  //     path === taglist[length - 1].path &&
  //     currentPath === taglist[length - 1].path
  //   ) {
  //     // 因为cutTaglist在最后执行，所以跳转到上一个tags的对应的路由，应该-2
  //     if (length - 2 > 0) {
  //       history.push(taglist[length - 2].path);
  //     } else if (length === 2) {
  //       history.push(taglist[0].path);
  //     }
  //   }
  //   // 先跳转路由，再修改state树的taglist
  //   dispatch({ type: "deleteTag", val: tag })
  // }

  // const handleClick = (path) => {
  //   history.push(path);
  // };

  // const openContextMenu = (tag, event) => {
  //   event.preventDefault();
  //   const menuMinWidth = 105;
  //   const clickX = event.clientX;
  //   const clickY = event.clientY; //事件发生时鼠标的Y坐标
  //   const clientWidth = tagListContainer.current.clientWidth; // container width
  //   const maxLeft = clientWidth - menuMinWidth; // left boundary

  //   // 当鼠标点击位置大于左侧边界时，说明鼠标点击的位置偏右，将菜单放在左边
  //   if (clickX > maxLeft) {
  //     setleft(clickX - menuMinWidth + 15)
  //     settop(clickY)
  //     setmenuVisible(true)
  //     setcurrentTag(tag)

  //   } else {
  //     // 反之，当鼠标点击的位置偏左，将菜单放在右边
  //     setleft(clickX)
  //     settop(clickY)
  //     setmenuVisible(true)
  //     setcurrentTag(tag)
  //   }
  // }

  // const handleClickOutside = (event) => {
  //   const menVisible = menuVisible;
  //   const isOutside = !(
  //     contextMenuContainer.current &&
  //     contextMenuContainer.current.contains(event.target)
  //   );
  //   if (isOutside && menVisible) {
  //     closeContextMenu()
  //   }
  // }

  // const closeContextMenu = () => {
  //   setmenuVisible(true)
  // }
  // componentDidMount() {
  //   document.body.addEventListener("click", this.handleClickOutside);
  // }

  // useEffect(() => {
  //   handleClose()
  //   // getmonkeydatas()

  // }, [])
  // useEffect(() => {
  //   handleClickOutside()
  // }, [])
  // useEffect(() => {
  //   document.body.removeEventListener("click", handleClickOutside());
  // }, [menuVisible])


  // const handleCloseAllTags = () => {
  //   dispatch.emptyTaglist()
  //   history.push("/home");
  //   closeContextMenu();
  // };

  // const handleCloseOtherTags = () => {
  //   const currentTag = currentTag;
  //   const { path } = currentTag;
  //   dispatch({ type: "closeOtherTags", val: currentTag })
  //   history.push(path);
  //   closeContextMenu();
  // };
  // return (
  //   <>
  //   <Scrollbars
  //     autoHide
  //     autoHideTimeout={1000}
  //     autoHideDuration={200}
  //     hideTracksWhenNotNeeded={true}
  //     renderView={(props) => (
  //       <div {...props} className="scrollbar-container" />
  //     )}
  //     renderTrackVertical={(props) => (
  //       <div {...props} className="scrollbar-track-vertical" />
  //     )}
  //   >
  //     <ul className="tags-wrap" ref={this.tagListContainer}>
  //       {taglist.map((tag) => (
  //         <li key={tag.path}>
  //           <Tag
  //             onClose={handleClose.bind(null, tag)}
  //             closable={tag.path !== "/dashboard"}
  //             color={currentPath === tag.path ? "geekblue" : "gold"}
  //             onClick={handleClick.bind(null, tag.path)}
  //             onContextMenu={openContextMenu.bind(null, tag)}
  //           >
  //             {tag.title}
  //           </Tag>
  //         </li>
  //       ))}
  //     </ul>
  //   </Scrollbars>
  //   {menuVisible ? (
  //     <ul
  //       className="contextmenu"
  //       style={{ left: `${left}px`, top: `${top}px` }}
  //       ref={this.contextMenuContainer}
  //     >
  //       <li onClick={handleCloseOtherTags}>关闭其他</li>
  //       <li onClick={handleCloseAllTags}>关闭所有</li>
  //     </ul>
  //   ) : null}
  // </>
  // )
}

