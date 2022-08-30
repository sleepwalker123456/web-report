<template>
  <div>
    <Table :columns="columns" :data="showData">
    </Table>
    <Form style="margin-top: 10px">
      <FormItem style="margin-left: 80%;">
        <Button type="primary" @click="queryData">query</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import {fetch} from '../../../network/request'

export default {
  name: 'Rotation',
  data: function () {
    return {
      columns: [
        {title: '派工单号', key: 'vouNo'},
        {title: '料号', key: 'itemNo'},
        {title: '项目号', key: 'itemStockNo'},
        {title: '批次', key: 'lotNo'},
        {title: '派工单编制时间', key: 'stFillDate'},
        {title: '入库单确认时间', key: 'confirmFillDate'}
      ],
      showData: []
    }
  },
  methods: {
    queryData: function () {
      this.$Loading.start()
      const config = {
        url: '/getRotation',
        method: 'POST'
      }
      fetch(config).then(response => {
        if (response.statusCode === 200) {
          console.info(response)
          this.showData = response.entity
        } else {
          alert(response.message)
        }
        this.$Loading.finish()
      }).catch(err => {
        alert(err)
        this.$Loading.error()
      })
    }
  }
}
</script>

<style scoped>

</style>
