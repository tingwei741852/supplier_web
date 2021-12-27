<template>
  <div class="prediction">
    <p class='title-text'>智慧選商</p>
    <div class='filter-block'>
      <el-form ref="form" :model="form" :inline="true" >
        <!-- <el-form-item label="">
          <el-select v-model="form.method" placeholder="Method">
            <el-option label="客製權重 " value="Weight"></el-option>
            <el-option label="SMART" value="SMART"></el-option>
            <el-option label="AHP" value="AHP"></el-option>
          </el-select>
        </el-form-item> -->
        <el-form-item label="">
          <el-select v-model="form.category1" placeholder="Category1" @change="CategoryChange">
            <el-option label="財務採購" value="property"></el-option>
            <el-option label="勞務採購(外包)" value="service_Out"></el-option>
            <el-option label="勞務採購(維修)" value="service_M"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="form.category2" placeholder="Category2">
            <el-option
              v-for="(item, index) in category2_option.filter(item => item.category1 == form.category1)"
              :key="index"
              :label="item.label"
              :value="item.prop"
            ></el-option>
            <!-- <el-option label="第一類" value="category_1" v-if="item.type ==  '2'"></el-option>
            <el-option label="第二三五七八類" value="category_23578"></el-option>
            <el-option label="第一二類(外包)" value="category_12_Out"></el-option>
            <el-option label="第一二類(維修)" value="category_12_M"></el-option> -->
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="">
          <el-select v-model="form.category3" placeholder="Category3">
            <el-option label="物料類別" value="3"></el-option>
          </el-select>
        </el-form-item> -->
      </el-form>
      <div style="margin-bottom:10px">
        <el-button  type="primary" @click="dialogFormVisible = true">新增供應商</el-button>
        <el-button  type="primary" @click="ComputeScore()">開始計算</el-button>
      </div>
    </div>
    <div class="table_block">
      <el-card class="box-card">
           <TreeTable
              :col="column_model"
              :data="tableData"
              :loading="loading">
           </TreeTable>
      </el-card>
    </div>
    <el-dialog title="新增供應商" :visible.sync="dialogFormVisible"  width="80%">
      <insert-dialog :form="dialogform" :InsertFunction="InsertFunction" :VisibleFunction="VisibleFunction"></insert-dialog>
    </el-dialog>
  </div>
</template>

<script>
import * as data from './data/prediction_column'
import TreeTable from './component/TreeTable'
import Insertdialog from './component/InsertSupplier'
import { userRequest } from '../axios.js'
export default {
  components: {
    TreeTable,
    'insert-dialog': Insertdialog
  },
  data () {
    return {
      form: { method: 'SMART', category1: 'property', category2: 'category_1' },
      column_model: data.COLUMN_DATA,
      loading: false,
      tableData: [],
      dialogFormVisible: false,
      dialogform: data.FORMDATA,
      category2_option: data.CATEGORY_OPTION
    }
  },
  methods: {
    InsertFunction () {
      this.tableData.push(this.dialogform)
      this.dialogFormVisible = false
      this.dialogform = {
        id: '',
        q_improve: '0',
        sup_mgt: '0',
        mgt_n_org: '0',
        RDR: '0',
        location: '0',
        gn_purchase: '0',
        nrg_saving: '0',
        lean: '0',
        sustain: '0',
        labor_saf: '0',
        perf: '0',
        bus_mgt: '0',
        finance: '0',
        mfg_tech: '0',
        rd_tech: '0',
        quality_rank: '',
        delivery_rank: '',
        cost_rank: '',
        strategic_rank: '',
        comp_status_rank: '',
        tech_rank: '',
        total_rank: '',
        quality: '',
        delivery: '',
        cost: '',
        strategic: '',
        comp_status: '',
        tech: '',
        total_point: ''
      }
    },
    VisibleFunction () {
      this.dialogform = this.dialogform = {
        id: '0',
        q_improve: '0',
        sup_mgt: '0',
        mgt_n_org: '0',
        RDR: '0',
        location: '0',
        gn_purchase: '0',
        nrg_saving: '0',
        lean: '0',
        sustain: '0',
        labor_saf: '0',
        perf: '0',
        bus_mgt: '0',
        finance: '0',
        mfg_tech: '0',
        rd_tech: '0',
        quality_rank: '',
        delivery_rank: '',
        cost_rank: '',
        strategic_rank: '',
        comp_status_rank: '',
        tech_rank: '',
        total_rank: '',
        quality: '',
        delivery: '',
        cost: '',
        strategic: '',
        comp_status: '',
        tech: '',
        total_point: ''
      }
      this.dialogFormVisible = false
    },
    CategoryChange (val) {
      console.log(val)
      console.log(this.category2_option.filter(item => item.category1 === val)[0].prop)
      this.form.category2 = this.category2_option.filter(item => item.category1 === val)[0].prop
    },
    ComputeScore () {
      this.loading = true
      var input = {
        category_table: {
			    category1: this.form.category1,
			    category2: this.form.category2
		    },
        data: this.tableData
      }
      console.log(input)
      userRequest.post('/compute_score/', input)
        .then((response) => {
          this.tableData = response.data
          this.loading = false
        })
        .catch((error) => console.log(error))
    }
  }
}
</script>
<style>
@import './style/Supplier_choose.css'
</style>
