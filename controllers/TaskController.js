
  var Task = {
    id: "",
    title: "",
    description: "",
    list_id: "",
    element_id: "",
    status: "",
    create_at: "",
    last_update: "",
    get_task_id: function() {
       return this.id;
    },
    get_title: function() {
       return this.title;
    },
    get_description: function() {
       return this.description;
    },
    get_create_at: function() {
       return this.create_at;
    }
 }
    
   var task_list = [];
   var current_task = [];
   var count_changes = 0;
   var history_changes = [];

   var Change = {
      id: "",
      element_id: "",
      event: "",
      element: "",
      message: "",
      create_at: ""
   }

   function mainHistory(event, element_name, id_element, title){
      
      let new_change = Object.create(Change);

        new_change.id = count_changes;
        new_change.id_element = id_element;
        new_change.event = event;

        new_change.element = element_name;
        new_change.create_at = Date();
        history_changes[count_changes] = new_change;

      if (event === "create") {
         new_change.message = element_name+" "+title+" foi criada.";
      } else if (event === "remove") {
         new_change.message = element_name+" "+title+" foi removida.";
      }

      count_changes++;

   }

/*CREATE TASK*/
function createTask(list){

    let task_title = document.getElementById('inputTaskTitle-'+list).value;
    /*let task_description = document.getElementById("inputDescrip").value;*/

    let new_task = Object.create(Task);
    let count_id = task_list.length;
    new_task.id = count_id;
    new_task.element_id = 'task-'+count_id;
    new_task.title = task_title;
    new_task.list_id = list;
    /*new_task.description = task_description;*/
    new_task.create_at = new Date();
    task_list[count_id] = new_task;

    document.getElementById('inputTaskTitle-'+list).value = '';
    /*document.getElementById("inputDescrip").value = '';*/

    let task = task_list[count_id];
    let list_id = task.list_id;
    let element_id = task.element_id;
    let title = (task.title ? task.title : '<span class="noContent";>(Sem Título)</span>');
    /*let description = (task.description ? task.description : '<span class="noContent">(Sem Descrição)</span>');*/


    var task_element = document.createElement("div");
    task_element.id = element_id;
    task_element.classList.add('taskContainer');
    document.getElementById('list-'+list).appendChild(task_element);

    var content = '<h5 class="taskTitle">'+title+'</h5>';

    document.getElementById(element_id).innerHTML = '<div class="container-fluid"><div class="row"><div class="col-md-12">'+content+'</div></div><div class="row"><div class="col-md-6 col-sm-6"><button id="remove-task-'+count_id+'" class="btn btn-danger"><i class="far fa-trash-alt"></i></button></div><div class="col-md-6 col-sm-6"><button id="conclude-task-'+count_id+'" class="btn btn-success"><i class="fas fa-check"></i></button></div></div></div>';

    document.getElementById('remove-task-'+count_id).onclick = function() {removeTask(element_id, list,'remove')};
    document.getElementById('conclude-task-'+count_id).onclick = function() {removeTask(element_id, list,'conclude')};

    current_task[count_id] = task_element;
}

var task_removed = [];
var task_conclude = [];
var count_task_conclude = 0;
var count_task_remove = 0;

function removeTask(id, list, action) {

	for(let i = 0; i < (current_task.length); i++) {
		if (id == ('task-'+i)){
	        document.getElementById('list-'+list).removeChild(current_task[i]);
            task_list[i] = null;

            if (action == 'conclude') {
                alert('Tarefa Concluída!');
            } else if (action == 'remove') {
                alert("Tarefa Removida !");
            }
            
        }
	}
}

   

