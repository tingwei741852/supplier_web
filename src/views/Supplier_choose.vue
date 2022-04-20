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
          </el-select>
        </el-form-item>
      </el-form>
      <el-form ref="add_supplier_form" :rules="rules" :model="add_supplier_form" :inline="true">
        <el-form-item label="件號" prop="part_no">
          <el-input v-model="add_supplier_form.part_no" placeholder="請輸入件號"></el-input>
        </el-form-item>
        <el-form-item label="專案">
          <el-input v-model="add_supplier_form.WBS" placeholder="請輸入專案"></el-input>
        </el-form-item>
        <el-form-item label="物料分類">
          <el-input v-model="add_supplier_form.mat_cat" placeholder="請輸入物料分類"></el-input>
        </el-form-item>
        <el-form-item label="件號名稱">
          <el-input v-model="add_supplier_form.part_name" placeholder="請輸入件號名稱"></el-input>
        </el-form-item>
        <el-button  type="primary" @click="SearchSupplier">查詢</el-button>
      </el-form>
      <div style="margin-bottom:10px;margin-top:10px">
        <el-button  type="primary" @click="deleteselect"  :disabled="tableSelection.length===0">刪除選取資料</el-button>
        <el-button  type="primary" @click="dialogFormVisible = true">新增供應商</el-button>
        <el-button  type="primary" @click="ComputeScore()">開始計算</el-button>
      </div>
    </div>
    <div class="table_block">
      <el-card class="box-card">
           <TreeTable
              :col="column_model"
              :data="tableData"
              :show="tableshow"
              :loading="loading"
              :editfunction="editfunction"
              :deletefunction="deletefunction"
              :handleSelectionChange="handleSelectionChange">
           </TreeTable>
      </el-card>
    </div>
    <el-dialog title="新增供應商" :visible.sync="dialogFormVisible"  width="80%" @close="close_function">
      <insert-dialog :form="dialogform" :CheckFunction="InsertFunction" :VisibleFunction="VisibleFunction"></insert-dialog>
    </el-dialog>
    <el-dialog title="修改供應商" :visible.sync="update_dialogFormVisible"  width="80%" @close="close_function">
      <insert-dialog :form="update_dialogform" :CheckFunction="UpdateFunction" :VisibleFunction="VisibleFunction_update"></insert-dialog>
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
      add_supplier_form: { part_no: 'ZC8-60-918-1', WBS: '', mat_cat: '', part_name: '' },
      column_model: data.COLUMN_DATA,
      loading: false,
      tableData: [],
      dialogFormVisible: false,
      update_dialogFormVisible: false,
      dialogform: data.FORMDATA,
      update_dialogform: data.FORMDATA,
      category2_option: data.CATEGORY_OPTION,
      tableshow: true,
      tableSelection: [],
      rules: {
        part_no: [
          { required: true, message: '請輸入件號', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    InsertFunction () {
      this.tableData.push(this.dialogform)
      this.dialogFormVisible = false
      this.dialogform = {
        supplier_no: '',
        supplier_name: '',
        quality_score: '',
        sup_mgt: '',
        delivery_score: '',
        RDR: '',
        location: '',
        gn_purchase: '',
        nrg_saving: '',
        lean: '',
        sustain: '',
        labor_saf: '',
        perf: '',
        bus_mgt: '',
        finance: '',
        mfg_tech: '',
        rd_tech: '',
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
    UpdateFunction () {
      this.tableshow = false
      this.tableData[this.update_dialogform.index] = this.update_dialogform
      this.$nextTick(function () {
        this.tableshow = true
      })
      console.log(this.tableData)
      this.update_dialogFormVisible = false
      this.update_dialogform = {
        supplier_no: '',
        supplier_name: '',
        quality_score: '',
        sup_mgt: '',
        delivery_score: '',
        RDR: '',
        location: '',
        gn_purchase: '',
        nrg_saving: '',
        lean: '',
        sustain: '',
        labor_saf: '',
        perf: '',
        bus_mgt: '',
        finance: '',
        mfg_tech: '',
        rd_tech: '',
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
      this.dialogform = {
        supplier_no: '',
        supplier_name: '',
        quality_score: '',
        sup_mgt: '',
        delivery_score: '',
        RDR: '',
        location: '',
        gn_purchase: '',
        nrg_saving: '',
        lean: '',
        sustain: '',
        labor_saf: '',
        perf: '',
        bus_mgt: '',
        finance: '',
        mfg_tech: '',
        rd_tech: '',
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
    VisibleFunction_update () {
      this.update_dialogform = {
        supplier_no: '',
        supplier_name: '',
        quality_score: '',
        sup_mgt: '',
        delivery_score: '',
        RDR: '',
        location: '',
        gn_purchase: '',
        nrg_saving: '',
        lean: '',
        sustain: '',
        labor_saf: '',
        perf: '',
        bus_mgt: '',
        finance: '',
        mfg_tech: '',
        rd_tech: '',
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
      this.update_dialogFormVisible = false
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
    },
    SearchSupplier () {
      this.$refs.add_supplier_form.validate((valid) => {
        if (valid) {
          this.loading = true
          userRequest.post('/get_supplier/', this.add_supplier_form)
            .then((response) => {
              this.tableData = response.data
              this.loading = false
            })
            .catch((error) => console.log(error))
        } else {
          return false
        }
      })
    },
    editfunction (idx) {
      this.update_dialogform = {
        supplier_no: '',
        supplier_name: '',
        quality_score: '',
        sup_mgt: '',
        delivery_score: '',
        RDR: '',
        location: '',
        gn_purchase: '',
        nrg_saving: '',
        lean: '',
        sustain: '',
        labor_saf: '',
        perf: '',
        bus_mgt: '',
        finance: '',
        mfg_tech: '',
        rd_tech: '',
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
      for (const [key, value] of Object.entries(this.tableData[idx])) {
        this.update_dialogform[key] = value
        // console.log(key, value)
      }
      this.update_dialogform.index = idx
      // this.dialogform = this.tableData[idx]
      console.log(this.update_dialogform)
      this.update_dialogFormVisible = true
    },
    deletefunction (idx) {
      this.$confirm('您將刪除該筆資料, 是否繼續?', '提示', {
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.splice(idx, 1)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消刪除'
        })
      })
    },
    handleSelectionChange (val) {
      this.tableSelection = val
      if (val.length > 0) {
        this.deletebtndisabled = false
      } else {
        this.deletebtndisabled = true
      }
      console.log(this.tableSelection)
    },
    deleteselect () {
      this.$confirm('您將刪除選取資料, 是否繼續?', '提示', {
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableSelection.forEach(selectvalue => {
          var index = 0
          this.tableData.forEach(tablevalue => {
            if (tablevalue.supplier_no === selectvalue.supplier_no) {
              this.tableData.splice(index, 1)
            }
            index += 1
          })
        })
        this.tableSelection = []
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消刪除'
        })
      })
    },
    close_function () {
      this.update_dialogform = {
        supplier_no: '',
        supplier_name: '',
        quality_score: '',
        sup_mgt: '',
        delivery_score: '',
        RDR: '',
        location: '',
        gn_purchase: '',
        nrg_saving: '',
        lean: '',
        sustain: '',
        labor_saf: '',
        perf: '',
        bus_mgt: '',
        finance: '',
        mfg_tech: '',
        rd_tech: '',
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
      this.dialogform = {
        supplier_no: '',
        supplier_name: '',
        quality_score: '',
        sup_mgt: '',
        delivery_score: '',
        RDR: '',
        location: '',
        gn_purchase: '',
        nrg_saving: '',
        lean: '',
        sustain: '',
        labor_saf: '',
        perf: '',
        bus_mgt: '',
        finance: '',
        mfg_tech: '',
        rd_tech: '',
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
    }
  }
}
</script>
<style>
@import './style/Supplier_choose.css'
</style>
