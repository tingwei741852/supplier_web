export const COLUMN_DATA = [{
  label: '項目',
  children: [
    {
      label: '供應商',
      prop: 'id'
    }, {
      label: '排序',
      prop: 'total_rank'
    }, {
      label: '總分',
      prop: 'total_point'
    }
  ]
}, {
  label: '品質',
  children: [
    {
      label: '品質改善意識',
      prop: 'q_improve'
    }, {
      label: '貨源管理',
      prop: 'sup_mgt'
    }, {
      label: '項目分數',
      prop: 'quality'
    }, {
      label: '項目排序',
      prop: 'quality_rank'
    }
  ]
},
{
  label: '交期',
  children: [
    {
      label: '管理體制',
      prop: 'mgt_n_org'
    }, {
      label: 'RDR退運處理',
      prop: 'RDR'
    }, {
      label: '項目分數',
      prop: 'delivery'
    }, {
      label: '項目排序',
      prop: 'delivery_rank'
    }
  ]
},
{
  label: '成本',
  children: [
    {
      label: '地理位置',
      prop: 'location'
    }, {
      label: '綠色採購',
      prop: 'gn_purchase'
    }, {
      label: '節能減碳',
      prop: 'nrg_saving'
    }, {
      label: '精實',
      prop: 'lean'
    }, {
      label: '項目分數',
      prop: 'cost'
    }, {
      label: '項目排序',
      prop: 'cost_rank'
    }
  ]
},
{
  label: '理念',
  children: [
    {
      label: '永續經營',
      prop: 'sustain'
    }, {
      label: '勞安衛',
      prop: 'labor_saf'
    }, {
      label: '項目分數',
      prop: 'strategic'
    }, {
      label: '項目排序',
      prop: 'strategic_rank'
    }
  ]
},
{
  label: '經營',
  children: [
    {
      label: '經營實績',
      prop: 'perf'
    }, {
      label: '經營管理',
      prop: 'bus_mgt'
    }, {
      label: '財務體質',
      prop: 'finance'
    }, {
      label: '項目分數',
      prop: 'comp_status'
    }, {
      label: '項目排序',
      prop: 'comp_status_rank'
    }
  ]
},
{
  label: '技術',
  children: [
    {
      label: '製造技術能力',
      prop: 'mfg_tech'
    }, {
      label: '開發研發能力',
      prop: 'rd_tech'
    }, {
      label: '項目分數',
      prop: 'tech'
    }, {
      label: '項目排序',
      prop: 'tech_rank'
    }
  ]
}]
export const CATEGORY_OPTION = [{
  label: '第一類',
  prop: 'category_1',
  category1: 'property'
}, {
  label: '第二三五七八類',
  prop: 'category_23578',
  category1: 'property'
}, {
  label: '第一二類(外包)',
  prop: 'category_12_Out',
  category1: 'service_Out'
}, {
  label: '第一二類(維修)',
  prop: 'category_12_M',
  category1: 'service_M'
}]

export const FORMDATA = {
  id: '',
  q_improve: '',
  sup_mgt: '',
  mgt_n_org: '',
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
export const COLUMN_KEY = ['category', 'std_mat', 'std_reg', 'thickness', 'width', 'length', 'reg_sup', 'predict_value', 'unit', 'max', 'q3', 'mean', 'q1', 'min']
export const COLUMN_CHINESE = [{
  category: '類別',
  std_mat: '標準材質',
  std_reg: '標準規範',
  thickness: '厚',
  width: '寬',
  length: '長',
  reg_sup: '規範附註',
  predict_value: '預測值',
  unit: '單位',
  min: 'Lower Bound',
  q1: 'Q1',
  mean: 'Mean',
  q3: 'Q3',
  max: 'Upper Bound'
}]
