<template>
  <!-- <el-dialog title="新增待預測資料" :visible="dialogFormVisible" @close="onClose" width="80%">
  <el-card> -->
  <el-container vertical>
    <el-main>
      <table>
        <!-- <tr v-for="(form, idx) in forms" v-bind:key="idx"> -->
        <tr>
          <td>
            供應商
            <el-input  v-model="form.id" placeholder="請輸入供應商"></el-input>
            <!-- <el-input v-model="form.category" placeholder="請輸入類別"></el-input> -->
          </td>
          <td>
            品質改善意識
            <el-input type="number" v-model.number="form.q_improve" placeholder="請輸入品質改善意識分數"></el-input>
            <!-- <el-input v-model="form.std_mat" placeholder="請輸入標準材質"></el-input> -->
          </td>
          <td>
            貨源管理
            <el-input type="number" v-model.number="form.sup_mgt" placeholder="請輸入貨源管理分數"></el-input>
            <!-- <el-input v-model="form.std_reg" placeholder="請輸入標準規範"></el-input> -->
          </td>
        </tr>
        <tr>
          <td>
            管理體制
            <el-input type="number" v-model.number="form.mgt_n_org" placeholder="請輸入管理體制分數"></el-input>
          </td>
           <td>
            RDR退運處理
            <el-input type="number" v-model.number="form.RDR" placeholder="請輸入RDR退運處理分數"></el-input>
          </td>
        </tr>
        <tr>
          <td>
            地理位置
            <el-input type="number" v-model.number="form.location" placeholder="請輸入地理位置分數"></el-input>
          </td>
          <td>
            綠色採購
            <el-input type="number" v-model.number="form.gn_purchase" placeholder="請輸入綠色採購分數"></el-input>
          </td>

           <td>
            節能減碳
            <el-input type="number" v-model.number="form.nrg_saving" placeholder="請輸入節能減碳分數"></el-input>
          </td>
           <td>
            精實
            <el-input type="number" v-model.number="form.lean" placeholder="請輸入精實分數"></el-input>
          </td>
        </tr>
        <tr>
          <td>
            永續經營
            <el-input type="number" v-model.number="form.sustain" placeholder="請輸入永續經營分數"></el-input>
          </td>
           <td>
            勞安衛
            <el-input type="number" v-model.number="form.labor_saf" placeholder="請輸入勞安衛分數"></el-input>
          </td>
        </tr>
        <tr>
           <td>
            經營實績
            <el-input type="number" v-model.number="form.perf" placeholder="請輸入經營實績分數"></el-input>
          </td>
           <td>
            經營管理
            <el-input type="number" v-model.number="form.bus_mgt" placeholder="請輸入經營管理分數"></el-input>
          </td>
          <td>
            財務體質
            <el-input type="number" v-model.number="form.finance" placeholder="請輸入財務體質分數"></el-input>
          </td>
      </tr>
      <tr>
          <td>
            製造技術能力
            <el-input type="number" v-model.number="form.mfg_tech" placeholder="請輸入製造技術能力分數"></el-input>
          </td>
           <td>
            開發研發能力
            <el-input type="number" v-model.number="form.rd_tech" placeholder="請輸入開發研發能力分數"></el-input>
          </td>
        </tr>
      </table>
    </el-main>
    <el-footer>
      <div class="footer-block">
        <el-button @click="VisibleFunction">取 消</el-button>
        <el-button type="primary" @click="InsertFunction">新增</el-button>
      </div>
    </el-footer>
  </el-container>
  <!-- </el-card> -->
</template>

<script>
export default {
  name: 'Insertdialog',
  props: {
    InsertFunction: Function,
    VisibleFunction: Function,
    form: Object
  }
}
</script>
<style>
  .el-select {
    width: 100%;
  }
  td{
    padding-left: 5px;
    padding-right: 5px;
  }
  .footer-block{
    float: right;
    margin-top: 20px;
    /* border: 1px solid #000; */
  }
</style>
