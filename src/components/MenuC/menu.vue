/**
 * Description: menu modules content.
 * Date: 2018-09-29
 * Author: huan7
 */
<template>
    <div>
        <!-- logo -->
        <div class="logo ivu-layout-header">
            <span class="logo-text">XXXXX</span>
        </div>
        <Menu active-name="1-2" :theme="themeToMenu" width="auto" :accordion="true" :class="menuitemClasses">
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-paper" size="24" />
                    <span>内容管理</span>
                </template>
                <MenuItem name="1-1">
                    <Icon type="ios-navigate" size="24"></Icon>
                    <span>导航</span>
                </MenuItem>
                <MenuItem name="1-2">
                    <Icon type="md-cube" size="24" />
                    <span>Menu 1</span>
                </MenuItem>
                <Submenu name="1-3">
                    <template slot="title">
                        <Icon type="md-cart" size="24" />
                        <span>购物车</span>
                    </template>
                    <MenuItem name="1-3-1">
                        <Icon type="md-cart" size="24" />
                        <span>京东</span>
                    </MenuItem>
                    <MenuItem name="1-3-2">
                        <Icon type="md-cart" size="24" />
                        <span>淘宝</span>
                    </MenuItem>
                </Submenu>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-people" size="24" />
                    <span>用户管理</span>
                </template>
                <MenuItem name="2-1">
                    <Icon type="md-cart" size="24" />
                    <span>新增用户</span>
                </MenuItem>
                <MenuItem name="2-2">
                    <Icon type="md-cart" size="24" />
                    <span>用户列表</span>
                </MenuItem>
            </Submenu>
        </Menu>
    </div>
</template>
<script>
export default {
    computed: {
        menuitemClasses: function() {
            return [
            	"menu-item",
                this.$parent.isCollapsed ? "collapsed-menu" : ""
            ];
        }
    },
    props:['themeToMenu']
};
</script>
<style scope>
.menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
.menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
}
.collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
}
.collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
}
.logo {
    padding: 0;
    background-color: #19be6b;
}
.logo .logo-text {
	color: #ffffff;
	font-weight: bolder;
	font-size: 24px;
	text-align: center;
	width: 100%;
}
</style>
