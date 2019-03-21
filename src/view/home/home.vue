/**
 * Description: home modules layout.
 * Date: 2018-09-29
 * Author: huan7
 */
<template>
	<div class="layout">
		<Layout :style="{minHeight: '100vh'}">
			<Sider collapsible :collapsed-width="78" v-model="isCollapsed">
				<!-- menu Information -->
				<MenuC />
			</Sider>
			<Layout>
				<!-- header Information -->
				<HeaderC />
				<Content :style="{padding: '0 16px 16px'}">
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
import MenuC from '@/components/Menuc/menu'
import HeaderC from '@/components/HeaderC/header'
import NavigateBarC from '@/components/NavigateBarC/navigatorBar'
import FooterC from '@/components/FooterC/footer'

export default {
  	data () {
		return {
			isCollapsed: false
		}
  	},
  	components: {
    	MenuC,
    	HeaderC,
    	NavigateBarC,
    	FooterC
  	}
}
</script>
