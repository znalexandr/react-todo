import { Container } from 'unstated'
 
class TodoistContainer extends Container {
  taskId = 100

  state = {
        tasks: [
            this.createTask("Мы"),
            this.createTask("Работаем"),
            this.createTask("unstated"),
            this.createTask("Task"),
        ],
        createItemTask: '',
        search: '',
        filterTask: false,
  }

  createTask(name) {
      return {
          name, 
          important: false,
          done: false,
          id: this.taskId++
      }
  }

  toggleProperty(arr, id, propName) {
      // 1. обновить объект
          // поиск индекса по значению в объекте
          const idx = arr.findIndex( (el) => el.id === id ) 

          // старый элемент массива
          const oldItem = arr[idx]; 

          // создаем новый элемент (не мутирая старый)
          const newItem = {...oldItem, [propName]: !oldItem[propName]}

      // 2. создать новый массив

          return  [
              ...arr.slice(0, idx),
              newItem,
              ...arr.slice(idx + 1)
              
          ]
  } 

  changeDoneHandler = (id) => {
      this.setState( ({tasks}) => {
          return {
              tasks: this.toggleProperty(tasks, id, 'done')
          }
      })
      
  }

  changeImportantHandler = (id) => {
      this.setState( ({tasks}) => {
          return {
              tasks: this.toggleProperty(tasks, id, 'important')
          }
      })  
  }

  deleteItemHandler = (id) => {
      this.setState( ({tasks}) => {

          // 1. обновить объект
          // поиск индекса по значению в объекте
          const idx = tasks.findIndex( (el) => el.id === id ) 

          // 2. создать новый массив

          const newArray = [
              ...tasks.slice(0, idx),
              ...tasks.slice(idx + 1)
              
          ]

          return {
              tasks: newArray
          }
      }) 
  }

  addItemTask = (e) => {

    e.preventDefault()

    this.setState( ({tasks}) => {
        return {
            tasks: [
                ...tasks,
                this.createTask(this.state.createItemTask)   
            ],
            createItemTask: '',
            filterTask: false,
        }
    }) 
}

  addInputChange = (name) => {   
    this.setState((state) => {
        return {
            createItemTask: name
        }
    })
}

  viewItems = (arr, action = false) => {
    
    const res = arr.filter( (item) => {

        const name = item.name.toLowerCase()
        const search = this.state.search.toLowerCase()

        if(action === "active") {
            return (name.indexOf(search) > -1) && !item.done
        } else if(action === "done") {
            return (name.indexOf(search) > -1) && item.done
        } else {
            return name.indexOf(search) > -1
        }
    })

    return res
}

  handleSearch = (val) => {
    this.setState(({search}) => {
        return {
            search: val
        }
    })
}

  filterBtnChange = (action) => {
    this.setState(({filterTask}) => {
        return {
            filterTask: action
        }
    })
}

}
 
export default TodoistContainer