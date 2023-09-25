const DeleteModal = ({showDeleteModal, setShowDeleteModal, handleEventComment}) => {

    const handleClickCancel = () => {
        setShowDeleteModal({
            show: false,
            commentId: null,
        })
    }

    const handleClickDelete = () => {
        handleEventComment({
            eventType: "DELETE",
            commentId: showDeleteModal.commentId,
        })
        handleClickCancel();
    }
    
    return (
        <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-full bg-black bg-opacity-60">
            <div className="flex flex-col bg-white rounded-lg w-[380px] px-8 py-6">
                <p className="mb-4 text-xl font-medium text-black">Delete comment</p>
                <p className=" text-comments-page-Grayish-Blue">Are you sure want to delete this comment? This will remove the comment and can't be undone.</p>
                <div className="flex items-center justify-between mt-4">
                    <button className="py-3 font-medium text-white rounded-lg px-7 bg-comments-page-Grayish-Blue hover:bg-opacity-70" onClick={handleClickCancel}>NO, CANCEL</button>
                    <button className="py-3 font-medium text-white rounded-lg px-7 bg-comments-page-Soft-Red hover:bg-opacity-70" onClick={handleClickDelete}>YES, DELETE</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal