import { reactive, computed } from "vue";

function useAddList() {
    const list = reactive({
        dataList: [
            { name: "领哥学vue3", active: false, id: 0 },
            { name: "欢迎你的加入", active: true, id: 1 },
            { name: "一起愉快的学习吧", active: false, id: 2 },
            { name: "冲鸭~~", active: false, id: 3 },
        ],
        names: "",
    });
    let total = computed(() => list.dataList.length);
    function addList() {
        list.dataList.push({
            name: `${list.names}`,
            active: false,
            id: list.dataList.length,
        });
        list.names = "";
    }
    function handleChangeActive(ids){
      console.log(ids);
      list.dataList.forEach((item)=>{
        if(item.id===ids){
          item.active=!item.active;
          return;
        }
      })
    }
    return { list, addList, total, handleChangeActive };
}

export default useAddList;
