<template>
  <div>
    <div>
      <Form :model="formItem" :label-width="100" inline>
        <FormItem label="单据类型" style="width: 300px">
          <Row>
            <Col span="100%" style="width: 100%">
              <Select v-model="formItem.select" @on-change="getCouponSelected">
                <Option v-for="item in docTypes" :value="item.code" :key="item.code">
                  {{ item.name }}
                </Option>
              </Select>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="组织编号" style="width: 300px">
          <Col span="100%" style="width: 100%">
            <Select v-model="formItem.org">
              <Option :value="organizations.code">{{ organizations.name }}</Option>
            </Select>
          </Col>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="queryData">Submit</Button>
          <Button style="margin-left: 8px" @click="cancel">Cancel</Button>
        </FormItem>
      </Form>
    </div>
    <Table highlight-row stripe :columns="page.showColumns" :data="page.showData"></Table>
    <Page :total="page.dataCount" size="small" :page-size="page.pageSize" @on-change="changePage" show-total
          show-elevator/>
  </div>
</template>
<script>
import {changePage} from '../../../common/page'
import {fetch} from '../../../network/request'

export default {
  data: function () {
    return {
      inAndOut: [
        {title: '组织', key: 'comId', width: '80px'},
        {title: '单号', key: 'vouNo', width: '150px'},
        {title: '部门', key: 'deptName', width: ''},
        {title: '仓库编码', key: 'whId', width: '95px'},
        {title: '仓库名称', key: 'whName', width: ''},
        {title: '单据类型', key: 'stockReasName', width: '100px'},
        {title: '编制人', key: 'stUsrName', width: ''},
        {title: '编制时间', key: 'stFillDate', width: ''},
        {title: '审核人', key: 'confirmUsrName', width: ''},
        {title: '审核时间', key: 'confirmFillDate', width: ''},
        {title: '备注', key: 'notes', width: ''}
      ],
      transfer: [
        {title: '组织', key: 'comId', width: '80px'},
        {title: '单号', key: 'vouNo', width: '150px'},
        {title: '来源部门', key: 'fromDeptName', width: ''},
        {title: '去向部门', key: 'deptName', width: ''},
        {title: '来源仓库编码', key: 'fromWhId', width: '120px'},
        {title: '来源仓库名称', key: 'fromWhName', width: '120px'},
        {title: '仓库编码', key: 'whId', width: ''},
        {title: '仓库名称', key: 'whName', width: ''},
        {title: '单据类型', key: 'stockReasName', width: ''},
        {title: '编制人', key: 'stUsrName', width: ''},
        {title: '编制时间', key: 'stFillDate', width: ''},
        {title: '编制部门', key: 'stDeptName', width: ''},
        {title: '编制人', key: 'stUsrName', width: ''},
        {title: '审核人', key: 'confirmUsrName', width: ''},
        {title: '审核时间', key: 'confirmFillDate', width: ''},
        {title: 'U9单据类型', key: 'notes', width: ''}
      ],
      mes: [
        {title: '组织', key: 'comId', width: '80px'},
        {title: '单号', key: 'vouNo', width: '150px'},
        {title: '仓库编码', key: 'whId', width: ''},
        {title: '仓库名称', key: 'whName', width: ''},
        {title: '去向仓库编码', key: 'proWhId', width: '120px'},
        {title: '去向仓库名称', key: 'proWhName', width: '120px'},
        {title: '单据类型', key: 'stockReasName', width: ''},
        {title: '编制人', key: 'stUsrName', width: ''},
        {title: '编制时间', key: 'stFillDate', width: ''},
        {title: '编制部门', key: 'stDeptName', width: ''},
        {title: '编制人', key: 'stUsrName', width: ''},
        {title: '审核人', key: 'confirmUsrName', width: ''},
        {title: '审核时间', key: 'confirmFillDate', width: ''},
        {title: 'U9单据类型', key: 'notes', width: ''}
      ],
      page: {
        dataCount: 0,
        pageSize: 10,
        pageCurrent: 1,
        data: [],
        showData: [],
        showColumns: []
      },
      formItem: {
        select: '',
        org: ''
      },
      docTypes: [
        {code: 'outBound', name: '杂发'},
        {code: 'miscRcvMaster', name: '杂收'},
        {code: 'mes', name: 'MES出库'},
        {code: 'odoo', name: '成品入库'},
        {code: 'transfer', name: '一步式调拨入库'}
      ],
      organizations: {code: '100', name: '家用'},
      modal1: false,
      details: ''
    }
  },
  methods: {
    queryData: function () {
      this.$Loading.start()
      const config = {
        url: '/api/selectNoExits',
        data: {
          org: this.formItem.org,
          docType: this.formItem.select
        }
      }
      fetch(config).then(res => {
        console.info(res)
        const result = res.entity
        this.page.data = result
        this.page.dataCount = result.length
        this.page.showData = this.page.data.slice(0, this.page.pageSize)
        this.$Loading.finish()
      }).catch(err => {
        this.$Loading.error()
        alert(err)
      })
    },
    cancel: function () {
      this.formItem.select = ''
      this.formItem.org = ''
    },
    changePage: function (index) {
      this.page.showData = changePage(index, this.page)
      this.page.pageCurrent = index
    },
    getCouponSelected: function () {
      const type = this.formItem.select
      this.page.showData = ''
      this.page.data = ''
      if (type === 'transfer') {
        this.page.showColumns = this.transfer
      } else if (type === 'mes') {
        this.page.showColumns = this.mes
      } else {
        this.page.showColumns = this.inAndOut
      }
    }
  },
  created() {
    this.formItem.select = this.docTypes[0].code
    this.formItem.org = this.organizations.code
    this.page.showColumns = this.inAndOut
  }
}
</script>
