class TempTodo {
    list = [];
    filter = 'All';

    getList() {
        return this.list.filter(item => (this.filter === 'All') || ((this.filter === 'Completed') === item.isCompleted));
    }

    add(text) {
        let id = this.list.length ? this.list[this.list.length - 1].id + 1 : 0
        return this.list.push({id: id, text, isCompleted: false})
    }

    delete(id){
        return this.list = this.list.filter(elem => elem.id !== id);
    }

    check(id) {
       return this.list = this.list.map(item => item.id === id ? {...item, isCompleted: !item.isCompleted} : item)
    }

    checkAll() {
         return this.list = this.list.map(item => ({...item, isCompleted: true}))
    }

    clearCompleted() {
        return this.list = this.list.map(item => ({...item, isCompleted: false}))
    }
    filterAll() {
        return this.filter = 'All'
    }
    filterTodo() {
        return this.filter = 'ToDo'
    }
    filterCompleted() {
        return this.filter = 'Completed'
    }
}

module.exports = new TempTodo()
