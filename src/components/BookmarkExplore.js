const BookmarkExplore = ({name, url, createBookmark}) => {
    return (
        <>
            <h1 className="niceText">{name}</h1>
            <button className="niceText" onClick={() => createBookmark({name})}>
                ADD
            </button>
        </>
    )
}

export default BookmarkExplore