// 第一步 获取节点
const fill = document.querySelector('.fill');
const empties = document.getElementsByClassName('empty')
// console.log(empties);


// 第二部 fill的事件监听
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

// 第三步 fill拖动函数
function dragStart() {
    this.className += ' hold'
    setTimeout(() => (this.className = 'invisible'), 0)

}

function dragEnd() {
    this.className = 'fill'
}

// 第四步 循环empty盒子并设置事件监听
for (const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

// 第五步 empty函数
function dragOver(e) {
    e.preventDefault();

}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hoverd'
}

function dragLeave() {
    this.className = 'empty'
}

function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}