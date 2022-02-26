export default function Modal(){

    const cancelButton = document.querySelector('.button.cancel')
    const modalWrapper = document.querySelector('.modal-wrapper')

    cancelButton.addEventListener("click", close)

    function open(){
        // funcionalida de de adicionar active na modal
        modalWrapper.classList.add("active")
    }
    function close(){
        // excluir active da modal
        modalWrapper.classList.remove("active")
    }

    return{
        open,
        close
    }
}