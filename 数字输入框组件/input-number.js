Vue.component('input-number', {
    template: `
        <div class="input-number">
            <input type="text" :value="num" />
        </div>
    `,
    props: {
        max: {
            type: Number,
            default: Infinity // 无限大
        },
        min: {
            type: Number,
            default: -Infinity // 无限小
        },
        value: {
            type: Number,
            default: 0
        }
    },
    // data() {
    //     return {
    //         currentValue: this.value // 初始化时引用父组件的value
    //     }
    // },
    // 大多数下建议用computed
    // watch: {
    //     currentValue(val) {
    //         this.$emit('input', val);
    //     }
    // }
    computed: {
        num() {
            return this.value
        },
    }
});