<template>
  <div>
    <Form :model="formItem" :label-width="80" inline>
      <FormItem label="单号">
        <Input v-model="formItem.vouNo" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem label="料号">
        <Input v-model="formItem.itemNo" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem label="开始时间">
        <DatePicker type="date" placeholder="Select date" v-model="formItem.startTime"></DatePicker>
      </FormItem>
      <FormItem label="截止时间">
        <DatePicker type="date" placeholder="Select date" v-model="formItem.endTime"></DatePicker>
      </FormItem>
    </Form>
    <Form :model="formItem" :label-width="80" inline>
      <FormItem label="单据类型">
        <Input v-model="formItem.stockReasId" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem label="仓库">
        <Select v-model="formItem.select" filterable multiple>
          <Option v-for="item in formItem.storehouses" :value="item.code" :key="item.code">{{ item.name }}</Option>
        </Select>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="queryData">Submit</Button>
      </FormItem>
    </Form>
    <Table highlight-row stripe :columns="columns" :data="page.showData"></Table>
    <Page :total="page.dataCount" size="small" :page-size="page.pageSize" @on-change="changePage" show-total
          show-elevator/>
  </div>
</template>

<script>
import {fetch} from '../../../network/request'
import {changePage} from '../../../common/page'

export default {
  name: 'OutBound',
  data: function () {
    return {
      formItem: {
        vouNo: '',
        itemNo: '',
        stockReasId: '',
        whId: '',
        startTime: new Date(),
        endTime: new Date(),
        select: [],
        storehouses: []
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
      const config = {
        url: '/api/outbound',
        data: {
          vouNo: this.formItem.vouNo,
          itemNo: this.formItem.itemNo,
          stockReasId: this.formItem.stockReasId,
          startTime: this.formItem.startTime,
          endTime: this.formItem.endTime
        }
      }
      fetch(config).then(response => {
        if (response.statusCode === 200) {
          this.page.data = response.entity
        } else {
          alert(response.message)
        }
      }).catch(error => {
        alert(error)
      })
    },
    changePage: function (index) {
      this.page.showData = changePage(index, this.page)
      this.page.pageCurrent = index
    }
  }
}
</script>

<style scoped>

</style>
