var List = {
   id: "",
   title: "",
   project_id: "",
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
  
  var listOfList = [];
  var current_list = [];


/*CREATE LIST*/
function createList(project){

   let list_title = document.getElementById('inputListTitle').value;

   let new_list = Object.create(List);
   let count_id = listOfList.length;
   new_list.id = count_id;
   new_list.element_id = 'list-'+count_id;
   new_list.title = list_title;
   new_list.project_id = project;
   new_list.create_at = new Date();
   listOfList[count_id] = new_list;

   document.getElementById("inputListTitle").value = '';

   let list = listOfList[count_id];
   let project_id = list.project_id;
   let element_id = list.element_id;
   let title = (list.title ? list.title : '<span class="noContent";>(Sem Título)</span>');
   let description = (list.description ? list.description : '<span class="noContent">(Sem Descrição)</span>');

   var list_element = document.createElement("div");
   list_element.id = element_id;
   list_element.classList.add('listContainer');
   document.getElementById(project).appendChild(list_element);

   var content = '<h5 class="taskTitle">'+title+'</h5>';

   let icon_thrash =

   document.getElementById(element_id).innerHTML = '<div class="row"><div class="col-md-12"><h4>'+title+'</h4><input placeholder="Tarefa" type="text" id="inputTaskTitle-'+count_id+'" class="form-control d-inline" required autofocus></div><div class="col-md-12"><div class="row"><div class="col-md-6"><button id="remove-list-'+count_id+'" class="btn btn-danger"><i class="far fa-trash-alt"></i></button></div><div class="col-md-6"><button id="create-task-'+count_id+'" class="btn btn-primary"><i class="fas fa-plus"></i></button></div></div></div></div>';


   

   document.getElementById('remove-list-'+count_id).onclick = function() {removeList(element_id)};
   document.getElementById('create-task-'+count_id).onclick = function() {createTask(count_id)};

   current_list[count_id] = list_element;
}

function removeList(id) {
   for(let i = 0; i < (current_list.length); i++) {
      if (id == ('list-'+i)){
         document.getElementById('project').removeChild(current_list[i]);
         listOfList[i] = null;
         alert("Lista Removida !");
      }
   }
}