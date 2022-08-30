<template>
  <div>
    <Form :model="formItem" :label-width="80" inline>
      <FormItem label="青岛海信日立型号">
        <Row>
          <Col span="100%" style="width: 100%">
            <Select v-model="formItem.select">
              <Option v-for="item in docTypes" :value="item.code" :key="item.code">
                {{ item.name }}
              </Option>
            </Select>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="产线">
        <Input v-model="formItem.itemNo" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem label="班次">
        <DatePicker type="date" placeholder="Select date" v-model="formItem.startTime"></DatePicker>
      </FormItem>
      <FormItem label="截止时间">
        <DatePicker type="date" placeholder="Select date" v-model="formItem.endTime"></DatePicker>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data: function () {
    return {
      formItem: {
        select: '',
        org: ''
      },
      docTypes: []
    }
  }
}
</script>

<style scoped>

</style>
