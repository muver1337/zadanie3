let eventBus = new Vue()

Vue.component('allcolumn', {
    template: `
<div class="cols">
            <create></create>
            <div class="tabs-back">
            </div>   
        </div>
    `,
    data() {
        return {
            column_1:[],
            column_2:[],
            column_3:[],
            column_4:[],
            errors: [],
        }
    },
})

Vue.component('column_1', {
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

Vue.component('create', {
    template: `
<slot name="body">
    <div class="createf">
        <form class="create" @submit.prevent="onSubmit">
            <label for="title">Заголовок</label>
            <input id="title" v-model="title" type="text" placeholder="Заголовок" required maxlength="30">   
            <label for="description">Описание</label>
            <textarea id="description" v-model="description" rows="5" columns="10" required maxlength="60"></textarea>
            <label for="deadline">Дедлайн</label>
            <input id="deadline" type="date" v-model="deadline" placeholder="дд.мм.гггг" required>        
            <label for="priority">Приоретет:</label>
            <select id="priority" v-model.number="priori">
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <button type="submit">Создать</button>
        </form>
    </div>
</slot>  
    `,
    data() {
        return {
            title: null,
            description: null,
            date: null,
            deadline: null,
            show: false,
            reason: [],
            priori: null,
        }
    },
    methods: {
        onSubmit() {
            let tab = {
                title: this.title,
                description: this.description,
                date: new Date().toLocaleDateString().split('.').reverse().join('-'),
                deadline: this.deadline,
                edit: null,
                editButton: false,
                refund: false,
                term: true,
                reason: [],
                priori: this.priori
            }
            eventBus.$emit('addColumn_1', tab);
            this.title = null;
            this.description = null;
            this.date = null;
            this.deadline = null;
            this.show = false;
            this.priori = null;
        },
        close() {
            this.show = false;
        }
    }
})

let app = new Vue({
    el: '#app',
    data: {
        name: 'Задачи'
    }
})