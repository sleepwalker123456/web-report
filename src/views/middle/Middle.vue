<template>
  <div>
    <div>
      <Form :model="formItem" :label-width="100" inline>
        <FormItem label="单据类型" >
          <Row>
            <Col span="100%">
              <Select v-model="formItem.select">
                <Option v-for="item in options" :value="item.code" :key="item.code">{{ item.name }}</Option>
              </Select>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="组织编号">
          <Row>
            <Col span="100%">
              <Input v-model="formItem.org" placeholder="Enter something..."></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="queryData">Submit</Button>
          <Button style="margin-left: 8px" @click="cancel">Cancel</Button>
        </FormItem>
      </Form>
    </div>
    <Table highlight-row stripe :columns="columns" :data="page.showData"></Table>
    <Page :total="page.dataCount" size="small" :page-size="page.pageSize" @on-change="changePage" show-total
          show-elevator/>
  </div>
</template>
<script>
import {fetch} from '../../network/request'
import {changePage} from '../../common/page'
import ViewUI from "view-design";

export default {
  data: function () {
    return {
      page: {
        dataCount: 0,
        pageSize: 10,
        pageCurrent: 1,
        data: [],
        showData: []
      },
      formItem: {
        select: '',
        org: ''
      },
      columns: [
        {title: '组织', key: 'comId'},
        {title: '单号', key: 'vouNo', width: '150px'},
        {title: '部门', key: 'deptName', width: ''},
        {title: '仓库编码', key: 'whId', width: ''},
        {title: '仓库名称', key: 'whName', width: ''},
        {title: '单据类型', key: 'stockReasName', width: ''},
        {title: '编制人', key: 'stUsrName', width: ''},
        {title: '编制时间', key: 'stFillDate', width: ''},
        {title: '审核人', key: 'confirmUsrName', width: ''},
        {title: '审核时间', key: 'confirmFillDate', width: ''},
        {title: '备注', key: 'notes', width: ''}
      ],
      options: [
        {code: 'outBound', name: '杂发单'},
        {code: 'miscRcvMaster', name: '杂收单'},
        {code: 'odoo', name: '成品入库'}
      ],
      modal1: false,
      details: ''
    }
  },
  methods: {
    queryData: function () {
      this.$Loading.start()
      const config = {
        url: '/api/selectNoExits',
        method: 'post',
        params: {
          org: this.formItem.org,
          docType: this.formItem.select
        },
        headers: {
          'auth_token': this.$store.state.adminInfo.token
        }
      }
      fetch(config).then(res => {
        console.info(res)
        const result = res.entity
        this.page.data = result
        this.page.dataCount = result.length
        this.page.showData = this.page.data.slice(0, this.page.pageSize)
        this.$Loading.finish()
        ViewUI.LoadingBar.finish()
      }).catch(err => {
        alert(err)
        this.$Loading.error()
      })
    },
    cancel: function () {
      this.formItem.select = ''
      this.formItem.org = ''
    },
    changePage: function (index) {
      this.page.showData = changePage(index, this.page)
      this.page.pageCurrent = index
    }
  }
}
</script>
