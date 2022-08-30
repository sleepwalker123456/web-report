<template>
  <div>
    <Form :model="formItem" :label-width="80" inline>
      <FormItem label="ID">
        <Input v-model="formItem.id" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem label="WmsVouNo">
        <Input v-model="formItem.vouNo" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="queryData">Query</Button>
      </FormItem>
    </Form>
    <Table highlight-row stripe :columns="columns" :data="page.showData"></Table>
    <Page :total="page.dataCount" size="small" :page-size="page.pageSize" @on-change="changePage" show-total
          show-elevator/>
  </div>
</template>

<script>
import {fetch} from '../../../network/request'
import {changePage, changePages} from '../../../common/page'

export default {
  name: 'MiddleQuery',
  data: function () {
    return {
      formItem: {
        id: '',
        vouNo: '',
        itemNo: '',
        stockReasId: '',
        whId: '',
        startTime: '',
        endTime: '',
        select: [],
        storehouses: []
      },
      columns: [
        {title: 'ID', key: 'id'},
        {title: 'DocType', key: 'docType', width: '150px'},
        {title: 'DocNo', key: 'DocNo', width: ''},
        {title: 'BusinessDate', key: 'businessDate', width: ''},
        {title: 'Org', key: 'whName', width: ''},
        {title: 'SrcOrg', key: 'srcOrg', width: ''},
        {title: 'SrcDoc', key: 'srcDoc', width: ''},
        {title: 'SrcDocNo', key: 'srcDocNo', width: ''},
        {title: 'CreatedOn', key: 'createdOn', width: ''},
        {title: 'CreatedBy', key: 'createdBy', width: ''},
        {title: 'ApprovedBy', key: 'approvedBy', width: ''},
        {title: 'CompletedOn', key: 'completedOn', width: ''},
        {title: 'Error', key: 'error', width: ''},
        {title: 'IsUpload', key: 'isUpload', width: ''},
        {title: 'WmsVouNo', key: 'wmsVouNo', width: ''},
        {title: 'ReMark', key: 'reMark', width: ''},
        {title: 'DeptCode', key: 'deptCode', width: ''},
        {title: 'WMSComID', key: 'wmsComID', width: ''},
        {title: 'nCount', key: 'nCount', width: ''},
        {title: 'RDProject', key: 'rdProject', width: ''}
      ],
      page: {
        dataCount: 0,
        pageSize: 10,
        pageCurrent: 1,
        data: [],
        showData: [],
        showColumns: []
      }
    }
  },
  methods: {
    queryData: function () {
      this.$Loading.start()
      const config = {
        url: '/middle/miscRcvMaster',
        data: {
          id: this.formItem.id
        }
      }
      fetch(config).then(res => {
        const result = res.entity
        console.info(result)
        this.page.data = result
        this.page.dataCount = result.length
        this.page.showData = result
        this.$Loading.finish()
      }).catch(error => {
        alert(error)
        this.$Loading.error()
      })
    },
    changePage: function (index) {
      this.page.showData = changePage(index, this.page)
      this.page.pageCurrent = index
    },
    changePages: changePages
  }
}
</script>

<style scoped>

</style>
