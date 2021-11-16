const BookmarkExplore = ({name, url, createBookmark}) => {
    return (
        <>
            <h1>{name}</h1>
            <button onClick={() => createBookmark({name})}>
            ADD
            </button>
        </>
    )
}

export default BookmarkExplore