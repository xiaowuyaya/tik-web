import useClipboard from "vue-clipboard3"
import {ElMessage} from "element-plus";

export async function copy(str) {
    try {
        const { toClipboard } = useClipboard()
        await toClipboard(str)
        ElMessage.success(`复制成功：${str}`)
    } catch (err) {
        ElMessage.error(`复制异常：${err}`)
    }
}