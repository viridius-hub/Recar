import MicroModal from 'micromodal'; 

// modals.forEach((modal)=>{
//     MicroModal.init({
//         onShow: modal => console.info(`${modal.id} is shown`), // [1]
//         onClose: modal => console.info(`${modal.id} is hidden`), // [2]
//         openTrigger: `data-modal-open`, // [3]
//         closeTrigger: `data-modal-close`, // [4]
//         openClass: 'modal_active', // [5]
//         // disableScroll: true, // [6]
//         // disableFocus: false, // [7]
//         // awaitOpenAnimation: false, // [8]
//         // awaitCloseAnimation: false, // [9]
//         // debugMode: true // [10]
//     });
// })

MicroModal.init({
    onShow: modal => console.info(`${modal.id} is shown`), // [1]
    onClose: modal => console.info(`${modal.id} is hidden`), // [2]
    openTrigger: `data-modal-open`, // [3]
    closeTrigger: `data-modal-close`, // [4]
    openClass: 'modal_active', // [5]
    disableScroll: false, // [6]
    // disableFocus: false, // [7]
    // awaitOpenAnimation: false, // [8]
    // awaitCloseAnimation: false, // [9]
    // debugMode: true // [10]
});