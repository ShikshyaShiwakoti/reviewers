const todo={
    id: 30,
    active:false,
    title:'Run',
  user: {
      id: 30,
     name:'shikshya'

}
}
  const {user}=todo
  const {name:username}=user
  const todo2={
    ...todo,
    user:{
        ...todo.user
    }

  }
  todo.user.name='ubdate'
  console.log(todo2.user.name)
