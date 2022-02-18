<template>
  <div>
    <div>
      <Form :model="formItem" :label-width="80">
        <FormItem label="单据类型">
          <Row>
            <Col span="11">
              <Select v-model="formItem.select">
                <Option v-for="item in options" :value="item.code" :key="item.code">{{ item.name }}</Option>
              </Select>
            </Col>
            <Col span="2" style="text-align: center">组织编号</Col>
            <Col span="11">
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
    <Table highlight-row stripe :columns="columns" :data="page.showData" @on-current-change="showDetails"></Table>
    <Page :total="page.dataCount" size="small" :page-size="page.pageSize" @on-change="changePage" show-total show-elevator/>
    <Modal v-model="modal1" title="Common Modal dialog box title">
      <p>Content of dialog</p>
      <p>Content of dialog</p>
      <p>Content of dialog</p>
    </Modal>
  </div>
</template>
<script>
import {fetch} from '../../network/request'
import {changePage} from '../../common/page'

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
        {title: '单号', key: 'vouNo'},
        {title: '部门', key: 'deptName'},
        {title: '仓库编码', key: 'whId'},
        {title: '仓库名称', key: 'whName'},
        {title: '单据类型', key: 'stockReasName'},
        {title: '编制人', key: 'stUsrName'},
        {title: '编制时间', key: 'stFillDate'},
        {title: '审核人', key: 'confirmUsrName'},
        {title: '审核时间', key: 'confirmFillDate'},
        {title: '备注', key: 'notes'}
      ],
      options: [
        {code: 'outBound', name: '杂发单'},
        {code: 'miscRcvMaster', name: '杂收单'},
        {code: 'odoo', name: '成品入库'}
      ],
      modal1: false
    }
  },
  methods: {
    queryData: function () {
      this.$Loading.start()
      const config = {
        url: '/middle/api/selectNoExits',
        method: 'get',
        params: {
          org: this.formItem.org,
          docType: this.formItem.select
        }
      }
      fetch(config).then(res => {
        const result = res.data.entity
        this.page.data = result
        this.page.dataCount = result.length
        this.page.showData = this.page.data.slice(0, this.pageSize)
        this.$Loading.finish()
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
      this.page.showData = changePage(index, this.data)
      this.page.pageCurrent = index
    },
    showDetails: function (currentRow, oldCurrentRow) {
      console.info(currentRow)
      this.modal1 = true
    }
  }
}
</script>
