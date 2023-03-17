let eventBus = new Vue()

Vue.component('allcolumn', {
    template: `

<div id="cols"
    <column1></column1>
</div>
    `,
    data() {
        return {
            column1: [],
            errors: [],
        }
    },
})

Vue.component('column1', {
    template: `
    <div class="cols-wrapper">
            <div class="col">
                <ul>
                    <li class="cards" style="background-color: #ee666f" v-for="card in column1"><p class="p-title">{{ card.title }}</p>
                        <ul>
                            <li class="tasks" v-for="t, index in card.subtasks" @click="newStatus1(card, t, index)" v-if="t.title != null"> 
                                <p :class="{completed: t.completed}" >{{t.title}}</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
    </div>    
    `,
    data() {
        return {
            column1: [],
        }
    },
})


let app = new Vue({
    el: '#app',
    data: {
        name: 'Задачи'
    }
})