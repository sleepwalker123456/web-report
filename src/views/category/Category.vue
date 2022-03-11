<template>
  <div>
    <Form inline>
      <FormItem label="返工单号">
        <Row>
          <Col span="100%">
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
export default {
  name: 'Category',
  data: function () {
    return {
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
      showData: [],
      reprocessingNo: ''
    }
  },
  methods: {
    queryData: function () {
      const config = {
        params: {
          method: 'POST',
          reprocessingNo: this.reprocessingNo
        }
      }
      console.info('查询返工条码')
    }
  }
}
</script>

<style scoped>

</style>
