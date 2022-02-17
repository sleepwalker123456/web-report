<template>
  <div>
    <div>
      <Form :model="formItem" :label-width="80">
        <FormItem label="单据类型">
          <Row>
            <Col span="11">
              <Select v-model="formItem.select">
                <Option value="outBound">杂发单</Option>
                <Option value="miscRcvMaster">杂收单</Option>
                <Option value="odoo">成品入库</Option>
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
          <Button style="margin-left: 8px">Cancel</Button>
        </FormItem>
      </Form>
    </div>
    <Table stripe :columns="columns1" :data="data1"></Table>
    <Page :total="dataCount" :page-size="pageSize" @on-change="changePage" @on-page-size-change="nowPageSize"
          show-total show-sizer show-elevator/>
  </div>
</template>
<script>
import {fetch} from '../../network/request'

export default {
  data: function () {
    return {
      dataCount: 0,
      pageSize: 0,
      formItem: {
        select: '',
        org: ''
      },
      columns1: [
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
      data: []
    }
  },
  methods: {
    queryData: function () {
      /*const config = {
        url: '/middle/api/selectNoExits',
        method: 'get',
        params: {
          org: this.formItem.org,
          docType: this.formItem.select
        }
      }
      console.info(config)
      fetch(config).then(res => {
        const result = res.data.entity
        this.data = result
        this.total = result.length
      })*/
      for (let i = 0; i < 100; i++) {
        let a = {
          id: i,
          idName: 'Mr.Li' + i,
          name: '小李',
          organization: '国务院',
          people: '老李',
          state: '活跃'
        }
        this.data.push(a)
      }
    },
    changePage: function (index) {
      const _start = (index - 1) * this.pageSize
      const _end = index * this.pageSize
      this.nowData = this.data.slice(_start, _end)
      this.pageCurrent = index
    },
    nowPageSize: function (index) {
      this.pageSize = index
    }
  }
}
</script>
