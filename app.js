let PlanPickerItemComponent = {
    template: '#plan-picker-item-template',
    props: {
        name: String,
        description: String,
        price: Number,
        selectedPlan: {
            type: String
        }
    },
    computed: {
        isSelected() {
            return this.name === this.selectedPlan
        }
    },
    methods: {
        select() {
            this.$emit('select', this.name)
        }
    }
}

let PlanPickerComponent = {
    template: '#plan-picker-template',
    components: {
        'plan-picker-item': PlanPickerItemComponent
    },
    data () {
        return {
            plans: ['Lilly', 'Frank', 'Olivia', 'Jessie'],
            selectedPlan: null
        }
    },
    methods: {
        selectPlan(plan) {
            this.selectedPlan = plan
        }
    }
}

// Vue.component('click-counter', {
//     template: '<button @click="count++">{{count}}</button>',
//     data () {
//         return {
//             count: 0
//         }
//     }
// })

new Vue({
    el: '#app',
    components: {
        'plan-picker': PlanPickerComponent
    }
})
