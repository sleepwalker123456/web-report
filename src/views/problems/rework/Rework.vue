<template>
  <div>
    <Form inline>
      <FormItem label="返工单号" style="width: 300px">
        <Row>
          <Col span="100%" style="width: 100%">
            <Input v-model="reprocessingNo" placeholder="Enter something..."></Input>
          </Col>
        </Row>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="queryData">Submit</Button>
      </FormItem>
    </Form>
    <Table highlight-row stripe :columns="columns" :data="showData"></Table>
  </div>
</template>

<script>
import {fetch} from '../../../network/request'

export default {
  name: 'Rework',
  data: function () {
    return {
      columns: [
        {title: '组织', key: 'comId'},
        {title: '条码', key: 'barNo', width: '150px'},
        {title: '料品编号', key: 'itemNo', width: ''},
        {title: '料品名称', key: 'itemName', width: ''},
        {title: '批次', key: 'lotNo', width: ''},
        {title: '数量', key: 'orderQty', width: ''},
        {title: '仓库', key: 'whId', width: ''},
        {title: '出库单号', key: 'ckVouNo', width: ''}
      ],
      showData: [],
      reprocessingNo: ''
    }
  },
  methods: {
    queryData: function () {
      const config = {
        url: '/getReprocessingBar',
        params: {
          reprocessingNo: this.reprocessingNo
        }
      }
      fetch(config).then(response => {
        console.info(response)
        this.showData = response.entity
      }).catch(error => {
        alert(error)
      })
      console.info('查询返工条码')
    }
  }
}
</script>

<style scoped>

</style>
