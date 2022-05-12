<!-- <template>
  <div class="common-table">
    <el-form :inline="true" :model="filterFromValue">
      <el-form-item
        v-for="(item, i) in props.filterConfig.items"
        :key="i"
        :label="item.label + ':'"
      >
        <template v-if="item.type == 'input'">
          <el-input
            v-model="filterFromValue[item.name]"
            :placeholder="item.placeholder"
          ></el-input>
        </template>
        <template v-if="item.type == 'select'">
          <el-select
            v-model="filterFromValue[item.name]"
            :placeholder="item.placeholder"
          >
            <el-option
              v-for="(op, index) in item.options"
              :key="index"
              :label="op.label"
              :value="op.value"
            ></el-option>
          </el-select>
        </template>
        <template v-if="item.type == 'daterange'">
          <el-date-picker
            v-model="filterFromValue[item.name]"
            value-format="YYYY-MM-DD"
            type="daterange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </template>
        <template v-if="item.type == 'datetimerange'">
          <el-date-picker
            v-model="filterFromValue[item.name]"
            value-format="YYYY-MM-DD hh:mm:ss"
            type="datetimerange"
            start-placeholder="开始时间"
            end-placeholder="开始时间"
          ></el-date-picker>
        </template>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
    <div
      ref="tableContentRef"
      class="table-content flex1 flex-box flex-column"
    >
      <div
        class="table-wrap flex-box flex-column"
      >
        <el-table v-loading="loading" :data="tablePageData.data"
          ref="tableRef">
          <el-table-column
            v-for="(item, i) in props.tableConfig.columns"
            :key="i"
            :prop="item.prop"
            :label="item.label"
          />
        </el-table>
        <el-pagination
          v-model:curPage="tablePageData.curPage"
          v-model:page-size="tablePageData.pageSize"
          :page-sizes="[10, 20, 100]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tablePageData.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.common-table {
  // margin: 8px;
  padding: 12px;
  background-color: #fff;
  border-radius: 4px;
}
</style>
<script lang="ts" setup>
import api from '@/api'
import {
  computed,
  reactive,
  ref,
  watch,
  onMounted,
  nextTick,
  watchEffect,
} from 'vue'
import {
  IFilterConfig,
  ITableConfig,
  BaseTableFormValue,
  IResDataType,
} from '@/interface'
interface Props {
  filterConfig: IFilterConfig<BaseTableFormValue>
  tableConfig: ITableConfig
}

type TablePageDataType<T> = {
  curPage: number
  pageSize: number
  total: number
  data: Array<T>
}

const props = defineProps<Props>()
type TableDataType = typeof props.tableConfig.columns

const filterFromValue = computed(() => props.filterConfig.formValue)

const tableRef = ref(null)
onMounted(() => {
})

const emit = defineEmits(['changeFilterFormValue'])
watch(
  filterFromValue,
  (val) => {
    emit('changeFilterFormValue', val)
  },
  {deep: true}
)



let loading = ref(true)

const tablePageData: TablePageDataType<any> = reactive({
  curPage: 1,
  pageSize: 10,
  total: 0,
  data: [],
})

const getData = async (init?: boolean) => {
  loading.value = true
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('')
    }, 1000 * 0)
  })
  const res: IResDataType = await api.get(props.tableConfig.url, {
    params: {
      ...filterFromValue.value,
      curPage: init ? 1 : tablePageData.curPage,
      pageSize: init ? 10 : tablePageData.pageSize,
    },
  })
  if (res.success) {
    loading.value = false
    tablePageData.curPage = res.data.curPage
    tablePageData.pageSize = res.data.pageSize
    tablePageData.total = res.data.total
    tablePageData.data = res.data.data
  }
}

const handleSizeChange = (val: number) => {
  tablePageData.pageSize = val
  getData()
}
const handleCurrentChange = (val: number) => {
  tablePageData.curPage = val
  getData()
}
const onSubmit = () => {
  getData(true)
}

const onReset = () => {
  props.filterConfig.resetHandler()
  getData(true)
}

onSubmit()
</script> -->
