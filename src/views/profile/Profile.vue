<template>
  <div>
    <Form :model="formItem" :label-width="80" inline>
      <FormItem label="单号">
        <Input v-model="formItem.input1" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem label="料号">
        <Input v-model="formItem.input2" placeholder="Enter something..."></Input>
      </FormItem>
    </Form>
    <Form :model="formItem" :label-width="80" inline>
      <FormItem label="开始时间">
        <Row>
          <Col span="11">
            <DatePicker type="date" placeholder="Select date" v-model="formItem.date1"></DatePicker>
          </Col>
          <Col span="2" style="text-align: center">-</Col>
          <Col span="11">
            <TimePicker type="time" placeholder="Select time" v-model="formItem.time1"></TimePicker>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="截止时间">
        <Row>
          <Col span="11">
            <DatePicker type="date" placeholder="Select date" v-model="formItem.date2"></DatePicker>
          </Col>
          <Col span="2" style="text-align: center">-</Col>
          <Col span="11">
            <TimePicker type="time" placeholder="Select time" v-model="formItem.time2"></TimePicker>
          </Col>
        </Row>
      </FormItem>
    </Form>
    <Form>
      <FormItem>
        <Button type="primary">Submit</Button>
        <Button style="margin-left: 8px">Cancel</Button>
      </FormItem>
    </Form>
    <Table highlight-row stripe :columns="columns" :data="showData"></Table>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data: function () {
    return {
      formItem: {
        input1: '',
        input2: '',
        input3: '',
        select: '',
        radio: 'male',
        checkbox: [],
        switch: true,
        date1: '',
        date2: '',
        time1: '',
        time2: '',
        slider: [20, 50],
        textarea: ''
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
      showData: []
    }
  }
}
</script>

<style scoped>

</style>
