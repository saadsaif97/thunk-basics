const remindMeTo = task => {
  return `Remember to ${task}!!!`;
}
const remindMeLater = task => {
  return () => {
    return remindMeTo(task)
  }
}

console.log(remindMeTo('call mom'))

const reminder = remindMeLater('ding dong')
console.log(reminder())
