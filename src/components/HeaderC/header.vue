/**
 * Description: header information.
 * Date: 2018-09-29
 * Author: huan7
 */
<template>
  <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
    <!-- header Information -->
    <div class="demo-avatar">
      <Badge class='notification-s' @click.native="viewNotication" :count="2" type="error" :offset="[22,3]" >
        <Icon type="ios-notifications-outline" size="26"></Icon>
      </Badge>
      <Dropdown>
        <Badge>
          <Avatar icon="ios-person" :src="personAvatar" size="large" />
        </Badge>
        <DropdownMenu slot="list">
          <DropdownItem >
           <Icon type="ios-contact-outline" size="24" color="blue"/>
           <span>Person</span>
          </DropdownItem>
          <DropdownItem @click.native="viewNotication">
            <Icon type="ios-log-out" size="24" color="red"/>
            </span>Log Out</span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    <Drawer title="Basic Drawer" :closable="false" v-model="value1">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Drawer>
  </Header>
</template>
<script>
import personImage from '@/assets/person.jpg'
export default {
  data () {
    return {
      value1: false,
      personAvatar: personImage
    }
  },
  methods: {
    viewNotication: function () {
      this.value1 = true
    }
  }
}
</script>
<style>
.notification-s {
  margin-right: 15px;
  padding-top: 3px;
}
.demo-avatar {
  float:right
}
</style>
