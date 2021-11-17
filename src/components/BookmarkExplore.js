const BookmarkExplore = ({name, url, createBookmark}) => {
    return (
        <>
            <h1>{name}</h1>
            <div className="button">
            <button onClick={() => createBookmark({name})}>
                ADD
            </button>
            </div>
        </>
    )
}

export default BookmarkExplore