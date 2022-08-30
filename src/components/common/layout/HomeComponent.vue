<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"><img src=""></div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              {{ $store.state.adminInfo.name }}
            </MenuItem>
            <MenuItem name="2">
              <p @click="logout">
                <Icon type="ios-keypad"></Icon>
                注销
              </p>
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu theme="light" width="auto" :open-names="['1']">
            <Submenu :name="menu.id + '-' + index" v-for="(menu,index) in menus" v-bind:key="index">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                {{ menu.title }}
              </template>
              <MenuItem :name="menu.id + ' ' + number" v-for="(info,number) in menu.infos" :to="info.link"
                        v-bind:key="number">
                {{ info.name }}
              </MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Item 1</BreadcrumbItem>
            <BreadcrumbItem>{{ $route.name }}</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import {fetch} from '../../../network/request'
import {ADMIN_INFO_CLEAR} from '../../../store/mutations-type'

export default {
  name: 'HomeComponent',
  data: function () {
    return {
      menus: [
        {
          title: 'Problems',
          id: 1,
          infos: [
            {link: '/home/middle', name: '中间表未生单'}
          ]
        },
        {
          title: 'Inquire',
          id: 2,
          infos: [
            {link: '/home/middleQuery', name: '中间表处理'}
          ]
        },
        {
          title: 'Item 3',
          id: 3,
          infos: [
            {link: '', name: 'Option 1'},
            {link: '', name: 'Option 2'}
          ]
        }
      ]
    }
  },
  methods: {
    logout: function () {
      const config = {
        url: '/logout',
        method: 'POST'
      }
      fetch(config).then(res => {
        this.$store.commit(ADMIN_INFO_CLEAR, res)
        alert(res.message)
        this.$router.replace('/')
      }).catch(err => {
        alert(err)
      })
    }
  }
}
</script>

<style scoped>
.layout {
  border-bottom: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}

.layout-nav {
  width: 420px;
  margin: 0 20px 0 auto;
}
</style>
