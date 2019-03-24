/**
 * Description: home modules layout.
 * Date: 2018-09-29
 * Author: huan7
 */
<template>
    <div class="layout">
        <Layout :style="{ minHeight: '100vh' }">
            <Sider :class="layoutsider" :collapsible="true" :collapsed-width="0" v-model="isCollapsed">
                <!-- menu Information -->
                <MenuC :theme-to-menu="theme" />
            </Sider>
            <Layout>
                <!-- header Information -->
                <HeaderC @theme-status="theme_from_header"  />
                <Content :style="{ padding: '0 16px 16px' }">
                    <!-- Navigate Bar Information -->
                    <NavigateBarC />
                    <Card>
                        <div style="height: 100%">Content</div>
                    </Card>
                </Content>
                <!-- Footer Information -->
                <FooterC />
            </Layout>
        </Layout>
    </div>
</template>
<script>
import MenuC from "@/components/Menuc/menu";
import HeaderC from "@/components/HeaderC/header";
import NavigateBarC from "@/components/NavigateBarC/navigatorBar";
import FooterC from "@/components/FooterC/footer";

export default {
    data() {
        return {
            isCollapsed: false,
            theme: "dark"
        };
    },
    components: {
        MenuC,
        HeaderC,
        NavigateBarC,
        FooterC
    },
    methods: {
        theme_from_header: function(param) {
            this.theme = param;
        }
    },
    computed: {
        layoutsider: function() {
            return [
                'layout-sider-' + this.theme
            ]
        }
    }
};
</script>
<style>
.layout .layout-sider-light {
    background-color: #ffffff;
}
.layout  .layout-sider-dark {
    background-color: #515A6F;
}
.layout-sider-light  .ivu-layout-sider-trigger {
    background-color: #ffffff;
    color:black;
}
.layout-sider-dark  .ivu-layout-sider-trigger {
    background-color: #515A6F;
    color: #ffffff;
}
/* light主题时 设置 菜单选中背景色 */
.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu){
    background-color: gray;
}
</style>

