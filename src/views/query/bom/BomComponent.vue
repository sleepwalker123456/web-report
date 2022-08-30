<template>
  <div>
    <Form inline>
      <FormItem label="料号">
        <Row>
          <Col span="100%">
            <Input v-model="itemNo" placeholder="Enter something..."></Input>
          </Col>
        </Row>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="queryData">Submit</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: 'BomComponent',
  data: function () {
    return {
      itemNo: ''
    }
  },
  methods: {
    queryData: function () {
      console.info('bom查询')
    }
  }
}
</script>

<style scoped>

</style>
