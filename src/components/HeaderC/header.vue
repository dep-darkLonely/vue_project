/**
 * Description: header information.
 * Date: 2018-09-29
 * Author: huan7
 */
<template>
    <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
        <!-- header Information -->
        <div class="demo-avatar" >
			<div class="theme">
				<Tooltip content="switch theme" placement="bottom">
					<i-switch  size="large" v-model="status" @on-change="changeTheme">
						<span  slot="open">light</span>
						<span  slot="close">dark</span>
					</i-switch>
				</Tooltip>
			</div>

			<div class="notification">
				<Badge class="notification-s" @click.native="viewNotication" :count="2" type="error" :offset="[22, 3]">
                	<Icon type="ios-notifications-outline" size="26"></Icon>
            	</Badge>
			</div>

			<div class="person-information">
				<Dropdown>
					<Badge>
						<Avatar icon="ios-person" :src="personAvatar" size="large"/>
					</Badge>
					<DropdownMenu slot="list">
						<DropdownItem @click.native="getUserInfo">
							<Icon type="ios-contact-outline" size="24" color="blue" />
							<span>Person</span>
						</DropdownItem>

						<DropdownItem @click.native="logOut">
							<Icon type="ios-log-out" size="24" color="red" />
							<span>Log Out</span>
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
        </div>

        <!-- Log Out -->
        <Modal v-model="modal1">
            <p slot="header" style="color: #f60;">
                <Icon type="ios-information-circle"></Icon>
                <span>Vue System Message</span>
            </p>
            <div>
                <p><strong>Do you quit the system?</strong></p>
            </div>
            <div slot="footer">
                <Button type="error" size="large" long @click="quit">Quit</Button>
            </div>
        </Modal>

        <!-- Person -->
        <Modal v-model="userInfoModal" title="User Information" :footer-hide="true">
            <userForm></userForm>
        </Modal>

		<!-- Message -->
        <Drawer title="System Message" :closable="false" :scrollable="true" v-model="value1">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>

    </Header> 
</template>

<script>
import personImage from "@/assets/person.jpg";
import userForm from "@/components/User/UserForm";

export default {
    components: {
        userForm
    },
    data() {
        return {
            value1: false,
            personAvatar: personImage,
            modal1: false,
			userInfoModal: false,
			status: false 				// 默认dark主题
        };
    },
    methods: {
        viewNotication: function() {
            this.value1 = true;
        },
        logOut: function() {
            this.modal1 = true;
        },
        quit: function() {
            this.$store.dispatch("LoginOut").then(() => {
                this.$router.push({
                    path: "/login"
                });
            });
        },
        getUserInfo: function() {
            this.userInfoModal = true;
		},
		changeTheme: function(status) {
            /**
             * status: 主题切换
             * true: Light
             * false： Dark
             */
			this.$emit('theme-status', status == true ? "light" : "dark" );
		}
    },
    // computed: {
    //     defaultTheme: function() {
    //         this.$emit('default-theme', this.status);
    //     }
    // }
};
</script>
<style>
.demo-avatar {
  	float: right;
	display: flex;
}
.demo-avatar > .theme,.notification {
	width:60px;
}
.demo-avatar .notification-s {
	margin-left: 12px;
}
</style>
